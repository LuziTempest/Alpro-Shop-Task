"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { useProduct } from "@/hooks/useProduct"
import { Button } from "@/components/ui/Button"
import { useCart } from "@/context/CartContext"

export default function ProductDetailPage() {
  const { id } = useParams()
  const { data } = useProduct(id as string)
  const { addItem } = useCart()

  if (!data) return <div>Loading...</div>

  return (
    <div
      className="
      max-w-6xl
      mx-auto
      grid
      md:grid-cols-2
      gap-10
      bg-white
      p-8
      rounded-xl
      shadow-sm
      "
    >
      <div className="flex justify-center">
        <Image 
          src={data.image}
          alt={data.title}
          width={320}
          height={320}
          className="h-80 object-contain"
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold">{data.title}</h1>

        <p className="text-gray-600 mt-4">{data.description}</p>

        <p
          className="
          mt-6
          text-3xl
          font-bold
          text-(--primary)
          "
        >
          ${data.price}
        </p>

        <div className="mt-6">
          <Button
            onClick={() => {
              addItem({
                id: data.id,
                title: data.title,
                price: data.price,
                image: data.image,
                quantity: 1,
              })
              alert("Produk berhasil ditambahkan ke cart!")
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}