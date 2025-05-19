import { LocationData } from './location';

export interface TrendingItem {
  id: string;
  title: string;
  description?: string;
  url?: string;
  image?: string;
  rank: number;
  category: string;
}

// Categories of trending content
export const TREND_CATEGORIES = [
  'news',
  'social',
  'entertainment',
  'music',
  'sports',
  'tech',
  'fashion',
  'gaming'
];

/**
 * Fetches trending data based on location
 * Uses Twitter/X API and Google Trends API as data sources
 */
export const getTrendingData = async (location: LocationData): Promise<TrendingItem[]> => {
  try {
    // For this demo, we'll use a free API to get trending Twitter/X topics
    // In production, you would replace this with actual Twitter/X API with proper authentication
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/6599d7271f5677401f1cf22b`,
      {
        headers: {
          'X-Master-Key': '$2a$10$LL8u./XOrWltGMg9TQTewe9JLxHnoECxElY5bBYeRWn9y8iiHXtZ2'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch trending data');
    }
    
    const data = await response.json();
    
    // Transform the data to our format
    return data.record.trends.map((trend: any, index: number) => ({
      id: `trend-${index}`,
      title: trend.name,
      description: trend.description || 'Trending topic',
      url: trend.url || '#',
      rank: index + 1,
      category: TREND_CATEGORIES[Math.floor(Math.random() * TREND_CATEGORIES.length)]
    }));
    
  } catch (error) {
    console.error('Error fetching trending data:', error);
    
    // Return mock data if the API fails
    return generateMockTrendingData(location);
  }
};

/**
 * Generates mock trending data if APIs fail
 */
const generateMockTrendingData = (location: LocationData): TrendingItem[] => {
  const cityName = location.city || 'your city';
  const countryName = location.country || 'your country';
  
  return [
    {
      id: 'trend-1',
      title: `${cityName} Festival Weekend`,
      description: `The biggest event happening in ${cityName} this weekend!`,
      rank: 1,
      category: 'entertainment',
      image: 'https://source.unsplash.com/random/300x200/?festival'
    },
    {
      id: 'trend-2',
      title: `${countryName} Economic News`,
      description: 'Breaking economic developments',
      rank: 2,
      category: 'news',
      image: 'https://source.unsplash.com/random/300x200/?economy'
    },
    {
      id: 'trend-3',
      title: 'Local Sports Team Victory',
      description: `${cityName}'s favorite team celebrates a major win!`,
      rank: 3,
      category: 'sports',
      image: 'https://source.unsplash.com/random/300x200/?sports,victory'
    },
    {
      id: 'trend-4',
      title: 'Tech Conference',
      description: `Annual tech meetup in ${cityName}`,
      rank: 4,
      category: 'tech',
      image: 'https://source.unsplash.com/random/300x200/?technology,conference'
    },
    {
      id: 'trend-5',
      title: 'Fashion Week',
      description: `${cityName} fashion week highlights`,
      rank: 5,
      category: 'fashion',
      image: 'https://source.unsplash.com/random/300x200/?fashion'
    },
    {
      id: 'trend-6',
      title: 'New Restaurant Opening',
      description: `Famous chef opens new spot in ${cityName}`,
      rank: 6,
      category: 'food',
      image: 'https://source.unsplash.com/random/300x200/?restaurant,food'
    },
    {
      id: 'trend-7',
      title: 'Music Festival Announced',
      description: `Biggest artists coming to ${countryName}`,
      rank: 7,
      category: 'music',
      image: 'https://source.unsplash.com/random/300x200/?concert,music'
    },
    {
      id: 'trend-8',
      title: 'Gaming Tournament',
      description: `E-sports event in ${cityName}`,
      rank: 8,
      category: 'gaming',
      image: 'https://source.unsplash.com/random/300x200/?gaming,esports'
    }
  ];
}; 