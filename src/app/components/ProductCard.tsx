import Image from "next/image"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface ProductCardProps {
  name: string
  price: number
  image: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 h-72 ">
      <div className="relative w-full h-48">
        <Zoom>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            objectFit="contain"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Zoom>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}