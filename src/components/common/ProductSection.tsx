import { Link } from "react-router-dom";
import ProductCard from "../common/ProductCard";
import type { Product } from "../../types/Product";

interface ProductSectionProps {
  title: string;
  products: Product[];
  seeAllLink?: string;
  hideHeader?: boolean;
}

const ProductSection = ({
  title,
  products,
  seeAllLink,
  hideHeader = false,
}: ProductSectionProps) => {
  return (
    <section className="w-full">
      {/* Header */}
      {!hideHeader && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#181725]">
            {title}
          </h2>

          {seeAllLink && (
            <Link
              to={seeAllLink}
              className="text-[#53B175] text-sm sm:text-base font-medium hover:underline"
            >
              See All
            </Link>
          )}
        </div>
      )}

      {/* Product Row */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide w-full">
        {products.map((product) => (
          <div key={product.id} className="mt-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
