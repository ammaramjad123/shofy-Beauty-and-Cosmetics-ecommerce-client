// src/components/category/beauty-category.jsx  (updated)
import React from "react";
import Image from "next/image";
import Link from "next/link";

// 👉 Put four images in /public/assets/img/men/
import jacketImg from "/public/assets/img/men/jackets.jpg";
import footwearImg from "/public/assets/img/men/footwear.jpg";
import watchImg from "/public/assets/img/men/watches.jpg";
import groomingImg from "/public/assets/img/men/grooming.jpg";

const MEN_CATEGORIES = [
  { id: 1, title: "Jackets & Outerwear", category: "Clothing", count: 4, img: jacketImg },
  { id: 2, title: "Premium Footwear", category: "Beauty of Skin", count: 2, img: footwearImg },
  { id: 3, title: "Watches & Accessories", category: "Bracelets", count: 3, img: watchImg },
  { id: 4, title: "Grooming Essentials", category: "Necklaces", count: 2, img: groomingImg },
];


export default function BeautyCategory() {
  return (
    <section className="tp-category-area pt-40 pb-40">
      <div className="container">
        <div className="row g-4">
          {MEN_CATEGORIES.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
              <Link
                href={`/shop?category=${encodeURIComponent(
                  item.category.toLowerCase().replace(/&/g, "").split(" ").join("-")
                )}`}
                className="mens-cat-card d-block position-relative overflow-hidden rounded-3"
              >
                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-100 h-auto mens-cat-img"
                  priority={item.id === 1}
                />

                {/* Overlay */}
                <span className="mens-cat-overlay" />

                {/* Text */}
                <div className="mens-cat-text">
                  <h3 className="mens-cat-title">{item.title}</h3>
                  <p className="mens-cat-count">{item.count} Products</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* minimal scoped styles */}
      <style jsx global>{`
        .mens-cat-card { transform: translateZ(0); }
        .mens-cat-img { display:block; aspect-ratio: 3/4; object-fit: cover; }
        .mens-cat-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.55) 100%);
          transition: opacity .3s ease;
        }
        .mens-cat-text {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 22px;
          color: #fff !important;
        }
        .mens-cat-title {
          font-size: 24px;
          line-height: 1.2;
          margin: 0 0 6px;
          font-weight: 700;
          color: #fff !important;
        }
        .mens-cat-count {
          margin: 0;
          opacity: .95;
          color: #fff !important;
        }
        .mens-cat-card:hover .mens-cat-overlay { opacity: .75; }
        .mens-cat-card:hover { transform: translateY(-4px); transition: transform .25s ease; }
      `}</style>
    </section>
  );
}
