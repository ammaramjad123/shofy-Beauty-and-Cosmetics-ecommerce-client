import React from 'react';
import { SmDot } from '@/svg';

const ProductDetailsBreadcrumb = ({ category, title }) => {
  // ✅ Rename backend categories for frontend display
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

  return (
    <section className="breadcrumb__area breadcrumb__style-2 include-bg pt-50 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <div className="breadcrumb__list has-icon">
                <span className="breadcrumb-icon">
                  <SmDot />{" "}
                </span>
                <span><a href="#">Home</a></span>
                <span><a href="#">{getDisplayName(category)}</a></span>
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsBreadcrumb;
