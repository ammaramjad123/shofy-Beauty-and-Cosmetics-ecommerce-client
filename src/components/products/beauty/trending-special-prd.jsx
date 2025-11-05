import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper';
import Image from 'next/image';
// internal
import special_thumb from '@assets/img/product/special/big/special-big-1.png';
import { ArrowNextSm, ArrowPrevSm, PlusTwo } from '@/svg';
import ProductItem from './product-item';
import ErrorMsg from '@/components/common/error-msg';
import { HomeThreeTrendingPrdLoader } from '@/components/loader';

// slider settings
const sliderSetting = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  pagination: {
    el: ".tp-special-slider-dot",
    clickable: true,
  },
  navigation: {
    nextEl: ".tp-special-slider-button-next",
    prevEl: ".tp-special-slider-button-prev",
  }
};

const TrendingSpecialPrd = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:7000/api/products/all')
      .then(res => res.json())
      .then(data => {
        setProducts(data.data.sort(() => 0.5 - Math.random()).slice(0, 7));
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  if (loading) return <HomeThreeTrendingPrdLoader loading={true} />;
  if (error) return <ErrorMsg msg="There was an error" />;
  if (!products || products.length === 0) return <ErrorMsg msg="No Products found!" />;

  return (
    <section className="tp-special-area fix">
      <div className="container">
        <div className="row gx-2">
          <div className="col-xl-5 col-md-6">
            <div className="tp-special-slider-thumb">
              <div className="tp-special-thumb">
                <Image src={special_thumb} alt="special-big img" priority />
                <div className="tp-special-hotspot-item tp-special-hotspot-1">
                  <span className="tp-hotspot tp-pulse-border ">
                    <PlusTwo />
                  </span>
                  <div className="tp-special-hotspot-content">
                    <h3 className="tp-special-hotspot-title">Men’s Product</h3>
                    <p>Discover top-selling men's wear.</p>
                  </div>
                </div>
                <div className="tp-special-hotspot-item tp-special-hotspot-2">
                  <span className="tp-hotspot tp-pulse-border ">
                    <PlusTwo />
                  </span>
                  <div className="tp-special-hotspot-content">
                    <h3 className="tp-special-hotspot-title">Premium Collection</h3>
                    <p>Modern, stylish and trending items.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-md-6">
            <div className="tp-special-wrapper grey-bg-9 pt-85 pb-35">
              <div className="tp-section-title-wrapper-3 mb-40 text-center">
                <span className="tp-section-title-pre-3">Trending This Week’s</span>
                <h3 className="tp-section-title-3">Special products</h3>
              </div>

              <div className="tp-special-slider">
                <div className="row gx-0 justify-content-center">
                  <div className="col-xl-5 col-lg-7 col-md-9 col-sm-7">
                    <div className="tp-special-slider-inner p-relative">
                      <Swiper
                        {...sliderSetting}
                        modules={[Pagination, Navigation, EffectFade]}
                        className="tp-special-slider-active swiper-container"
                      >
                        {products.map((item) => (
                          <SwiperSlide key={item._id} className="tp-special-item grey-bg-9">
                            <ProductItem product={item} prdCenter={true} />
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      {/* dot style */}
                      <div className="tp-swiper-dot tp-special-slider-dot d-sm-none text-center"></div>
                      <div className="tp-special-arrow d-none d-sm-block">
                        <button className="tp-special-slider-button-prev">
                          <ArrowPrevSm />
                        </button>
                        <button className="tp-special-slider-button-next">
                          <ArrowNextSm />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSpecialPrd;
