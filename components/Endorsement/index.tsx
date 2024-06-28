import Image from "next/image";

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
        <div className="flex flex-col min-w-[200px] max-w-[900px] w-[300px] grow justify-center p-8 text-center md:text-left">
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
