import React from "react";

import Container from "../../other/Container";
import Navigator from "../elements/Navigator";
import MobileMenuOpener from "../elements/MobileMenuOpener";

export default function MenuOne () {
  return (
    <div className="menu -style-one">
      <Container>
        <div className="menu-wrapper">
          <MobileMenuOpener />         
          <Navigator />
        </div>
      </Container>
    </div>
  );
}
