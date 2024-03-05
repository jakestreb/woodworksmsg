import { Product } from "@/types/product";
import Link from "next/link";

const SingleProduct = ({ product }: { product: Product }) => {
  const { name, content, designation, buttonText, url } = product;

  return (
    <div className="w-full">
      <div
        className="flex flex-col justify-between h-full wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <p className="text-sm text-body-color mb-1">{designation}</p>
        <div className="flex pb-5" style={{minHeight: 20 + '%'}}>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
          </div>
        </div>
        <p className="h-full text-body-color mb-8">
          {content}
        </p>
        <div className="border-t border-body-color border-opacity-10 text-base leading-relaxed text-body-color border-white border-opacity-10 text-white">
          <div className="mt-10 mb-2 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href={url}
              className="inline-block rounded-sm px-8 py-4 duration-300 ease-in-out bg-black/20 text-white hover:bg-white hover:text-black"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
