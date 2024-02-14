import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="bg-white relative z-10 overflow-hidden"
      >
        <video playsInline autoPlay muted loop id="myVideo" className="absolute left-1/2 -translate-x-2/4 -z-50 mt-16 max-w-none w-[1400px] md:w-[1500px] xl:w-[1800px] 2xl:w-[2200px]">
          <source src="videos/doctors.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-full h-full opacity-60 bg-black -z-10"></div>
        <div className="container pb-[80px] pt-[220px] md:pb-[140px] md:pt-[340px] xl:pb-[180px] xl:pt-[380px] 2xl:pb-[220px] 2xl:pt-[420px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 font-bold text-xl leading-tight text-white sm:text-4xl sm:leading-tight sm:text-2xl md:text-4xl md:leading-tight">
                  Empowering medical groups through ancillary services
                </h1>
                <p className="mb-12 text-white !leading-relaxed text-body-color text-md sm:text-lg md:text-xl">
                  As an authorized medical equipment dealer, we specialize in increasing ancillary revenue for medical professionals through exceptional patient care services.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href=""
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
