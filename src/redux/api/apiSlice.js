import Cookies from "js-cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_API_BASE_URL = "http://localhost:7000";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers) => {
      try {
        const userInfo = Cookies.get("userInfo");
        if (userInfo) {
          const user = JSON.parse(userInfo);
          if (user?.accessToken) {
            headers.set("Authorization", `Bearer ${user.accessToken}`);
          }
        }
      } catch (error) {
        console.error("Error parsing user info:", error);
      }
      return headers;
    },
  }),

  // 🔥 THIS FIXES YOUR FLASHING ISSUE
  keepUnusedDataFor: 60, // keep cache for 60 seconds

  refetchOnMountOrArgChange: false, // prevent unnecessary refetch flicker

  refetchOnReconnect: true,
  refetchOnFocus: false,

  tagTypes: [
    "Products",
    "Coupon",
    "Product",
    "RelatedProducts",
    "UserOrder",
    "UserOrders",
    "ProductType",
    "OfferProducts",
    "PopularProducts",
    "TopRatedProducts",
  ],

  endpoints: () => ({}),
});
