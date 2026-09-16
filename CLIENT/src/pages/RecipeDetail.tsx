import React from 'react';
import type { Recipe } from '../types/recipe';
import { X } from 'lucide-react';

interface RecipeDetailProps {
  recipe: Recipe;
  onClose: () => void;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onClose }) => {
  const rawUrl = recipe.image?.url;
  const imageUrl = rawUrl 
    ? (rawUrl.startsWith('http') ? rawUrl : `http://localhost:1337${rawUrl}`)
    : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c';

  // Helper to ensure ingredients/methods are safe to map
  const ingredientsList = Array.isArray(recipe.ingredients) 
    ? recipe.ingredients 
    : typeof recipe.ingredients === 'string' 
      ? recipe.ingredients.split('\n') 
      : [];

  const methodList = Array.isArray(recipe.method) 
    ? recipe.method 
    : typeof recipe.method === 'string' 
      ? recipe.method.split('\n') 
      : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#FBFBFA] text-[#1a1a1a] font-['Inter'] animate-fadeIn">
      {/* Header Bar */}
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-[#1a1a1a] text-white rounded-full text-[11px] uppercase tracking-wider font-medium">
            {recipe.category}
          </span>
          <span className="text-xs tracking-wide text-neutral-500 font-medium">
            {recipe.duration}
          </span>
        </div>
        <button 
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Hero Image Section */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-md">
          <img 
            src={imageUrl} 
            alt={recipe.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
            <h1 className="text-4xl md:text-5xl font-normal tracking-wide mb-3 font-serif">
              {recipe.title}
            </h1>
            <p className="text-neutral-200 text-sm md:text-base max-w-2xl leading-relaxed">
              {recipe.description}
            </p>
          </div>
        </div>
      </div>

      {/* Ingredients & Method Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Ingredients Column */}
          <div className="md:col-span-5">
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400 mb-8">
              Ingredients
            </h2>
            <ul className="space-y-4">
              {ingredientsList.map((ingredient, index) => (
                <li key={index} className="flex items-start text-sm text-neutral-700 leading-relaxed">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 mr-3 shrink-0" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Method Column */}
          <div className="md:col-span-7">
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400 mb-8">
              Method
            </h2>
            <div className="space-y-8">
              {methodList.map((step, index) => {
                const stepNumber = (index + 1).toString().padStart(2, '0');
                return (
                  <div key={index} className="flex items-start gap-6">
                    <span className="text-3xl font-light text-neutral-300 font-serif shrink-0">
                      {stepNumber}
                    </span>
                    <p className="text-sm text-neutral-700 leading-relaxed pt-1.5">
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};