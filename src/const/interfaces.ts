export interface Brand {
  id: string;
  name: string;
  description: string;
  logo: string;
  founded: number;
  website: string;
  bio: string;
  products: ProductProps[];
}

export interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  icon: string;
  sizes?: string[];
}

export interface BrandProfileProps {
  logo: string;
  name: string;
  description: string;
  bio: string;
  website: string;
}

export interface navItemsProps {
  href: string;
  label: string;
}
