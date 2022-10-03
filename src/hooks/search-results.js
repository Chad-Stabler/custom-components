import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { search } from '../services/beanie-babies';

export default function useSearchResults() {
  const [searchresults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const useSearchParams = Object.fromEntries(searchParams.entries());

  const nextPage = async () => {
    useSearchParams.page = parseInt(useSearchParams.page) + 1;
    setSearchParams(useSearchParams);
    const moreResults = await search(useSearchParams);
  };

  

  const searchBeanieBabies = async (searchObj) => {
    if (searchObj.page == null) {
      searchObj.page = 1;
    }
  };
}
