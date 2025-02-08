import Image from "next/image";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 self-start">
      <div className="relative w-full flex items-center justify-center">
        <Zoom>
          <Image
            src={image || "/dummyimage.png"}
            alt={name}
            height={200}  // Adjust height to prevent extreme variations
            width={200}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Zoom>
      </div>
      <div className="p-4 text-start">
        <h2 className="text-[1.1rem] font-semibold text-gray-600">{name}</h2>
        <p className="text-lg font-bold">Rs. {price.toFixed(2)}</p>
      </div>
    </div>
  );
}
