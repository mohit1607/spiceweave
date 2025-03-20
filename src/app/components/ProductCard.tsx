import Image from "next/image";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  medium: boolean;
  large: boolean;
  xl: boolean;
  xxl: boolean;
  xxxl: boolean;
}

export default function ProductCard({
  name,
  price,
  image,
  medium,
  large,
  xl,
  xxl,
  xxxl,
}: ProductCardProps) {
  // Create an array of available sizes based on the boolean values
  const availableSizes = [
    medium && "M",
    large && "L",
    xl && "XL",
    xxl && "XXL",
    xxxl && "XXXL",
  ].filter(Boolean); // Filter out falsy values

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

        {/* Render available sizes if there are any */}
        {availableSizes.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-500">Available sizes:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {availableSizes.map((size, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}