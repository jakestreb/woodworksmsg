import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="bg-white relative z-10 overflow-hidden pb-16 pt-[300px] md:pb-[200px] md:pt-[350px] xl:pb-[260px] xl:pt-[380px] 2xl:pb-[300px] 2xl:pt-[310px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Essential recovery.
                </h1>
                <h1 className="mb-5 text-3xl leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Essential health.
                </h1>
                <p className="text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">

                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href=""
                    className="inline-block rounded-sm bg-black/5 px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out bg-white/10 hover:bg-black/10"
                  >
                    Learn more
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
