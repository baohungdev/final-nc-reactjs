import React from "react";
import { Grid, Cell } from "styled-css-grid";
import Card from "./Card/Card";
import { ProductGeneral } from "../../../interfaces";

type Props = {
  productList: [ProductGeneral];
};

const Content: React.FC<Props> = ({ productList }) => {
  return (
    <Grid gap="50px" columns="repeat(auto-fit,minmax(350px,1fr))">
      {productList.map((product: ProductGeneral) => (
        <Cell key={product.productId}>
          <Card product={product} />
        </Cell>
      ))}
    </Grid>
  );
};

export default Content;
// TODO  add interface, style Card with button, import Button from ui-kits
