import IntroductionSection from "@/components/IntroductionSection/IntroductionSection";
import JobSection from "@/components/JobSection/JobSection";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="mx-4 px-4 sm:px-3 md:px-4 lg:px-4 xl:px-1 min-h-[100vh] w-[360px] md:w-[600px] lg:w-[700px]">
      <IntroductionSection />

      <JobSection />
    </div>
  );
}
