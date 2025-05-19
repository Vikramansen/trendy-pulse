"use client";

import { useState } from 'react';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import Header from './components/Header';
import TrendingCard from './components/TrendingCard';
import Loader from './components/Loader';
import Confetti from './components/Confetti';
import CategoryFilter from './components/CategoryFilter';
import useTrending from './hooks/useTrending';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function Home() {
  const { location, trendingData, loading, error, refreshData } = useTrending();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter trending data by selected category
  const filteredTrends = selectedCategory
    ? trendingData.filter(item => item.category === selectedCategory)
    : trendingData;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <Confetti count={30} />
      
      <Header location={location} loading={loading} />
      
      <div className="w-full max-w-6xl mx-auto mt-8">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center p-8 bg-red-900/20 rounded-lg border border-red-500/50">
            <p className="text-red-300">{error}</p>
            <button
              className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors"
              onClick={refreshData}
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onChange={setSelectedCategory} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTrends.length > 0 ? (
                filteredTrends.map((item, index) => (
                  <Reveal 
                    key={item.id} 
                    keyframes={fadeIn} 
                    delay={index * 100} 
                    cascade={true}
                    triggerOnce
                  >
                    <TrendingCard item={item} index={index} />
                  </Reveal>
                ))
              ) : (
                <div className="col-span-full text-center p-8">
                  <p className="text-gray-400">No trending items found in this category.</p>
                </div>
              )}
            </div>
            
            <div className="w-full flex justify-center mt-8">
              <button
                className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors flex items-center gap-2"
                onClick={refreshData}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Refresh Trends
              </button>
            </div>
          </>
        )}
      </div>
      
      <footer className="mt-16 text-center text-sm text-gray-400">
        <p>Built with Next.js, Tailwind, and Framer Motion</p>
        <p className="mt-1">Data powered by free trending APIs</p>
      </footer>
    </main>
  );
}
