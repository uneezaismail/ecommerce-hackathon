"use client";

import { Suspense, useEffect, useState } from "react";
import ShopPage from "@/components/ShopProduct";

interface SearchParams {
  searchQuery: string;
}

interface PromiseParams {
  searchParams: Promise<SearchParams>;
}

const Spinner = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);

const Shop = ({ searchParams }: PromiseParams) => {
  const [resolvedSearchParams, setResolvedSearchParams] = useState<SearchParams | null>(null);

  useEffect(() => {
    if (searchParams instanceof Promise) {
      searchParams
        .then((resolved) => setResolvedSearchParams(resolved))
        .catch((error) => {
          console.error("Error resolving searchParams:", error);
          setResolvedSearchParams({ searchQuery: "" });
        });
    } else {
      setResolvedSearchParams(searchParams);
    }
  }, [searchParams]);

  if (!resolvedSearchParams) {
    return <Spinner />; 
  }

  return (
    <Suspense fallback={<Spinner />}>
      <ShopPage searchQuery={resolvedSearchParams.searchQuery} />
    </Suspense>
  );
};

export default Shop;
