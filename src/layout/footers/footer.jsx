import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@assets/img/logo/logo.svg';
import pay from '@assets/img/footer/footer-pay.png';
import social_data from '@/data/social-data';
import { Email, Location } from '@/svg';

const Footer = ({ style_2 = false, style_3 = false, primary_style = false }) => {
  return (
    <footer>
      <div
        className={`tp-footer-area ${
          primary_style
            ? 'tp-footer-style-2 tp-footer-style-primary tp-footer-style-6'
            : ''
        } ${
          style_2
            ? 'tp-footer-style-2'
            : style_3
            ? 'tp-footer-style-2 tp-footer-style-3'
            : ''
        }`}
        data-bg-color={`${style_2 ? 'footer-bg-white' : 'footer-bg-grey'}`}
      >
        <div className="tp-footer-top pt-95 pb-40">
          <div className="container">
            <div className="row">
              {/* Brand Column */}
              <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-1 mb-50">
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-logo mb-25">
                      <Link href="/">
                        <Image src={logo} alt="Eclipse Menswear logo" />
                      </Link>
                    </div>
                    <p className="tp-footer-desc">
                      Eclipse is redefining men’s fashion — from refined streetwear
                      to timeless classics. Quality, comfort, and confidence stitched
                      into every piece.
                    </p>
                    <div className="tp-footer-social mt-20">
                      {social_data.map((s) => (
                        <a
                          href={s.link}
                          key={s.id}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-black transition-all duration-300"
                        >
                          <i className={s.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Shop Column */}
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-2 mb-50">
                  <h4 className="tp-footer-widget-title">Shop</h4>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li><a href="/shop">New Arrivals</a></li>
                      <li><a href="/shop">Winter Collection</a></li>
                      <li><a href="/shop">Accessories</a></li>
                      <li><a href="/shop">Footwear</a></li>
                      <li><a href="/shop">Sale</a></li>
                      <li><a href="/shop">Gift Cards</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information Column */}
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-3 mb-50">
                  <h4 className="tp-footer-widget-title">Company</h4>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li><a href="#">About Eclipse</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Shipping & Returns</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Column */}
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-4 mb-50">
                  <h4 className="tp-footer-widget-title">Get In Touch</h4>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-talk mb-20">
                      <span>Need Assistance?</span>
                      <h4>
                                                <a href="tel:670-413-90-762">+670 413 90 762</a>

                      </h4>
                    </div>
                    <div className="tp-footer-contact">
                      <div className="tp-footer-contact-item d-flex align-items-start mb-15">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <Email />
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>
                            <a href="mailto:support@eclipsemenswear.com">
                              support@eclipsemenswear.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <Location />
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>
                            <a
                              href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.6976637,-74.1197638,11z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2"
                              target="_blank"
                              rel="noreferrer"
                            >
                             84 sleepy hollow st. <br /> jamaica, New York 1432
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="tp-footer-bottom border-t border-gray-200">
          <div className="container">
            <div className="tp-footer-bottom-wrapper">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="tp-footer-copyright">
                    <p>
  © {new Date().getFullYear()} Eclipse Men’s Wear — All Rights
  Reserved. Crafted with ❤️ by{" "}
  <Link href="https://www.cobraintech.com" target="_blank" rel="noreferrer">
    CoBrain
  </Link>.
</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tp-footer-payment text-md-end" style={{ maxWidth: '234px', marginLeft: 'auto' }}>
  <Image
    src={pay}
    alt="Payment methods"
    width={750}
    height={125}
    style={{ width: '100%', height: 'auto' }}
    priority
  />
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
