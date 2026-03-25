import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Contact() {
  const formRef = useRef();
  const navigate = useNavigate();

  const send = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_r9pvwxa", "template_l5xvcwg", formRef.current, "OGoWLC-FcDo-EBJ3c")
      .then(() => {
        Swal.fire({ title:"Success!", text:"Message sent successfully!", icon:"success", confirmButtonText:"OK" })
            .then(() => navigate("/"));
        formRef.current.reset();
      })
      .catch(err => { alert("Failed to send. Please try again."); console.error(err); });
  };

  return (
    <div className="page-shell">
      <div className="contact-shell">
        <h2 className="contact-title">Get in Touch</h2>

        <div className="contact-body">

          <div className="c-info">
            <h3 className="c-info-title">Contact Information</h3>
            <hr className="c-divider" />

            <div className="c-info-item">
              <span className="c-label">Email</span>
              <span className="c-value"><a href="mailto:velmani215@gmail.com">velmani215@gmail.com</a></span>
            </div>
            <hr className="c-divider" />

            <div className="c-info-item">
              <span className="c-label">Location</span>
              <span className="c-value">Madurai, India</span>
            </div>
            <hr className="c-divider" />

            <div className="c-info-item">
              <span className="c-label">Availability</span>
              <span className="c-value">Mon–Fri · 9 AM – 6 PM IST</span>
            </div>
            <hr className="c-divider" />

            <div className="c-info-item">
              <span className="c-label">Phone</span>
              <span className="c-value">9600487102<br />9047763848</span>
            </div>
          </div>

          <form ref={formRef} onSubmit={send} className="c-form-wrap">
            <div className="form-row">
              <div className="fg">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Your full name" required />
              </div>
              <div className="fg">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="you@email.com" required />
              </div>
            </div>

            <div className="fg">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone" type="tel" name="phone"
                placeholder="10-digit number"
                pattern="\d{10}" maxLength="10" required
                title="Enter exactly 10 digits"
                onInput={e => e.target.value = e.target.value.replace(/\D/g,"")}
              />
            </div>

            <div className="fg" style={{flex:1}}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message"
                placeholder="Tell me about your project..."
                required
                style={{flex:1, minHeight:"80px", maxHeight:"160px"}}
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

        </div>
      </div>
    </div>
  );
}
