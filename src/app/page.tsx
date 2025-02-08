"use client"

import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { type SanityDocument } from "next-sanity";
import { client } from "../Sanity/client";
import { FaWhatsapp } from "react-icons/fa";

const POSTS_QUERY = `*[_type == 'product'][0..9]{_id, name, price, image{asset->{url}}}`;

const Home = () => {
  const [productList, setProductList] = useState<SanityDocument[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await client.fetch(POSTS_QUERY);
      setProductList(result);
    };
    fetchProducts();
  }, []);

  const whatsappNumber = "+916350461981"; // Replace with your number

  return (
    <div className="flex flex-col md:flex-row gap-8 overflow-hidden">
      <div className="flex-1 flex-flex-col gap-8">
        <div className="grid-container">
          {productList?.map((product) => (
            <ProductCard key={product._id} name={product.name} price={product.price} image={product.image.asset.url} />
          ))}
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default Home;
