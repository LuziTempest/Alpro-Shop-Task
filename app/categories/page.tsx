"use client"

import { useCategories } from "@/hooks/useCategories"
import Link from "next/link"

export default function CategoriesPage() {
  const { data } = useCategories() as { data: string[] | undefined }

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-xl font-medium mb-8 text-gray-900">Categories</h1>

      <div className="divide-y divide-gray-200 border-t border-b border-gray-100">
        {data?.map((category, index) => (
          <Link 
            key={index} 
            href={`/products?category=${category}`}
            className="flex justify-between items-center py-4 group hover:px-2 transition-all"
          >
            <span className="capitalize text-gray-600 group-hover:text-black">
              {category}
            </span>
            <span className="text-gray-300 group-hover:text-black text-sm">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}