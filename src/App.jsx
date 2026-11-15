import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import FilterToolbar from './FilterToolbar'
import ProductGrid from './ProductGrid'
import Quality from './Quality'
import Process from './Process'
import FloatingWA from './FloatingWA'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import { useState } from 'react'

function Home() {
  const [filters, setFilters] = useState({ category: 'all', query: '', variety: 'all', roast: 'all', origin: 'all' })
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <Hero />
        <FilterToolbar filters={filters} setFilters={setFilters} />
        <ProductGrid filters={filters} />
        <Quality />
        <Process />
      </main>
      <FloatingWA />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/kontak" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
