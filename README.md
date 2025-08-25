<h1 align="left">🤖 Nexora Website Overview</h1>

<img width="1080" height="770" alt="nexora" src="https://github.com/user-attachments/assets/034cad07-bf6b-49b8-bc07-71ebb4cfd9e9" />
<img width="1920" height="1126" alt="image" src="https://github.com/user-attachments/assets/489702d3-6ebe-4dea-a02b-12744266f7fb" />


---

## Link To
- [Figma](https://www.figma.com/design/GD0lMvbqtBGDL4bfVVaQNq/Nexora?node-id=1-676&t=lEHe1u4klqJKKbyw-1)
- [Live Preview](https://nexora-puce-zeta.vercel.app/)


## ✨ Main Features

- Fully responsive design across devices  
- This application displays a list of brands, products, and product details.
- Each brand has several products.
- Each product contains detailed information.
- Brand list and product list are implemented with pagination.
- Data fetching is handled using TanStack Query (useQuery) for caching and optimized performance.

---

## 🛠️ Tech Stack & Tools

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo" />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo" />
</div>

- **TypeScript** – Strongly typed JavaScript for better maintainability  
- **React.js** – Frontend library for building modern UIs  
- **TanStack Query** – Data fetching & caching for server state management  
- **Tailwind CSS** – Utility-first CSS framework for rapid styling  
- **Shadcn UI** – Accessible and customizable UI components  
- **Framer Motion** – Animation library for smooth and modern UI interactions  
---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/ikhlasdansantai/nexora.git
cd nexora

# install dep
# with pnpm (recommended)
pnpm install

# or with npm
npm install


# run project
# with pnpm (recommended)
pnpm run dev

# or with npm
npm run dev
```
The app will be available at: `http://localhost:5173` (Vite default) or as configured.

## 🚀 Essay Answers

#### a.Props dengan typscript.
Props adalah salah satu fitur yang ada di dalam ekosistem react,  dimana kita bisa mengirimkan data dari `parent component` ke `child component` nya. Dengan Typescript, props bisa kita definisikan juga dengan tipe datanya, agar tipe data yang diterima bisa lebih aman dan juga lebih terstruktur, contoh:

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
};

export default function Button ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```
Dengan pendekatan ini, kerja tim akan menjadi lebih gampang dan juga harmonis, sebab mereka akan langsung tahu data apa yang perlu dikirim ke component nya nanti, dan juga ini meningkatkan Developer experience dan juga mengurangi bug human error, sebab typescript akan memberikan warning atau error, bilamana data yang di terima component itu tidak sesuai 


#### b.Pemahaman Tentang TanStack
Singkatnya, `tanstack query`, adalah sebuah library untuk kita melakukan data fetching, caching, dan state management, secara satu kesatuan. Daripada kita membuat nya manual, yang dimana itu akan cukup memakan banyak waktu, fitur dari tanstack query sudah bisa handle itu semua, contoh:

```tsx
import { useQuery } from "@tanstack/react-query";
import type { ProductProps } from "@/interfaces";

export default function Products() {
  const { data: products, isPending, error } = useQuery<ProductProps[]>({
    queryKey: ["products"],
    queryFn: () => fetch("/api/products").then(res => res.json()),
  });

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error loading data :(</p>;

  return (
    <ul>
      {products.map(({name, id}) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
```
Jadi intinya, TanStack akan sangat membantu developer untuk bisa lebih fokus ke `logic bisnis` daripada ribet harus ngurusin state data fetching manual.
