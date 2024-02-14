import Image from "next/image";

const TRexSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-28">
      <div className="container w-full grid">
          <div className="mb-16">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Optimizing revenue growth
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Wood-Works Medical Solutions Group specializes in identifying and implementing ancillary revenue opportunities
              for medical professionals and practices. Our experience shows tailored strategies to optimize profitability need not undermine patient care.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Ancillary income expertise
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              From leasing medical devices to revenue cycle management programs, our team provides customized recommendations addressing each client&apos;s 
              unique needs and objectives. Contact us to learn more about enhancing your ancillary income streams.
            </p>
        </div>
      </div>
    </section>
  );
};

export default TRexSection;
