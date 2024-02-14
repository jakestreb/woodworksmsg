import { Testimonial } from "@/types/testimonial";
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
        <div className="flex justify-center">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
