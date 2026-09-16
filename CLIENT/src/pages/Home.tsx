import React, { useEffect, useState } from 'react';
import type { Recipe } from '../types/recipe';
import { RecipeCard } from '../components/RecipeCard';
import { RecipeDetail } from '../pages/RecipeDetail';

export const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/recipes?populate=*');
        if (!response.ok) {
          throw new Error('Failed to fetch recipes from Strapi');
        }
        const data = await response.json();
        setRecipes(data.data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Something went wrong';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-neutral-400">
        <p className="tracking-wide text-sm">Loading recipes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-red-400">
        <p className="tracking-wide text-sm">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onClick={() => setSelectedRecipe(recipe)} 
          />
        ))}
      </div>

      {selectedRecipe && (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </div>
  );
};