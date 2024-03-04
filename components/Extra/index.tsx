import Image from 'next/image'

const Extra = () => {
  return (
    <div
      className="relative overflow-hidden max-w-full h-[400px] lg:h-[600px]"
    >
      <div className="absolute left-1/2 -translate-x-2/4 -z-50 w-full">
        <Image
          src="/images/doctor.jpg"
          alt="logo"
          width={1200}
          height={600}
          className="w-full h-auto block overflow-hidden"
          style={{minWidth: 600 + 'px'}}
        />
      </div>
      <div className="absolute w-full h-full opacity-60 bg-black -z-10"></div>
      <div className="w-full absolute bottom-0 right-0">
        <div
          className="w-full text-right p-10"
          data-wow-delay=".1s"
        >
          <h2 className="mb-4 frank font-bold !leading-tight text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Supporting financial growth & efficiency.
          </h2>
          <p className="text-base !leading-relaxed text-white md:text-lg xl:text-xl">
            Wood-Works leverages industry expertise to provide customized solutions tailored to you and your practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extra;
