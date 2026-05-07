import { Suspense } from "react";
import TendersContent from "./TendersContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TendersContent />
    </Suspense>
  );
}