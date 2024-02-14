import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Shana Jones",
    designation: "Orthopedic Surgeon & Co-Founder, Georgia Orthopedics Center",
    content:
      "Wood-Works truly understands the challenges physicians face in today's complex healthcare environment. They helped us implement an ancillary services program that was a substantial growth catalyst, enabling us to better care for more patients.",
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Empowering Healthcare Specialists with Financial Growth and Practice Efficiency"
          paragraph="Wood-Works leverages industry expertise to provide customized solutions tailored to unlock new revenue streams, increase practice efficiencies, and empower the passion of caring medical professionals."
          center
        />
        {testimonialData.map((testimonial) => (
          <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
