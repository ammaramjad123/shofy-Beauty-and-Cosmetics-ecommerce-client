import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// internal (use your current images or swap later)
import featured_1 from '@assets/img/product/featured/featured-1.png';
import featured_2 from '@assets/img/product/featured/featured-2.png';
import featured_3 from '@assets/img/product/featured/featured-3.png';

// featured data
const featured_data = [
  {
    id: 1,
    img: featured_1,
    title: <>Premium Leather <br /> Jacket</>,
    subtitle: 'Refined fit, bold look — crafted for everyday confidence.',
    save: 72,
  },
  {
    id: 2,
    img: featured_2,
    title: <>Classic Sneakers</>,
    subtitle: 'Comfort and durability — the sneaker every outfit needs.',
    save: 98,
  },
  {
    id: 3,
    img: featured_3,
    title: <>Chronograph Sport <br /> Watch</>,
    subtitle: 'Precision timekeeping with a striking men’s design.',
    save: 133,
  },
];

const BeautyFeatured = () => {
  return (
    <>
      <section className="tp-featured-product-area pt-70 pb-150">
        <div className="container">
          <div className="row gx-0">
            {featured_data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                {/* Equal-height card wrapper */}
                <div className="tp-featured-item-3 text-center h-100 d-flex flex-column">
                  <div className="tp-featured-thumb-3 d-flex align-items-end justify-content-center">
                    <Image
                      src={item.img}
                      alt="featured image"
                      width={260}    // display size (use 260x260 for 563x563 sources)
                      height={260}
                      style={{ objectFit: 'contain' }}
                      priority={item.id === 1}
                    />
                  </div>

                  {/* Push content to align bottoms */}
                  <div className="tp-featured-content-3 mt-auto pb-40">
                    <h3 className="tp-featured-title-3">
                      <Link href="/shop">{item.title}</Link>
                    </h3>
                    <p>{item.subtitle}</p>
                    <div className="tp-featured-price-3">
                      <span>Save ${item.save}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BeautyFeatured;
