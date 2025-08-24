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

export interface ProductPriceProps {
  price: number;
  discount: number;
}

export interface ProductColorSelectorProps {
  color: string;
  icon?: string;
  isSelected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: Size;
}

export type Size = "sm" | "md" | "lg" | "xl";

export interface NotFoundProps {
  title?: string;
  description?: string;
}
