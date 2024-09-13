import React from 'react';
import GenericSection from './GenericSection';

type Category = {
  label: string;
  icon: string;
};

const categories: Category[] = [
  { label: 'Alimentos', icon: '🍲' },
  { label: 'Accesorios', icon: '🛠️' },
  { label: 'Higiene', icon: '🧼' },
  { label: 'Alimentos', icon: '🍲' },
  { label: 'Accesorios', icon: '🛠️' },
  { label: 'Higiene', icon: '🧼' },
  // Agrega más categorías según necesites
];

export default function CategoriesSection() {
  return (
    <GenericSection
      headerLabel="Categorías"
      title="Explora nuestras categorías"
      description="Encuentra todo lo que necesitas para tu mascota."
      gridCols="lg:grid-cols-3" // Ajusta el número de columnas según tu diseño
    >
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col bg-gray-200 p-6 rounded-lg text-center hover:scale-105 transform transition duration-300 ease-in-out min-h-[200px] h-full"
        >
          <div className="text-6xl mb-4">{category.icon}</div>
          <span className="text-lg font-semibold text-gray-800">{category.label}</span>
        </div>
      ))}
    </GenericSection>
  );
}
