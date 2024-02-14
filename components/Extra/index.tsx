import Image from 'next/image'

const Extra = () => {
  return (
    <div
      className="relative overflow-hidden max-w-full"
      style={{minWidth: 450 + 'px'}}
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
      <div className="flex justify-end">
        <div
          className="w-full text-right max-w-2xl p-10"
          data-wow-delay=".1s"
        >
          <h2 className="mb-4 text-l font-bold !leading-tight text-white sm:text-2xl md:text-3xl xl:text-5xl">
            Empowering Healthcare Specialists with Financial Growth and Practice Efficiency
          </h2>
          <p className="text-base !leading-relaxed text-white md:text-lg xl:text-xl">
            Wood-Works leverages industry expertise to provide customized solutions tailored to unlock new revenue streams, increase practice efficiencies, and empower the passion of caring medical professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extra;
