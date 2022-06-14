import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function ProductDetailTab({data}) {
  
  return (
    <div className="product-detail-tab">
      <Tabs type="card">
        <TabPane tab="PRECAUTIONS" key="1">
        <h3 className="post-detail-paragraph">
                  {data.precaution1}
                </h3><br/>
                <h3 className="post-detail-paragraph">
                  {data.precaution2}
                </h3>
        </TabPane>       
      </Tabs>
    </div>
  );
}

export default React.memo(ProductDetailTab);
