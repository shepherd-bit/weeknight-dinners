import React from 'react';
import type { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  // Handle Strapi localhost URL for media
  const rawUrl = recipe.image?.url;
  
  const imageUrl = rawUrl 
    ? (rawUrl.startsWith('http') ? rawUrl : `http://localhost:1337${rawUrl}`)
    : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c';

  return (
    <div 
      onClick={onClick}
      className="group relative h-[520px] w-full overflow-hidden rounded-2xl cursor-pointer shadow-sm transition-all duration-300 hover:shadow-md"
    >
      {/* Background Image */}
      <img 
        src={imageUrl} 
        alt={recipe.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] uppercase tracking-wider font-medium">
            {recipe.category}
          </span>
          <span className="text-xs tracking-wide text-neutral-300 font-medium">
            {recipe.duration}
          </span>
        </div>

        <h3 className="text-3xl font-normal tracking-wide mb-4 font-serif">
          {recipe.title}
        </h3>

        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">
          <span>View Recipe</span>
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-white"></span>
        </div>
      </div>
    </div>
  );
};