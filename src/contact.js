import React, { useState } from "react";
import "./App.css";

function Contact({ email }) {
  const [form, setForm] = useState({
    name: "",
    senderEmail: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const WEB3FORMS_ACCESS_KEY = "679c77aa-b91a-4ee0-a009-33b4bdb1bd57";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.senderEmail,
          message: form.message,
          from_page: "arengharibian.github.io/contact",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", senderEmail: "", message: "" });
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  }

  return (
    <div className="contact-container">
      <form className="contact-card" onSubmit={handleSubmit}>
        <div className="contact-header">
          <h1 className="contact-title">Contact Me!</h1>
          <p className="contact-subtitle">
            If you’d like to collaborate, discuss opportunities, or just say hello, feel free to reach out.
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-field">
            <label className="contact-label">Name</label>
            <input
              name="name"
              type="text"
              className="contact-input"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label className="contact-label">Email</label>
            <input
              name="senderEmail"
              type="email"
              className="contact-input"
              placeholder="you@example.com"
              value={form.senderEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label className="contact-label">Message</label>
            <textarea
              name="message"
              className="contact-textarea"
              placeholder="Write your message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="contact-success">✔️ Thanks! Your message was sent.</p>
          )}

          {status === "error" && (
            <p className="contact-error">
              Something went wrong. You can also email me directly at{" "}
              <a href={`mailto:${email}`}>{email}</a>.
            </p>
          )}
        </div>
      </form>

      <p className="contact-alt">
        Prefer directly? Email me at{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </div>
  );
}

export default Contact;
