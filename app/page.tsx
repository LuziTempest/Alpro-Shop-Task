import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
        AlproShop.
      </h1>
      
      <p className="text-lg text-slate-500 mb-8 max-w-sm">
        Belanja kebutuhan digital dengan cara yang paling sederhana.
      </p>

      <Link 
        href="/products" 
        className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
      >
        Browse Products
      </Link>
    </div>
  )
}