import React from "react";
import Image from "next/image";
import { FaCcPaypal, FaCcVisa, FaCcMastercard, FaCcStripe } from "react-icons/fa";

// 🧩 Function to rename backend category names for frontend display
const getDisplayName = (name) => {
  const rename = {
    "Headphones": "Formal Shirts",
    "Mobile Tablets": "T-Shirts",
    "CPU Heat Pipes": "Polo Shirts",
    "Smart Watch": "Hoodies & Sweatshirts",
    "Bluetooth": "Blazers & Suits",
    "Clothing": "Jackets",
    "Bags": "Jeans",
    "Shoes": "Trousers & Chinos",
    "Discover Skincare": "Sneakers",
    "Beauty of Skin": "Formal Shoes",
    "Awesome Lip Care": "Belts",
    "Facial Care": "Wallets",
    "Bracelets": "Watches",
    "Earrings": "Sunglasses",
    "Necklaces": "Perfumes & Body Sprays",
  };
  return rename[name] || name;
};

const DetailsBottomInfo = ({ sku, category, tag }) => {
  return (
    <>
      {/* product-details-query */}
      <div className="tp-product-details-query">
        <div className="tp-product-details-query-item d-flex align-items-center">
          <span>SKU: </span>
          <p>{sku}</p>
        </div>
        <div className="tp-product-details-query-item d-flex align-items-center">
          <span>Category: </span>
          <p>{getDisplayName(category)}</p>
        </div>
        <div className="tp-product-details-query-item d-flex align-items-center">
          <span>Tag: </span>
          <p>{tag}</p>
        </div>
      </div>

      {/*  product-details-social */}
      <div className="tp-product-details-social">
        <span>Share: </span>
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
      </div>

      {/* product-details-msg */}
      <div className="tp-product-details-msg mb-15">
        <ul>
          <li>30 days easy returns</li>
          <li>Order yours before 2.30pm for same day dispatch</li>
        </ul>
      </div>

      {/* ✅ Replaced payment images with responsive React Icons */}
      <div className="tp-product-details-payment d-flex align-items-center flex-wrap justify-content-between">
        <p>
          Guaranteed safe <br /> & secure checkout
        </p>
        <div className="payment-icons d-flex align-items-center flex-wrap gap-3">
          <FaCcPaypal style={{ color: "#003087", fontSize: "2.6rem" }} />
          <FaCcVisa style={{ color: "#1A1F71", fontSize: "2.6rem" }} />
          <FaCcMastercard style={{ color: "#EB001B", fontSize: "2.6rem" }} />
          <FaCcStripe style={{ color: "#635BFF", fontSize: "2.6rem" }} />
        </div>
      </div>

      {/* Responsive styling */}
      <style jsx>{`
        .payment-icons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .payment-icons {
            justify-content: center;
            width: 100%;
            margin-top: 10px;
          }

          .payment-icons :global(svg) {
            font-size: 2.2rem !important;
          }
        }

        @media (max-width: 480px) {
          .payment-icons :global(svg) {
            font-size: 1.9rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default DetailsBottomInfo;
