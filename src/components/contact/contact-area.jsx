import React from "react";
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import ContactForm from "../forms/contact-form";

const ContactArea = () => {
  return (
    <section className="tp-contact-area pb-100">
      <div className="container">
        <div className="tp-contact-inner">
          <div className="row">
            {/* Left side - Contact Form */}
            <div className="col-xl-9 col-lg-8">
              <div className="tp-contact-wrapper">
                <h3 className="tp-contact-title">Send a Message</h3>
                <div className="tp-contact-form">
                  <ContactForm />
                  <p className="ajax-response"></p>
                </div>
              </div>
            </div>

            {/* Right side - Contact Info */}
            <div className="col-xl-3 col-lg-4">
              <div className="tp-contact-info-wrapper">
                {/* Email & Phone */}
                <div className="tp-contact-info-item mb-5 text-start">
                  <div className="tp-contact-info-icon mb-3">
                    <FaEnvelopeOpenText size={42} color="#0888fe" />
                  </div>
                  <div className="tp-contact-info-content">
                    <p className="mb-1">
                      <a
                        href="mailto:support@eclipsemenswear.com"
                        className="contact-link"
                      >
                        support@eclipsemenswear.com
                      </a>
                    </p>
                    <p className="fw-semibold">
                      <a href="tel:670-413-90-762" className="contact-link">
                        +670 413 90 762
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="tp-contact-info-item mb-5 text-start">
                  <div className="tp-contact-info-icon mb-3">
                    <FaMapMarkerAlt size={42} color="#0888fe" />
                  </div>
                  <div className="tp-contact-info-content">
                    <p className="mb-0">
                      <a
                        href="https://www.google.com/maps/place/New+York,+NY,+USA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        84 Sleepy Hollow St.<br />Jamaica, New York 1432
                      </a>
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="tp-contact-info-item text-start">
                  <div className="tp-contact-info-icon mb-3">
                    <FaShareAlt size={42} color="#0888fe" />
                  </div>
                  <div className="tp-contact-info-content">
                    <h4 className="tp-contact-social-title mb-3">
                      Find on social media
                    </h4>
                    <div className="tp-contact-social-icon d-flex gap-2">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn"
                      >
                        <FaFacebookF size={16} />
                      </a>
                      <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn"
                      >
                        <FaTwitter size={16} />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn"
                      >
                        <FaLinkedinIn size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped Styles */}
      <style jsx>{`
        .tp-contact-info-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .tp-contact-info-item {
          width: 100%;
        }

        .tp-contact-info-icon {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .tp-contact-info-content {
          text-align: left;
          margin-left: 4px;
        }

        .contact-link {
          text-decoration: none;
          color: #111;
          font-size: 15px;
          transition: color 0.2s ease;
        }

        .contact-link:hover {
          color: #0888fe;
        }

        .social-btn {
          width: 36px;
          height: 36px;
          border: 1px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background-color: #0888fe;
          border-color: #0888fe;
        }

        .social-btn:hover svg {
          color: #fff;
        }

        @media (max-width: 991px) {
          .tp-contact-info-wrapper {
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactArea;
