import SingleDevice from "./SingleDevice";
import { GridItem } from "@/types/gridItem";

const productData: GridItem[] = [
  {
    id: 1,
    icon: 'body_system',
    header: "T-Rex",
    content: "This revolutionary therapy device helps restore range of motion and improve quality of life after major joint injuries and surgeries. With the option to apply a smart device to capture progress data and ensure daily use in the home.",
    url: "https://trexrehab.com/",
  },
  {
    id: 2,
    icon: 'gradient',
    header: 'NICE1',
    content: "This portable cold compression therapy system delivers targeted relief, promoting faster healing and reducing pain—a versatile tool for in-clinic therapy and as a convenient patient take-home solution.",
    url: "https://www.nicerecovery.com/",
  },
];

const Devices = () => {
  return (
    <section className="bg-black relative z-10 pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {productData.map((testimonial) => (
            <SingleDevice key={testimonial.id} product={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Devices;
