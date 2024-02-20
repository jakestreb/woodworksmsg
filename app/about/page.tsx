import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood-Works Medical Solutions Group",
  description: "Medical Solutions Group",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Wood-Works Medical Solutions Group"
        description="Our company is founded on the values of discipline, integrity, and a commitment to
        delivering the best possible medical devices and services. With a background in military
        service, entrepreneurship, and medical device sales, we understand these devices'
        critical nature and their impact on lives. As a veteran-owned and family-operated
        business, we believe in giving back to the community, serving those who have served,
        and building a legacy for future generations of our family."
      />
    </>
  );
};

export default AboutPage;
