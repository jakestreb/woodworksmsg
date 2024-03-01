import SinglePartnerBenefit from "./SinglePartnerBenefit";
import { GridItem } from "@/types/gridItem";

const productData: GridItem[] = [
  {
    id: 1,
    icon: 'mixture_med',
    content: "Offer patients state-of-the-art treatment modalities",
  },
  {
    id: 2,
    icon: 'stethoscope',
    content: "Enhance your practice's reputation as a tech-forward provider",
  },
  {
    id: 3,
    icon: 'groups',
    content: "Streamline ordering processes with a dedicated billing and authorization team",
  },
  {
    id: 4,
    icon: 'lab_research',
    content: "Access the latest advancements in rehabilitation technology",
  },
  {
    id: 5,
    icon: 'payments',
    content: "Create new pathways to generate ancillary revenue to increase longevity",
  },
  {
    id: 6,
    icon: 'family_home',
    content: "Count on a family-owned business with a reputation for client care",
  },
];

const PartnerBenefits = () => {
  return (
    <section className="bg-bg-color-dark relative z-10 py-16 md:py-20 lg:py-28">
      <h3 className="mb-20 frank text-center text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-4xl xl:text-5xl">
        Partner Benefits
      </h3>
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {productData.map((testimonial) => (
            <SinglePartnerBenefit key={testimonial.id} product={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
