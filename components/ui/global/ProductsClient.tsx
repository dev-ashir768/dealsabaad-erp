"use client";

import { fetchProducts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ProductsClient = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load products.</p>;

  return (
    <ul>
      {data.map((product: any) => (
        <li key={product.id}>{product.category}</li>
      ))}
    </ul>
  );
};

export default ProductsClient;
