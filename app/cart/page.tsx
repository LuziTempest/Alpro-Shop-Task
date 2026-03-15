"use client"

import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCart()

  const totalPrice = items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)

  const handleCheckout = () => {
    if (items.length === 0) {
      alert("Keranjang belanja masih kosong!")
      return
    }
    alert(`Checkout berhasil! Total bayar: $${totalPrice.toFixed(2)}`)
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-6">
      <h1 className="text-xl font-medium mb-8">Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-400">Keranjang kamu masih kosong.</p>
      ) : (
        <div className="divide-y divide-gray-100">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-5">
              <div className="flex-1 pr-4">
                <p className="text-sm font-medium text-gray-800 leading-tight">{item.title}</p>
                <p className="text-xs text-gray-400 mt-1">${item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-200 rounded-md">
                  <button 
                    onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                    className="px-2 py-1 text-gray-400 hover:text-black"
                  >
                    -
                  </button>
                  <span className="text-xs min-w-[20px] text-center font-medium">
                    {item.quantity || 1}
                  </span>
                  <button 
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                    className="px-2 py-1 text-gray-400 hover:text-black"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-red-400 hover:text-red-600 ml-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="pt-6 mt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500">Total Price</span>
              <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-black text-white text-sm py-3 rounded-lg hover:bg-gray-800 transition-all font-medium"
            >
              Checkout (${totalPrice.toFixed(2)})
            </button>
          </div>
        </div>
      )}
    </div>
  )
}