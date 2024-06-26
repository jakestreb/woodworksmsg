import Image from "next/image";
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
    content: (
      <span>
      This portable, <span className="font-semibold">ice-free</span> cold compression therapy system delivers targeted relief, promoting faster healing and reducing pain. It&apos;s a versatile tool for in-clinic therapy and makes for a convenient and hassle-free patient take-home solution
      </span>
    ),
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
      <div className="flex justify-center">
        <Image
          src="/images/sba-logo.png"
          alt="logo"
          width={150}
          height={200}
          className="flex-none self-center w-40 h-52 m-16 mb-0"
        />
      </div>
    </section>
  );
};

export default Devices;
