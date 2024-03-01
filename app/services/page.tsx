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
        pageName="Coming soon"
        description="Our website is still growing - please check back for updates."
      />
    </>
  );
};

export default AboutPage;
