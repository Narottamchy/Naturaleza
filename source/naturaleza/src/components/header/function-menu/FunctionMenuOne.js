import React from "react";

import Container from "../../other/Container";
import SearchForm from "../elements/SearchForm";

function FunctionMenuOne({ activeHeaderCollapse }) {
  return (
    <div className="header-function-menu-one">
      <Container>
        <div className="function-menu-wrapper">
              <SearchForm />
        </div>
      </Container>
    </div>
  );
}
export default React.memo(FunctionMenuOne);
