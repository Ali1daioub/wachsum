import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsOverview from "@/components/solutions/SolutionsOverview";
import SolutionsCaseStudies from "@/components/solutions/SolutionsCaseStudies";
import SolutionsBrands from "@/components/solutions/SolutionsBrands";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export default function SolutionsPage() {
  return (
    <main>
      <Header />
      <SolutionsHero />
      <SolutionsOverview />
      <SolutionsCaseStudies />
      <SolutionsBrands />
      <SolutionsCTA />
      <Footer />
    </main>
  );
}
