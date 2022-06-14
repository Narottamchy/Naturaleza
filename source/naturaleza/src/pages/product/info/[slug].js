import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductDetailRequest,fetchProductsRequest,
  fetchFeaturedProductsRequest, } from "../../../redux/actions/shopActions";
import LayoutOne from "../../../components/layout/LayoutOne";
import ProductDetailLayout from "../../../components/detail/product/ProductDetailLayout";
import Container from "../../../components/other/Container";
import PartnerOne from "../../../components/sections/partners/PartnerOne";
import ProductGrid from "../../../components/sections/product-thumb/ProductGrid";
import FetchDataHandle from "../../../components/other/FetchDataHandle";

function ProductDetail() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const shopState = useSelector((state) => state.shopReducer);
  const { productDetail, featuredProducts } = shopState;
  useEffect(() => {
    dispatch(fetchFeaturedProductsRequest({ limit: 6}));
    dispatch(fetchProductDetailRequest(slug));
  }, [dispatch,fetchFeaturedProductsRequest,fetchProductDetailRequest,slug]);
  return (
    <LayoutOne title="Product detail">
      <div className="product-detail">
        <Container fluid>
              <FetchDataHandle
                data={productDetail}
                renderData={(data) => <ProductDetailLayout data={data[0]} />}
              />
        </Container>
      </div>
      <Container fluid>
      <ProductGrid
          data={featuredProducts}
          headerTitle="Featured Products"
          headerClass="-small -underline"
          productCol={{ xs: 24, sm: 12, md: 8, lg: 6, xl: 4 }}
        />
      </Container>
      <PartnerOne />
    </LayoutOne>
  );
}

export default React.memo(ProductDetail);
