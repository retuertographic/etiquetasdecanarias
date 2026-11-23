import { Suspense } from "react";
import { HomePage } from "@/components/sites/etiquetasdecanarias/HomePage";
import { SearchSwitch } from "@/components/sites/etiquetasdecanarias/SearchSwitch";

/**
 * WordPress serves search results from the home URL (/?s=…). The page is
 * static, so the switch to results happens in the browser.
 */
export default function Home() {
  return (
    <Suspense fallback={<HomePage />}>
      <SearchSwitch home={<HomePage />} />
    </Suspense>
  );
}
