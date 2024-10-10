import React from 'react';
import Image from 'next/image';

export default function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h2 className="text-xl font-semibold text-center capitalize mb-2">{pokemon.name}</h2>
      <div className="flex justify-center space-x-2">
        {pokemon.types.map((type) => (
          <span 
            key={type.type.name} 
            className="px-2 py-1 bg-gray-200 rounded-full text-sm"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}