"use client"

import { useCategories } from "@/hooks/useCategories"
import type { Category } from "@/types/product"

export default function CategoriesPage() {
  const { data } = useCategories() as { data: string[] | undefined }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}