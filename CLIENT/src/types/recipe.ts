export interface Recipe {
  id: number;
  documentId: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  ingredients: string[];
  method: string[];
  image?: {
    url: string;
  };
}