import { GridItem } from "@/types/gridItem";

const GridItem = ({ product }: { product: GridItem }) => {
  const { icon, content, url } = product;

  return (
    <div className="w-full">
      <a
        className="group flex items-center h-full wow fadeInUp duration-300 lg:px-5 xl:px-8 cursor-pointer"
        data-wow-delay=".1s"
        href={url}
      >
        <span className="m-5 material-symbols-outlined text-4xl text-body-color">{icon}</span>
        <span className="text-xl">
          {content}
        </span>
        <span className="m-5 mr-0 grow text-right md:grow-0 md:text-left material-symbols-outlined text-body-color text-4xl sm:invisible group-hover:visible">arrow_forward</span>
      </a>
    </div>
  );
};

export default GridItem;
