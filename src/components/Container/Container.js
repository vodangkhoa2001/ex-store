import { CategoriesContainer } from "./CategoriesContainer";
import { ProductContainer } from "./ProductContainer";

function Container() {
  return (
    <div className="divide-y">
      <ProductContainer />
      <CategoriesContainer />
    </div>
  );
}

export default Container;
