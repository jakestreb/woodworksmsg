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
    <section className="bg-black relative z-10 bg-white p-16 md:p-20 lg:p-28">
      <div className="w-full flex flex-wrap justify-around">
        <div className="flex justify-center w-[300px] p-8">
          <Image
            src="/images/sba-logo.png"
            alt="logo"
            width={200}
            height={300}
            className="flex-none self-center"
          />
        </div>
        <div className="flex flex-col min-w-[220px] w-[300px] grow justify-center p-8">
          <div className="font-semibold text-dark text-xl sm:text-2xl lg:text-4xl">
            Veteran-owned and committed to innovation
          </div>
          <div className="text-dark pt-4 text-l sm:text-xl lg:text-2xl">
            Proud to be service-disabled veteran-owned certified by the SBA
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devices;
