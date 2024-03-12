import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood-Works Medical Solutions Group",
  description: "Medical Solutions Group",
  // other metadata
};

const AboutPage = () => {
  const description = [
    "Our company is founded on the values of discipline, integrity, and a commitment to \
    delivering the best possible medical devices and services. With a background in military \
    service, entrepreneurship, and medical device sales, we understand our products \
    critical nature and impact on lives.",
    "As a veteran-owned and family-operated business, we believe in giving back to the community, \
    serving those who have served, and building a legacy for future generations of our family. \
    Our commitment to service is strengthened by our partnership with FSS contract holders, \
    allowing us to offer streamlined procurement and government-compliant solutions."
  ];

  return (
    <>
      <Breadcrumb
        pageName="About"
        description={description}
      />
    </>
  );
};

export default AboutPage;
