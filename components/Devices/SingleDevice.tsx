import { GridItem } from "@/types/gridItem";

const GridItem = ({ product }: { product: GridItem }) => {
  const { icon, header, content, url } = product;

  return (
    <div className="w-full">
      <a
        className="group flex items-center wow fadeInUp cursor-pointer hover:text-body-color"
        data-wow-delay=".1s"
        href={url}
      >
        <span className="m-5 material-symbols-outlined text-5xl">{icon}</span>
        <span className="font-semibold text-3xl">
          {header}
        </span>
        <span className="m-5 material-symbols-outlined duration-300 text-body-color sm:text-black group-hover:text-body-color text-2xl sm:invisible group-hover:visible">link</span>
      </a>
      <p className="text-xl text-body-color m-5 mt-0">
        {content}
      </p>
    </div>
  );
};

export default GridItem;
