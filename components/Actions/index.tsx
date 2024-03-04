import SingleAction from "./SingleAction";
import { GridItem } from "@/types/gridItem";

const productData: GridItem[] = [
  {
    id: 1,
    icon: 'physical_therapy',
    content: "Explore our physical therapy solutions",
    url: "/services",
  },
  {
    id: 2,
    icon: 'stethoscope',
    content: "Learn more about practice solutions",
    url: "/services",
  },
  {
    id: 3,
    icon: 'event_available',
    content: "Schedule a product demo",
    url: "/contact",
  },
  {
    id: 4,
    icon: 'mail',
    content: "Contact us today",
    url: "/contact",
  },
];

const Actions = () => {
  return (
    <section className="bg-color-black m-auto relative z-10 py-16 md:py-20 lg:py-28">
      <div className="w-5/6 m-auto">
        <h3 className="mb-10 frank text-center text-3xl font-bold text-white xl:text-4xl">
          Ready to take control of your recovery or elevate your practice?
        </h3>
          <div className="grid grid-cols-1 gap-x-8 w-full md:w-3/4 lg:w-7/12 my-16 m-auto">
            {productData.map((testimonial) => (
              <SingleAction key={testimonial.id} product={testimonial} />
            ))}
          </div>
        <h3 className="mt-10 frank text-center text-3xl font-bold text-white xl:text-4xl">
          Together, let&apos;s unlock your potential and get you back to living life to the fullest!
        </h3>
      </div>
    </section>
  );
};

export default Actions;
