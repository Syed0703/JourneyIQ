'use client'
import Hero from "@/components/Hero";
import "./globals.css";
import Features from "@/components/Features";
import Testimonals from "@/components/Testimonals";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonals/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}
