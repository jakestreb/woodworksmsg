import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="bg-white relative z-10 overflow-hidden"
      >
        <video playsInline autoPlay muted loop id="myVideo" className="absolute left-1/2 -translate-x-2/4 -z-50 mt-16 max-w-none w-[1400px] md:w-[1600px] xl:w-[1900px] 2xl:w-[2100px]">
          <source src="videos/doctors.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-full h-full opacity-60 bg-black -z-10"></div>
        <div className="container pb-[40px] pt-[220px] md:pb-[80px] md:pt-[340px] xl:pb-[200px] xl:pt-[460px] 2xl:pb-[300px] 2xl:pt-[420px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="flex flex-col items-center wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-32 leading-snug frank font-bold text-4xl text-white sm:text-4xl md:text-6xl">
                Empowering recovery journeys.
                </h1>
                <p className="mb-2 text-white font-semibold text-body-color text-m sm:text-xl sm:text-l md:text-2xl">
                Medical Device Solutions <span className="italic normal-case font-normal">for Practices & Patients —</span>
                </p>
                <p className="mb-12 text-white font-light text-body-color text-md sm:text-lg md:text-xl w-3/4">
                Veteran-owned, family-driven, passionate about improving lives through innovative technology.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/about"
                    className="inline-block rounded-sm px-8 py-4 text-white duration-300 ease-in-out bg-black hover:bg-white hover:text-black"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
