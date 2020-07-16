import React from "react";
import { Grid, Cell } from "styled-css-grid";
import Card from "./Card/Card";
const Content = ({ productList }) => {
  return (
    <Grid columns="repeat(auto-fit,minmax(500px,1fr))">
      {productList.map((product) => (
        <Cell>
          <Card product={product} />
        </Cell>
      ))}
    </Grid>
  );
};

export default Content;
// TODO  add interface, style Card with button, import Button from ui-kits
