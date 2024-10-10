import React from 'react';
import Image from 'next/image';

export default function PokemonDetails({ pokemon }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto text-white">
      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="relative w-48 h-48 mb-4 md:mb-0 md:mr-6">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold capitalize mb-2">{pokemon.name}</h1>
          <div className="flex space-x-2 mb-2">
            {pokemon.types.map((type) => (
              <span 
                key={type.type.name} 
                className="px-3 py-1 bg-gray-700 rounded-full text-sm"
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <p className="text-gray-400">Base Experience: {pokemon.base_experience}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Abilities</h2>
          <ul className="list-disc list-inside">
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name} className="capitalize">
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Stats</h2>
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} className="mb-2">
              <div className="flex justify-between">
                <span className="capitalize">{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}