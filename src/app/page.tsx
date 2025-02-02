"use client"

import { useEffect, useState } from "react"
import CategoryMenu from "./components/CategoryMenu"
import ProductCard from "./components/ProductCard"
import { type SanityDocument } from "next-sanity";

import { client } from "../Sanity/client";

const POSTS_QUERY = `*[_type == 'product'][0..9]{_id, name, price, image{asset->{url}}}`;

// const options = { next: { revalidate: 30 } };

const categories = [
  { name: "Shirts", items: ["Formal Shirt", "Casual Shirt", "Half Shirt"] },
  { name: "T-Shirts", items: ["Polo", "Oversize"] },
  { name: "Jeans", items: ["Slim Fit", "Regular Fit", "Straight Fit"] },
  { name: "Lowers", items: ["NS lycra", "NS terry", "Joggers", "Baggy"] },
  { name: "Shorts", items: ["Gym Shorts", "Coton Shorts", "NS shorts"] },
  { name: "Cargo", items: ["Cargo Pants", "NS Cargo"] },
  { name: "Hoodies", items: ["Pullover Hoodie", "Zip Hoodie", "Sweat shirt"] },
  { name: "Pants", items: ["Formal Pants", "Trousers", "Coton Pants"] },
  { name: "Premium", items: ["Polo", "Jeans", "shirt", "Pant", "Tshirt"] },
]

// Dummy product data
const products = {
  "Formal Shirt": [
    { id: 1, name: "White Dress Shirt", price: 29.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Blue Dress Shirt", price: 34.99, image: "/placeholder.svg?height=300&width=300" },
  ],
  "Casual Shirt": [
    { id: 3, name: "Basic Crew Neck", price: 14.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Graphic Crew Neck", price: 19.99, image: "/placeholder.svg?height=300&width=300" },
  ],
  "Polo": [
    { id: 1, name: "Stripe Polo", price: 150, image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Plain polo", price: 145, image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Coton polo", price: 215, image: "/placeholder.svg?height=300&width=300" },
  ],
  "Oversize": [
    { id: 3, name: "Printer Coton Oversize", price: 240, image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Graphic Crew Neck", price: 19.99, image: "/placeholder.svg?height=300&width=300" },
  ],
  // Add more products for other categories as needed
}

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [productList, setProductList] = useState<null | [SanityDocument]>(null);

  const handleSelectItem = (category: string, item: string) => {
    setSelectedCategory(category)
    setSelectedItem(item)
  }

  useEffect(() => {
    const productsData = async () => {
      client.fetch(POSTS_QUERY).then(result => {
        console.log(result)
        setProductList(result)
        return result
      });
      return [];
    }
    console.log(productsData())
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 overflow-hidden">
      <div className="md:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <CategoryMenu categories={categories} onSelectItem={handleSelectItem} />
      </div>
      <div className="flex-1 flex-flex-col gap-8">
        <h2 className="text-2xl font-bold mb-4">
          {selectedCategory ? `${selectedCategory}: ${selectedItem}` : "Select a category"}
        </h2>
        <div className="gap-4 flex flex-wrap overflow-auto justify-center">

          {/* {selectedItem && products[selectedItem] ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products[selectedItem].map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
            ))}
            </div>
            ) : (
              <p>Select a specific item to view products.</p>
              )} */}
          {
            productList?.map(product =>
              <ProductCard key={product._id} name={product.name} price={product.price} image={product.image.asset.url} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
