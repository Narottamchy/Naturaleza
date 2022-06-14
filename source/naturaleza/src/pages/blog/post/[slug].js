import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Breadcrumb, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';

import {
  fetchPostDetailRequest,
  fetchRecentPostsRequest,
} from "../../../redux/actions/blogActions";
import LayoutOne from "../../../components/layout/LayoutOne";
import Container from "../../../components/other/Container";
import BlogSidebar from "../../../components/blog/BlogSidebar";
import PostDetailLayout from "../../../components/detail/post/PostDetailLayout";
import FetchDataHandle from "../../../components/other/FetchDataHandle";
import PartnerOne from "../../../components/sections/partners/PartnerOne";

function PostDetail() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const blogState = useSelector((state) => state.blogReducer);
  const { postDetail, recentPosts } = blogState;
  useEffect(() => {
    dispatch(fetchPostDetailRequest(slug));
    dispatch(fetchRecentPostsRequest({ limit: 4 }));
  }, [dispatch,slug,fetchPostDetailRequest,fetchRecentPostsRequest]);
  return (
    <LayoutOne title="Post detail">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
          <Link href='/'><a><i className="fas fa-home" />
            Home</a></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Blog</Breadcrumb.Item>
        </Breadcrumb>
        <div className="blog-detail">
          <Row gutter={30}>
            <Col xs={24} lg={6}>
              <BlogSidebar recentPostsData={recentPosts} />
            </Col>
            <Col xs={24} lg={18}>
              <FetchDataHandle
                data={postDetail}
                renderData={(data) => <PostDetailLayout data={data[0]} />}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <PartnerOne />
    </LayoutOne>
  );
}

export default React.memo(PostDetail);
