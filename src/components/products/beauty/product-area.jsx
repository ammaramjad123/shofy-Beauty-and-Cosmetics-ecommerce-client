import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRightSmTwo } from '@/svg';
import ProductItem from './product-item';
import ErrorMsg from '@/components/common/error-msg';
import { HomeThreePrdLoader } from '@/components/loader';

const ProductArea = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://shofy-backend-git-main-ammar-amjads-projects.vercel.app/api/products/all')
      .then(res => res.json())
      .then(data => {
        setProducts(data.data.sort(() => 0.5 - Math.random()).slice(0, 8));
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  if (loading) return <HomeThreePrdLoader loading={true} />;
  if (error) return <ErrorMsg msg="There was an error" />;
  if (!products || products.length === 0) return <ErrorMsg msg="No Products found!" />;

  return (
    <section className="tp-product-area grey-bg-8 pt-95 pb-80">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 col-md-8">
            <div className="tp-section-title-wrapper-3 mb-55">
              <span className="tp-section-title-pre-3">Shop by Category</span>
              <h3 className="tp-section-title-3">Best sellers</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="tp-product-more-3 text-md-end mb-65">
              <Link href="/shop" className="tp-btn">
                Shop All Products <ArrowRightSmTwo />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map(prd => (
            <div key={prd._id} className="col-lg-3 col-md-4 col-sm-6">
              <ProductItem product={prd} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductArea;
