import { useState, useEffect } from 'react';
import { LocationData, getLocationData } from '../utils/location';
import { TrendingItem, getTrendingData } from '../utils/trending';

interface UseTrendingResult {
  location: LocationData | null;
  trendingData: TrendingItem[];
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

export default function useTrending(): UseTrendingResult {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [trendingData, setTrendingData] = useState<TrendingItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get user location data
      const locationData = await getLocationData();
      setLocation(locationData);
      
      // Get trending data based on location
      const trends = await getTrendingData(locationData);
      setTrendingData(trends);
      
    } catch (err) {
      console.error('Error fetching trending data:', err);
      setError('Failed to load trending data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refreshData = async () => {
    await fetchData();
  };

  return {
    location,
    trendingData,
    loading,
    error,
    refreshData
  };
} 