import Intro from "@/components/Intro";
import Products from "@/components/Products";
import Devices from "@/components/Devices";
import Endorsement from "@/components/Endorsement";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Extra from "@/components/Extra";
import Actions from "@/components/Actions";
import PartnerBenefits from "@/components/PartnerBenefits";
// import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood-Works Medical Solutions Group",
  description: "Medical Solutions Group",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Intro />
      <Endorsement />
      <PartnerBenefits />
      <Extra />
      <Products />
      <Actions />
    </>
  );
}
