import { Suspense } from "react";
import NewsContent from './NewsContent';


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsContent />
    </Suspense>
  );
}