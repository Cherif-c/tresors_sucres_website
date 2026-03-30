import Image from 'next/image';
import type { Product } from '@/data/products';
import { productCardPlaceholder } from '@/data/products';

type Props = {
  product: Product;
  description?: string;
};

export default function ProductCard({ product, description = productCardPlaceholder }: Props) {
  const { name, image } = product;

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
      <div className="relative mb-4 h-40 w-full overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-tsCream/20 to-transparent">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : null}
      </div>
      <div className="text-2xl font-semibold text-tsCream">{name}</div>
      <p className="mt-3 text-sm leading-7 text-tsCream/75">{description}</p>
    </div>
  );
}
