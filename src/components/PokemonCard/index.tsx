import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PokemonCard({
  spriteUrl,
  name,
  id
}: {
  spriteUrl: string;
  name: string;
  id: number;
}) {
  return (
    <Link
      href={`/pokemon/${id}`}
      className="block p-4 border rounded-md hover:shadow-md relative"
    >
      <div className="flex justify-center">
        <Image
          src={spriteUrl}
          alt={`${name} sprite`}
          height={120}
          width={120}
        />
      </div>
      <div className="mt-2 text-center">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </div>
    </Link>
  );
}
