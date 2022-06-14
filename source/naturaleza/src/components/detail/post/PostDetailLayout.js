import { Button } from "antd";
import React from "react";
import Image from "next/image"



function PostDetailContent({ data, href }) {
  return (
    <div className="post-detail-content">
      <div className="post-detail-content__main">
        <h1 className="post-detail-title">{data.title} </h1>
        <Image priority={true}
          className="post-detail-image"
          width="100%"
          title={data.title}
          src={data.coverImage}
          alt="Post detail image"
          placeholder
          layout="responsive" height='100%'
        />
        <br/>
        <h3 className="post-detail-subtitle">
          {data.blogtitle1}
        </h3>
        <p className="post-detail-paragraph">
          {data.para1}
        </p>
        <br/>
        <h3 className="post-detail-subtitle">
          {data.blogtitle2}
        </h3>
        <p className="post-detail-paragraph">
          {data.para2}
        </p>
        <br/>
        <h3 className="post-detail-subtitle">
          {data.blogtitle3}
        </h3>
        <p className="post-detail-paragraph">
          {data.para3}
        </p>
        <br/>
        <h3 className="post-detail-subtitle">
          {data.blogtitle4}
        </h3>
        <p className="post-detail-paragraph">
          {data.para4}
        </p>
        <br/>
        <p className="post-detail-paragraph">By - {data.author.name}</p>
        <p className="post-detail-paragraph">Date - {data.publicDate}</p>
      </div>
      <div className="post-detail-content__footer">
        <div className="post-detail-content__footer-tags">
          {data.tag.map((item, index) => (
            <Button key={index}>{item}</Button>
          ))}
        </div>
       
      </div>
    </div>
  );
}

export default React.memo(PostDetailContent);
