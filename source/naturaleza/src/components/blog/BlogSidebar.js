import React from "react";
import classNames from "classnames";
import FetchDataHandle from "../other/FetchDataHandle";
import Post from "../../components/post/Post";

const BlogSidebarSection = ({ children, title, className }) => {
  return (
    <div className={`blog-sidebar-section ${classNames(className)}`}>
      <div className="blog-sidebar-section__header">
        <h5>{title}</h5>
      </div>
      <div className="blog-sidebar-section__content">{children}</div>
    </div>
  );
};

function BlogSidebar({ recentPostsData }) {
  return (
    <div className="blog-sidebar">
      <BlogSidebarSection className="-recent-post" title="Recent Blogs">
        <FetchDataHandle
          data={recentPostsData}
          renderData={(data) =>
            data.map((item, index) => (
              <Post key={index} type="tiny" data={item} />
            ))
          }
        />
      </BlogSidebarSection>
    </div>
  );
}

export default React.memo(BlogSidebar);
