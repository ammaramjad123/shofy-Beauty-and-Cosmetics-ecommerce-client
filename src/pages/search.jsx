import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import ErrorMsg from "@/components/common/error-msg";
import SearchPrdLoader from "@/components/loader/search-prd-loader";
import ProductItem from "@/components/products/fashion/product-item";
import SEO from "@/components/seo";
import NiceSelect from "@/ui/nice-select";
import Footer from "@/layout/footers/footer";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import { useGetAllProductsQuery } from "@/redux/features/productApi";
import { useState } from "react";

export default function SearchPage({ query }) {
  const { searchText, productType } = query;
  const { data: products, isError, isLoading } = useGetAllProductsQuery();
  const [shortValue, setShortValue] = useState("");
  const perView = 8;
  const [next, setNext] = useState(perView);

  // Short handler
  const shortHandler = (e) => setShortValue(e.value);
  const handleLoadMore = () => setNext((v) => v + 4);

  // ✅ Rename map: connects frontend terms → backend category names
  const renameToBackend = {
    "formal shirts": "Headphones",
    "t-shirts": "Mobile Tablets",
    "polo shirts": "CPU Heat Pipes",
    "hoodies sweatshirts": "Smart Watch",
    "blazers suits": "Bluetooth",
    "jackets": "Clothing",
    "jeans": "Bags",
    "trousers chinos": "Shoes",
    "sneakers": "Discover Skincare",
    "formal shoes": "Beauty of Skin",
    "belts": "Awesome Lip Care",
    "wallets": "Facial Care",
    "watches": "Bracelets",
    "sunglasses": "Earrings",
    "perfumes body sprays": "Necklaces",
  };

  // decide what to render
  let content = null;
  if (isLoading) content = <SearchPrdLoader loading={isLoading} />;
  if (!isLoading && isError) content = <ErrorMsg msg="There was an error" />;

  if (!isLoading && !isError && products?.data?.length > 0) {
    let all_products = products.data;
    let product_items = all_products;

    // ✅ prepare backend-compatible search term
    const backendSearch =
      renameToBackend[searchText?.toLowerCase()?.trim()] || searchText;

    // ✅ Search by title, category, or tag (case-insensitive)
    if (searchText && !productType) {
      product_items = all_products.filter(
        (p) =>
          p.title?.toLowerCase().includes(backendSearch.toLowerCase()) ||
          p.category?.name?.toLowerCase().includes(backendSearch.toLowerCase()) ||
          p.tags?.some?.((t) =>
            t.toLowerCase().includes(backendSearch.toLowerCase())
          )
      );
    }

    if (searchText && productType) {
      product_items = all_products
        .filter(
          (p) => p.productType?.toLowerCase() === productType?.toLowerCase()
        )
        .filter(
          (p) =>
            p.title?.toLowerCase().includes(backendSearch.toLowerCase()) ||
            p.category?.name?.toLowerCase().includes(backendSearch.toLowerCase()) ||
            p.tags?.some?.((t) =>
              t.toLowerCase().includes(backendSearch.toLowerCase())
            )
        );
    }

    // Sorting
    if (shortValue === "Price low to high")
      product_items = product_items.slice().sort((a, b) => a.price - b.price);
    if (shortValue === "Price high to low")
      product_items = product_items.slice().sort((a, b) => b.price - a.price);

    // Results display
    if (product_items.length === 0) {
      content = (
        <div className="text-center pt-80 pb-80">
          <h3>
            Sorry, nothing matched{" "}
            <span style={{ color: "#0989FF" }}>{searchText}</span> search terms
          </h3>
        </div>
      );
    } else {
      content = (
        <section className="tp-shop-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="tp-shop-main-wrapper">
                  <div className="tp-shop-top mb-45">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="tp-shop-top-left d-flex align-items-center">
                          <div className="tp-shop-top-result">
                            <p>
                              Showing 1–{product_items.length} of{" "}
                              {all_products.length} results
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
                          <div className="tp-shop-top-select">
                            <NiceSelect
                              options={[
                                { value: "Short By Price", text: "Short By Price" },
                                { value: "Price low to high", text: "Price low to high" },
                                { value: "Price high to low", text: "Price high to low" },
                              ]}
                              defaultCurrent={0}
                              onChange={shortHandler}
                              name="Short By Price"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tp-shop-items-wrapper tp-shop-item-primary">
                    <div className="row">
                      {product_items.slice(0, next).map((item) => (
                        <div
                          key={item._id}
                          className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                        >
                          <ProductItem product={item} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Load More */}
                  {next < product_items?.length && (
                    <div className="load-more-btn text-center pt-50">
                      <button
                        onClick={handleLoadMore}
                        className="tp-btn tp-btn-2 tp-btn-blue"
                      >
                        Load More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

  return (
    <Wrapper>
      <SEO pageTitle="Search Products" />
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Search Products" subtitle="Search Products" />
      {content}
      <Footer primary_style={true} />
    </Wrapper>
  );
}

export const getServerSideProps = async (context) => {
  const { query } = context;
  return { props: { query } };
};
