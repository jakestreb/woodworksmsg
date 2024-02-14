import { Product } from "@/types/product";
import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";

const productData: Product[] = [
  {
    id: 1,
    name: "Medical equipment supplies",
    designation: "Durable Mobility",
    content:
      "As authorized dealers for Trex Rehab and Nice Recovery, we provide premium mobility aids.",
    buttonText: "View Mobility"
  },
  {
    id: 2,
    name: "Recovery equipment for home or clinic",
    designation: "Rehab Supplies",
    content:
      "We supply the essential equipment and tools you need to help patients heal and regain strength after procedures or injuries.",
    buttonText: "Shop Supplies"
  },
  {
    id: 3,
    name: "Recovery comfort solutions",
    designation: "Comfort Aids",
    content:
      "Browse our selection of premium beds, lift chairs, and other relaxation products to enhance healing environments.",
    buttonText: "View Aids"
  },
];

const Products = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {productData.map((testimonial) => (
            <SingleProduct key={testimonial.id} product={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
