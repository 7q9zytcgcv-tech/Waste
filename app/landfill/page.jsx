import { Suspense } from "react";
import LandfillContent from "./LandfillContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandfillContent />
    </Suspense>
  );
}