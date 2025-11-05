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

  // ✅ Create slug for URL (keeps links consistent with backend filters)
  const getCategorySlug = (name) => {
    const rename = {
      "Headphones": "formal-shirts",
      "Mobile Tablets": "t-shirts",
      "CPU Heat Pipes": "polo-shirts",
      "Smart Watch": "hoodies-sweatshirts",
      "Bluetooth": "blazers-suits",
      "Clothing": "jackets",
      "Bags": "jeans",
      "Shoes": "trousers-chinos",
      "Discover Skincare": "sneakers",
      "Beauty of Skin": "formal-shoes",
      "Awesome Lip Care": "belts",
      "Facial Care": "wallets",
      "Bracelets": "watches",
      "Earrings": "sunglasses",
      "Necklaces": "perfumes-body-sprays",
    };
    return rename[name] || name.toLowerCase().replace(/&/g, '').split(' ').join('-');
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
                <span><a href="/">Home</a></span>
                {/* ✅ Dynamically linked category */}
                <span>
                  <a href={`/shop?category=${getCategorySlug(category)}`}>
                    {getDisplayName(category)}
                  </a>
                </span>
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
