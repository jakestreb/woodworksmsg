import { FooterItem } from "@/types/footerItem";

const SingleFooterItem = ({ item }: { item: FooterItem }) => {
  const { title, links } = item;

  return (
    <div className="w-full px-4 sm:w-6/12 md:w-7/12 lg:w-3/12 xl:w-3/12">
        <div className="mb-12 lg:mb-16">
        <h2 className="mb-10 frank text-xl font-bold text-black dark:text-white">
            {title}
        </h2>
        <ul>
            {links.map(({ name, url }, i) => (
                <li key={i}>
                    <a
                        href={url}
                        className="text-body-color-dark mb-4 inline-block text-base duration-300 hover:text-white"
                    >
                    {name}
                    </a>
                </li>
            ))}
        </ul>
        </div>
    </div>
  );
};

export default SingleFooterItem;
