import data from "../../assets/products.json";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { productID } = useParams();
  const product = data.find((p) => p.id === +productID);
  return <div> {JSON.stringify(product)} </div>;
}
