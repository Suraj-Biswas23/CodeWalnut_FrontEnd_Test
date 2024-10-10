"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import PokemonDetails from '../../../components/PokemonDetails';


export default function PokemonDetailPage() {
  const params = useParams();
  const { id } = params;
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchPokemon(id);
    }
  }, [id]);

  const fetchPokemon = async (pokemonId) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pokemon) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block">
        Back to List
      </Link>
      <PokemonDetails pokemon={pokemon} />
    </div>
  );
}