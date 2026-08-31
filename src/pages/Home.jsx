import React from "react";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import AboutPreview from "../components/AboutPreview";
import ServicesGrid from "../components/ServicesGrid";
import ProductsShowcase from "../components/ProductsShowcase";
import VideoSection from "../components/VideoSection";
import Industries from "../components/Industries";
import Partners from "../components/Partners";
import Clients from "../components/Clients";
import Intro from "../components/VideoCarousel";
import CTA from "../components/CTA";

export default function Home() {
  return <>
    <Hero />
    <StatsBar />
    <AboutPreview />
    <ServicesGrid />
    <ProductsShowcase />
    <VideoSection />
    <Industries />
    <Partners />
    <Clients />
    <Intro />
    <CTA />
  </>;
}
