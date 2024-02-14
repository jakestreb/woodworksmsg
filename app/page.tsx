import About from "@/components/About";
import Products from "@/components/Products";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood-Works",
  description: "Medical Solutions Group",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
    </>
  );
}
