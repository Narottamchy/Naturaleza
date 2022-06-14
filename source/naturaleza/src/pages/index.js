import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";

import * as shopActions from "../redux/actions/shopActions";
import LayoutOne from "../components/layout/LayoutOne";
import HeroSliderOne from "../components/sections/hero-slider/HeroSliderOne";
import heroslideOneData from "../data/sections/hero-slider.json";
import ProductTab from "../components/sections/product-thumb/ProductTab";
import categories from "../data/categories.json";
import PartnerOne from "../components/sections/partners/PartnerOne";
import Container from "../components/other/Container";
import Benefits from "../components/other/Benefits";
import ProductGrid from "../components/sections/product-thumb/ProductGrid";
import BlogSidebar from "../components/blog/BlogSidebar";
import BannerDeal from "../components/sections/banner/BannerDeal";
import BannerThree from "../components/sections/banner/BannerThree";
import bannerData from "../data/sections/banner.json";
import {
  fetchRecentPostsRequest
} from "../redux/actions/blogActions";

export default function Home() {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.blogReducer);
  const { allPosts, recentPosts } = blogState;
  useEffect(() => {
    dispatch(fetchRecentPostsRequest({ limit: 4 }));
  }, []);
  const [currentProductTabsCategory, setCurrentProductTabsCategory] = useState({
    featuredProducts: "",
    bestSellerProducts: "",
  });
  const {
    fetchFeaturedProductsRequest,
    fetchBestSellerProductsRequest,
    fetchDaleProductsRequest,
    fetchSaleProductsRequest,
  } = shopActions;
  const shopState = useSelector((state) => state.shopReducer);
  const {
    featuredProducts,
    bestSellerProducts,
    saleProducts,
  } = shopState;
  useEffect(() => {
    dispatch(fetchFeaturedProductsRequest({ limit: 6 }));
    dispatch(fetchBestSellerProductsRequest({ limit: 6 }));
    dispatch(fetchDaleProductsRequest({ limit: 6 }));
    dispatch(fetchSaleProductsRequest({ limit: 3 ,category: "Essential oils"}));
  }, [fetchFeaturedProductsRequest,fetchBestSellerProductsRequest,fetchDaleProductsRequest,fetchSaleProductsRequest,dispatch]);
  useEffect(() => {
    dispatch(
      fetchFeaturedProductsRequest({
        limit: 6,
        category: currentProductTabsCategory.featuredProducts,
      })
    );
  }, [dispatch,fetchFeaturedProductsRequest]);
  useEffect(() => {
    dispatch(
      fetchBestSellerProductsRequest({
        limit: 6,
        category: currentProductTabsCategory.bestSellerProducts,
      })
    );
  }, [currentProductTabsCategory.bestSellerProducts,fetchBestSellerProductsRequest,dispatch]);
  return (
    <LayoutOne
      title="Naturaleza"
      headerClass="-pink -no-space"
      footerClass="-pink"
    >
      <HeroSliderOne data={heroslideOneData.one} />
      <Container>
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={24} lg={6}>
          <BlogSidebar recentPostsData={recentPosts} />
            <ProductGrid
              style={{ marginBottom: 30 / 16 + "em" }}
              headerTitle="Best Essential Oils"
              headerClass="-small -underline"
              productClassName="-bordered"
              productCol={{ xs: 24, sm: 24 }}
              gutter={0}
              className="-pink"
              productType="tiny"
              data={saleProducts}
            />
            <Benefits
              style={{ marginBottom: 30 / 16 + "em" }}
              className="-pink -bordered"
              column
            />
          </Col>
          <Col xs={24} sm={24} lg={18}>
            <ProductTab
              style={{ marginBottom: 30 / 16 + "em" }}
              data={featuredProducts}
              productCol={{ xs: 12, sm: 8, lg: 8 }}
              onTabChange={(val) =>
                setCurrentProductTabsCategory({
                  ...currentProductTabsCategory,
                  featuredProducts: val,
                })
              }
              headerCategories={categories.slice(0, 4).map((item) => item.name)}
              headerTitle="Recommended products"
              headerType="row"
              headerClass="-small -underline"
              className="-pink"
            />
            <BannerDeal />
            <ProductTab
              style={{ marginBottom: 30 / 16 + "em" }}
              data={bestSellerProducts}
              productCol={{ xs: 12, sm: 8, lg: 8 }}
              onTabChange={(val) =>
                setCurrentProductTabsCategory({
                  ...currentProductTabsCategory,
                  bestSellerProducts: val,
                })
              }
              headerCategories={categories.slice(0, 4).map((item) => item.name)}
              headerTitle="Top Products "
              headerType="row"
              headerClass="-small -underline"
              className="-pink"
            />
            <BannerThree data={bannerData.three} />
          </Col>
        </Row>
      </Container>
      <PartnerOne style={{ marginTop: 70 / 16 + "rem" }} />
    </LayoutOne>
  );
}
