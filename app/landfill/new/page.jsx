import { Suspense } from "react";
import NewContent from "./NewContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewContent />
    </Suspense>
  );
}