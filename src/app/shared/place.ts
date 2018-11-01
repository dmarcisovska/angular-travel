import { Comment } from './comment';


export class Place {
  id: number;
  featured: boolean;
  name: string;
  image: string;
  category: string;
  description: string;
  descriptionlong: string;
  comments: Comment[];
}
