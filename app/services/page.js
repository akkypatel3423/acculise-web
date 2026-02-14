import ServicesHero from "@/components/services/ServicesHero";
import AllServicesGrid from "@/components/services/AllServicesGrid";

export const metadata = {
  title: "Specialized Service Portfolio | US & UK Tax & Accounting",
  description:
    "Explore our elite financial services: US/UK individual & corporate taxation, global bookkeeping, CFO advisory, business formation, and high-precision technical reporting.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <AllServicesGrid />
    </>
  );
}
