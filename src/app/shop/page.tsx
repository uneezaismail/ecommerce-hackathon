


"use client";

import { Suspense, useEffect, useState } from "react";
import ShopPage from "@/components/ShopProduct";

interface SearchParams {
  searchQuery: string;
}

interface promiseParams {
  searchParams: Promise<SearchParams> 
}

const Shop = ({ searchParams }: promiseParams ) => {
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
    return <div>Loading...</div>; 
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopPage searchQuery={resolvedSearchParams.searchQuery} />
    </Suspense>
  );
};

export default Shop;
