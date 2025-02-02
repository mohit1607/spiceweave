"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Category {
  name: string
  items: string[]
}

interface CategoryMenuProps {
  categories: Category[]
  onSelectItem: (category: string, item: string) => void
}

export default function CategoryMenu({ categories, onSelectItem }: CategoryMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName)
  }

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <div key={category.name} className="border rounded-lg overflow-hidden">
          <button
            className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
            onClick={() => toggleCategory(category.name)}
          >
            <span className="font-semibold">{category.name}</span>
            {expandedCategory === category.name ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedCategory === category.name && (
            <div className="p-4 bg-white">
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <button
                      className="w-full text-left p-2 hover:bg-gray-100 rounded"
                      onClick={() => onSelectItem(category.name, item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

