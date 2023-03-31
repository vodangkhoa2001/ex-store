import { CategoriesContainer } from "./CategoriesContainer";
import { ProductContainer } from "./ProductContainer";

import Title from "~/components/Title";
import { BestSelling } from "./BestSellingContainer";

function Container() {
  return (
    <div className="mt-[100px] divide-y">
      <div>
        <Title title="Today's" />
        <ProductContainer />
      </div>
      <div>
        <Title title={"Categories"} />
        <CategoriesContainer />
      </div>
      <div>
        <Title title={"This Month"} />
        <BestSelling />
      </div>
    </div>
  );
}

export default Container;
