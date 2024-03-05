import { GridItem } from "@/types/gridItem";

const GridItem = ({ product }: { product: GridItem }) => {
  const { icon, content, url } = product;

  return (
    <div className="w-full">
      <a
        className="group flex items-center h-full wow fadeInUp lg:px-5 xl:px-8 cursor-pointer hover:bg-[#111419]"
        data-wow-delay=".1s"
        href={url}
      >
        <span className="m-5 duration-300 material-symbols-outlined text-4xl text-body-color group-hover:text-white">
          {icon}
        </span>
        <span className="text-xl">
          {content}
        </span>
        <span className="m-5 mr-0 grow text-right duration-300 material-symbols-outlined text-body-color sm:text-[#303440] text-4xl group-hover:text-white">arrow_forward</span>
      </a>
    </div>
  );
};

export default GridItem;
