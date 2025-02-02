import Image from "next/image"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
// import image from '../../../public/dummyimage.png'

interface ProductCardProps {
  name: string
  price: number
  image: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 h-72 ">
      <div className="relative w-full h-52">
        <Zoom>
          <Image
            src={image || "/dummyimage.png"}
            alt={name}
            objectFit="cover"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Zoom>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm">₹{price.toFixed(2)}</p>
      </div>
    </div>
  )
}