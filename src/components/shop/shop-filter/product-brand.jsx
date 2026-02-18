import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
// internal
import ErrorMsg from "@/components/common/error-msg";
import { useGetActiveBrandsQuery } from "@/redux/features/brandApi";
import ShopBrandLoader from "@/components/loader/shop/shop-brand-loader";

const ProductBrand = ({ setCurrPage, shop_right = false }) => {
  const { data: brands, isError, isLoading } = useGetActiveBrandsQuery();
  const dispatch = useDispatch();

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <ShopBrandLoader loading={isLoading} />;
  } 
  else if (isError) {
    content = <ErrorMsg msg="There was an error" />;
  } 
  else if (!brands?.result || brands.result.length === 0) {
    content = <ErrorMsg msg="No Brands found!" />;
  } 
  else {
    const all_brands = brands.result;
    const sortedBrands = all_brands
      .slice()
      .sort((a, b) => b.products.length - a.products.length);

    const brand_items = sortedBrands.slice(0, 6);

    content = brand_items.map((b) => (
      <div key={b._id} className="tp-shop-widget-brand-item">
        <a style={{ cursor: "default" }}>
          <Image src={b.logo} alt="brand" width={60} height={50} />
        </a>
      </div>
    ));
  }

  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Popular Brands</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-brand-list d-flex align-items-center justify-content-between flex-wrap">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ProductBrand;
