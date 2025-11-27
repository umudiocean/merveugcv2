import PageLoader from "./components/asli/PageLoader";
import CustomCursor from "./components/asli/CustomCursor";
import AsliHeader from "./components/asli/AsliHeader";
import AsliHero from "./components/asli/AsliHero";
import AsliPortfolio from "./components/asli/AsliPortfolio";
import AsliBrands from "./components/asli/AsliBrands";
import AsliAbout from "./components/asli/AsliAbout";
import AsliContact from "./components/asli/AsliContact";
import AsliFooter from "./components/asli/AsliFooter";
import { getPersonSchema, getServiceSchema, getOrganizationSchema } from "./lib/schema";

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPersonSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />

      {/* Page Loader */}
      <PageLoader />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Header */}
      <AsliHeader />
      
      {/* Main Content */}
      <main id="main-content">
        <AsliHero />
        <AsliPortfolio />
        <AsliBrands />
        <AsliAbout />
        <AsliContact />
      </main>

      {/* Footer */}
      <AsliFooter />
    </>
  );
}

