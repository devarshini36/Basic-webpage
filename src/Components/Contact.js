import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data to the console
    console.log('Form Data:', formData);
    alert('Your message has been sent!');
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Contact Us</h3>
                        <p>
                          Feel free to contact us any time. We will get back
                          to you as soon as we can!.
                        </p>
                        <form onSubmit={handleSubmit}>
                          <input
                            type="text"
                            className="form-control form-group"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="email"
                            className="form-control form-group"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="tel"
                            className="form-control form-group"
                            placeholder="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                          <textarea
                            className="form-control form-group"
                            placeholder="Message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                          <button className="contact_form_submit" type="submit">
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact_info_sec">
                      <h4>Contact Info</h4>
                      <div className="d-flex info_single align-items-center">
                        <i className="fas fa-headset"></i>
                        <span>+91 9568008975</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <i className="fas fa-envelope-open-text"></i>
                        <span>info@gmail.com</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <i className="fas fa-map-marked-alt"></i>
                        <span>Address: Your Address Here</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <div className="map_bind">
                  <iframe
                    title="basic"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124079.82616154134!2d79.4265032!3d13.62765245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f88620427%3A0xcf4152d1daca0cac!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1719807359063!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
