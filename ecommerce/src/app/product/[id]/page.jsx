import ProductDetail from "../../../components/ProductDetail";

export default function ProductDetailPage({ params }) {
  return <ProductDetail id={params.id} />;
}
