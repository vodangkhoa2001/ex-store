import { useLocation } from "react-router-dom";
import Breadcrumbs from "~/components/Breadcrumbs/Breadcrumbs";
import ProductDetail from "~/components/ProductDetail/ProductDetail";

function ProductDetailPage() {
  const { state: pro } = useLocation();
  return (
    <>
      <div className="mb-10 max-sm:mt-[-90px]">
        <Breadcrumbs title={pro.namePro} />
      </div>
      <ProductDetail />
    </>
  );
}

export default ProductDetailPage;
