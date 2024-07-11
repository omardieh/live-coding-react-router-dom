import { Link } from "react-router-dom";
import data from "../../assets/products.json";
import { useSearchParams } from "react-router-dom";

export default function ProductsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const maxPrice = searchParams.get("max_price");
  const rating = searchParams.get("rating");
  const newData = maxPrice
    ? data.filter((p) => p.price < maxPrice && p.rating.rate > rating)
    : data;

  return newData.map((product) => (
    <Link to={`/products/${product.id}`} key={product.id}>
      <p> {product.title} </p>
      <p> {product.price} </p>
      <p> {product.rating.rate} </p>
    </Link>
  ));
}
