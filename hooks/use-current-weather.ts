import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { WeatherData } from '../types/WeatherXTypes';

type Props = {
  key: string;
  city: string;
}

const useCurrentWeather = ({ key, city }: Props) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get(`/current.json?key=${key}&q=${city}`)
        setData(result.data)
        setLoading(false)
      } catch (err) {
        setError(error)
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
};

export default useCurrentWeather;
