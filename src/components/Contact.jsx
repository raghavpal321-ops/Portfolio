import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_jowg7se",
        "template_2vev6pa",
        form.current,
        "_OAIfQ9qQ6RqQIlSd"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error);
          alert("❌ Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">

      <h2 className="section-title">Get In Touch</h2>

      <p className="contact-subtitle">
        I'm actively looking for internship and full-time opportunities.
        If you have an opportunity or project in mind, I'd love to hear from you.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            Feel free to reach out through email or connect with me on GitHub
            and LinkedIn. I usually respond within 24 hours.
          </p>

          <div className="info-card">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>raghavpal321@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Kanpur, Uttar Pradesh</p>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/raghavpal321-ops"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/raghav-pal-108693343"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>

    </section>
  );
}

export default Contact;