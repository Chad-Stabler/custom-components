import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function searchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const useSearch = Object.fromEntries(searchParams.entries());
  const [pokemon, setPokemon] = useState(useSearch.pokemon || '');

  return { pokemon, searchForm: useSearch, 
    setPokemon, setSearchForm: setSearchParams };
}
