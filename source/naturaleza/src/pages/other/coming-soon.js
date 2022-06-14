import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";
import SocialIcons from "../../components/other/SocialIcons";
import { Button } from "antd";

export default function comingSoon() {
  return (
    <>
      <Head>
        <title>Coming soon</title>
      </Head>
      <div className="coming-soon">
        <div className="coming-soon-wrapper">
          <Container>
            <main>
              <SectionTitle title="Coming Soon" hideDecoration />
              <br/>
              <h2><b>ECOMMERCE COMPANY</b></h2>
              <p>(Connecting small ventures)</p><br/>
              <h2><b>FOODSTA</b></h2>
              <p>(Social food platform)</p><br/>
              <h2><b>CONSULTANCY WITH EXPERTS</b></h2>
              <p>(Helping people to find the perfect nutritionist and dietitian)</p><br/>
              <SocialIcons type="primary" shape="round" sharein="https://www.instagram.com/naturaleza.in/" sharefb="https://www.facebook.com/Naturaleza-104571368960500"/>
              <p>Follow Us For Updates</p>
              <Button type="primary" shape="round">
                      <Link
                        href="/"
                      >
                        <a>Go To Homepage</a>
                      </Link>
                    </Button>
            </main>
          </Container>
        </div>
      </div>
    </>
  );
}
