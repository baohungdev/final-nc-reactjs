import React from "react";
import { ProductGeneral } from "../../../../interfaces";
import { Button } from "grape-ui-react";
import {
  CardContainer,
  BackgroundImage,
  AddButton,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from "./Card-Styles";
type Props = {
  product: ProductGeneral;
};
const Card: React.FC<Props> = ({ product }) => {
  return (
    <CardContainer>
      <BackgroundImage
        className="image"
        style={{
          backgroundImage: `url(${product.imgUrlMob})`,
        }}
      />
      <Button
        bg="white"
        bgActiveColor="pink"
        bgHoverColor="pink.light"
        border="3px solid #fdd7e4"
        borderRadius="9px"
        color="white"
        contained
        ellipsis
        fontSize="26px"
        m={[1, 2, 3, 4]}
        name="exampleColor"
        outline
        raised
        title="Click on me and check out the console."
      >
        🐷
      </Button>
      <CollectionFooterContainer>
        <NameContainer>{product.name}</NameContainer>
        <PriceContainer>${product.finalPrice}</PriceContainer>
      </CollectionFooterContainer>
    </CardContainer>
  );
};

export default Card;
//TODO Styled this card
