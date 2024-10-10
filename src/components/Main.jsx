"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PokemonCard from './PokemonCard';

const ITEMS_PER_PAGE = 20;

export default function Main() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('id');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    fetchPokemon();
  }, [currentPage, sortBy, filterType]);

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${ITEMS_PER_PAGE}&offset=${(currentPage - 1) * ITEMS_PER_PAGE}`
      );
      const data = await response.json();
      setTotalPages(Math.ceil(data.count / ITEMS_PER_PAGE));
      
      const detailedPokemon = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );

      setPokemonList(detailedPokemon);
    } catch (err) {
      setError('Failed to fetch Pokémon');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterType(e.target.value);
  };

  const filteredAndSortedPokemon = pokemonList
    .filter((pokemon) => 
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === '' || pokemon.types.some(t => t.type.name === filterType))
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'id') return a.id - b.id;
      return b.base_experience - a.base_experience;
    });

    return (
        <main className="container mx-auto px-4 py-8">
          <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
            <input
              type="text"
              placeholder="Search Pokémon"
              value={searchTerm}
              onChange={handleSearch}
              className="mb-2 md:mb-0 p-2 border rounded bg-gray-800 text-white placeholder-gray-400 border-gray-700"
            />
            <div className="flex space-x-2">
              <select onChange={handleSort} value={sortBy} className="p-2 border rounded bg-gray-800 text-white border-gray-700">
                <option value="id">Sort by ID</option>
                <option value="name">Sort by Name</option>
                <option value="base_experience">Sort by Base Experience</option>
              </select>
              <select onChange={handleFilter} value={filterType} className="p-2 border rounded bg-gray-800 text-white border-gray-700">
                <option value="">All Types</option>
                <option value="grass">Grass</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                {/* Add more type options */}
              </select>
            </div>
          </div>
          
          {loading && <p className="text-white">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredAndSortedPokemon.map((pokemon) => (
              <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
              </Link>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center space-x-2">
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-700 disabled:text-gray-500"
            >
              Previous
            </button>
            <span className="px-4 py-2 text-white">Page {currentPage} of {totalPages}</span>
            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-700 disabled:text-gray-500"
            >
              Next
            </button>
          </div>
        </main>
      );
    }