import { Grid, Cell } from "styled-css-grid";
import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import ADS from "./ads/ads";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";
import { ProductGeneral } from "../../interfaces";

type Props = {
  productList: [ProductGeneral];
};

const Layout: React.FC<Props> = ({ productList }) => {
  return (
    <Grid
      gap="40px"
      columns={"100px 1fr 50px"}
      rows={"50px 1fr 50px"}
      areas={[
        "header header  header",
        "menu   content ads   ",
        "footer footer  footer",
      ]}
    >
      <Cell area="header">
        <Header />
      </Cell>
      <Cell area="content">
        <Content productList={productList} />
      </Cell>
      <Cell area="menu">
        <Menu />
      </Cell>
      <Cell area="ads">
        <ADS />
      </Cell>
      <Cell area="footer">
        <Footer />
      </Cell>
    </Grid>
  );
};

export default Layout;
//TODO styled contents, headers, menus to the center
