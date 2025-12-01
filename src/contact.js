import React, { useState } from "react";
import "./App.css";

function Contact({ email }) {
  const [form, setForm] = useState({
    name: "",
    senderEmail: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = `Portfolio Contact — ${form.name || "No Name"}`;
    const body = `
${form.message}

----
From: ${form.name || "Anonymous"}
Email: ${form.senderEmail || ""}
`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  return (
    <div className="contact-container">
      <form className="contact-card" onSubmit={handleSubmit}>
        <div className="contact-header">
          <h1 className="contact-title">Contact Me!</h1>
          <p className="contact-subtitle">
            If you’d like to chat about internships, projects, or anything else,
            feel free to send me a message.
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

          <button type="submit" className="contact-submit">
            Send message
          </button>

          {submitted && (
            <p className="contact-success">
              ✔️ Your email app should have opened with a draft to me.
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
