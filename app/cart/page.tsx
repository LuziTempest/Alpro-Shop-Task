"use client"

import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const { items, removeItem } = useCart()

  const handleCheckout = () => {
    if (items.length === 0) {
      alert("Keranjang belanja masih kosong!")
      return
    }

    alert(`Checkout berhasil untuk ${items.length} barang!`)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Cart</h1>

      {items.length === 0 ? (
        <p className="mt-3 text-gray-600">Keranjang kamu masih kosong.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="flex justify-between border p-4 mt-2">
            <div>{item.title}</div>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}

      <button 
        onClick={handleCheckout}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Checkout
      </button>
    </div>
  )
}