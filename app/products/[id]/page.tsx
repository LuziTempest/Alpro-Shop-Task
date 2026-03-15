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

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse text-gray-400 font-medium">Loading product details...</div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12 bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
        
        <div className="flex items-center justify-center bg-gray-50 rounded-2xl p-8 group">
          <Image 
            src={data.image}
            alt={data.title}
            width={400}
            height={400}
            className="max-h-96 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
            {data.category || "Product"}
          </span>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            {data.title}
          </h1>

          <div className="mt-6">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Description</h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-lg">
              {data.description}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 font-medium">Price</p>
              <p className="text-4xl font-black text-slate-900">
                ${data.price.toFixed(2)}
              </p>
            </div>
            
            <div className="flex-1 max-w-[200px] ml-6">
              <Button
                className="w-full py-6 rounded-2xl shadow-lg shadow-black/5 hover:shadow-black/10 transition-all active:scale-95"
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
      </div>
    </div>
  )
}