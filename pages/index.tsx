import Layout from "../components/Layout/Layout";
import { ProductGeneral } from "../interfaces";
type Props = {
  productList: [ProductGeneral];
};
const IndexPage: React.FC<Props> = ({ productList }) => {
  return <Layout productList={productList} />;
};

export async function getStaticProps() {
  const res = await fetch("https://min-shop.herokuapp.com/rest/product");
  const data = await res.json();
  const productList = data.data;
  return {
    props: {
      productList,
    },
  };
}
export default IndexPage;
