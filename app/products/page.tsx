
"use client"

import { useState } from "react" 
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"

export default function ProductsPage() {
  const { data, isLoading } = useProducts()
  
  const [searchQuery, setSearchQuery] = useState("")

  if (isLoading)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    )

  const filteredProducts = data?.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full md:w-1/3"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredProducts?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filteredProducts?.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          Produk tidak ditemukan.
        </p>
      )}
    </div>
  )
}