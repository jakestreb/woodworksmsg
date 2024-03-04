"use client";
import Image from "next/image";
import Link from "next/link";
import { FooterItem } from "@/types/footerItem";
import SingleFooterItem from './SingleFooterItem';

const footerData: FooterItem[] = [
  {
    id: 1,
    title: 'Optimizing Revenue',
    links: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'About',
        url: '/about',
      },
      {
        name: 'Services',
        url: '/services',
      },
    ]
  },
  {
    id: 2,
    title: 'Key Specialties',
    links: [
      {
        name: 'Orthopedists',
        url: '/services',
      },
      {
        name: 'Pain Physicians',
        url: '/services',
      },
      {
        name: 'Podiatrists',
        url: '/services',
      },
    ]
  },
  {
    id: 3,
    title: 'Client Support',
    links: [
      {
        name: 'Contact',
        url: '/contact',
      },
      {
        name: 'FAQs',
        url: '/about',
      },
    ]
  },
  {
    id: 4,
    title: 'Company Info',
    links: [
      {
        name: 'About',
        url: '/about',
      },
      {
        name: 'Leadership',
        url: '/contact',
      },
      {
        name: 'Services',
        url: '/contact',
      },
    ]
  },
];

const Footer = () => {
  return (
    <>
      <footer
        className="pb-12 wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="flex flex-wrap justify-center text-center">
            {footerData.map((footerItem) => (
              <SingleFooterItem key={footerItem.id} item={footerItem} />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
