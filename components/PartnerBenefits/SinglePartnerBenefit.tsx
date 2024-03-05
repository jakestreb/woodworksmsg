import { GridItem } from "@/types/gridItem";

const GridItem = ({ product }: { product: GridItem }) => {
  const { icon, content } = product;

  return (
    <div className="w-full">
      <div
        className="flex items-center h-full wow fadeInUp duration-300 lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <span className="m-5 material-symbols-outlined text-4xl text-body-color">
          {icon}
        </span>
        <span className="mr-5 text-xl">
          {content}
        </span>
      </div>
    </div>
  );
};

export default GridItem;
