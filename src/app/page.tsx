'use client';

import { useState } from 'react';

interface Market {
  id: string;
  title: string;
  description: string;
  category: string;
  outcomes: string[];
  prices: number[];
  totalVolume: string;
  liquidity: string;
  endTime: string;
}

interface Position {
  id: string;
  marketId: string;
  outcome: string;
  shares: number;
  entryPrice: number;
  currentValue: number;
  pnl: number;
  pnlPercent: number;
}

const markets: Market[] = [
  {
    id: 'MKT-001',
    title: 'Will Bitcoin hit $100K by EOY 2026?',
    description: 'Binary yes/no question about Bitcoin price target',
    category: 'Crypto',
    outcomes: ['Yes', 'No'],
    prices: [0.62, 0.38],
    totalVolume: '$45.2M',
    liquidity: '$1.2M',
    endTime: '2026-12-31 23:59',
  },
  {
    id: 'MKT-002',
    title: 'Will ETH surpass $10,000?',
    description: 'Ethereum price prediction',
    category: 'Crypto',
    outcomes: ['Yes', 'No'],
    prices: [0.45, 0.55],
    totalVolume: '$28.9M',
    liquidity: '$890K',
    endTime: '2026-12-31 23:59',
  },
  {
    id: 'MKT-003',
    title: 'Will US rate cuts happen in Q2 2026?',
    description: 'Federal Reserve monetary policy',
    category: 'Politics',
    outcomes: ['Yes', 'No'],
    prices: [0.58, 0.42],
    totalVolume: '$67.4M',
    liquidity: '$2.1M',
    endTime: '2026-06-30 23:59',
  },
  {
    id: 'MKT-004',
    title: 'Will AI reach AGI by 2028?',
    description: 'Artificial General Intelligence timeline',
    category: 'AI',
    outcomes: ['Yes', 'No'],
    prices: [0.32, 0.68],
    totalVolume: '$12.3M',
    liquidity: '$450K',
    endTime: '2028-12-31 23:59',
  },
  {
    id: 'MKT-005',
    title: 'Will Polymarket hit $100M 24h volume?',
    description: 'Prediction market platform metrics',
    category: 'DeFi',
    outcomes: ['Yes', 'No'],
    prices: [0.28, 0.72],
    totalVolume: '$89.1M',
    liquidity: '$2.8M',
    endTime: '2026-06-30 23:59',
  },
];

const categories = ['All', 'Crypto', 'Politics', 'AI', 'DeFi', 'Sports'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [buyAmount, setBuyAmount] = useState('');

  const filteredMarkets = selectedCategory === 'All'
    ? markets
    : markets.filter(m => m.category === selectedCategory);

  const handleBuy = () => {
    if (!buyAmount || !selectedMarket) return;
    // Simulate trade
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-orange-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Prediction Markets</h1>
          <p className="text-gray-400 mt-2">Forecast the future. Trade on events. Win real money.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-orange-400 p-4 text-center">
            <div className="text-3xl font-black text-orange-400">$3.2B</div>
            <div className="text-sm text-gray-400">24h Volume</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">2.4M</div>
            <div className="text-sm text-gray-400">Traders</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">890</div>
            <div className="text-sm text-gray-400">Active Markets</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">56%</div>
            <div className="text-sm text-gray-400">Win Rate</div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-900 border-4 border-gray-700 p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 font-bold border-2 transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-500 border-orange-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Markets Grid */}
        <section className="grid md:grid-cols-2 gap-4">
          {filteredMarkets.map((market) => (
            <div
              key={market.id}
              onClick={() => setSelectedMarket(market)}
              className={`bg-gray-900 border-4 cursor-pointer transition-all hover:border-orange-400 ${
                selectedMarket?.id === market.id ? 'border-orange-400 bg-orange-900/20' : 'border-gray-700'
              }`}
            >
              <div className="p-4">
                <div className="flex gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-bold bg-orange-900/50 text-orange-400">
                    {market.category}
                  </span>
                  <span className={`px-2 py-1 text-xs font-bold ${
                    market.prices[0] > 0.5 ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'
                  }`}>
                    {market.prices[0] > 0.5 ? 'Bullish' : 'Bearish'}
                  </span>
                </div>
                <h3 className="font-bold text-orange-400 mb-2 line-clamp-2">{market.title}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{market.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Volume</span>
                    <span className="font-bold">{market.totalVolume}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Liquidity</span>
                    <span className="font-bold">{market.liquidity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ends</span>
                    <span className="text-xs">{market.endTime}</span>
                  </div>
                </div>

                {/* Outcome Bars */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-green-400">{market.outcomes[0]} (Yes)</span>
                    <span className="font-bold">{(market.prices[0] * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-900 border border-gray-600 h-3">
                    <div
                      className="bg-green-500 h-3 transition-all"
                      style={{ width: `${market.prices[0] * 100}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-xs mb-1 mt-3">
                    <span className="text-red-400">{market.outcomes[1]} (No)</span>
                    <span className="font-bold">{(market.prices[1] * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-900 border border-gray-600 h-3">
                    <div
                      className="bg-red-500 h-3 transition-all"
                      style={{ width: `${market.prices[1] * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Trade Panel */}
        {selectedMarket && (
          <section className="bg-gray-900 border-4 border-orange-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-black text-orange-400">{selectedMarket.title}</h2>
                <p className="text-sm text-gray-400">{selectedMarket.description}</p>
              </div>
              <button
                onClick={() => setSelectedMarket(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              {/* Yes */}
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-green-400">{selectedMarket.outcomes[0]}</span>
                  <span className="text-2xl font-bold">${(selectedMarket.prices[0] * 100).toFixed(2)}</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  Market odds: {(selectedMarket.prices[0] * 100).toFixed(0)}%
                </div>
                <button className="w-full py-2 bg-green-500 text-white font-bold border-2 border-green-400 hover:bg-green-400">
                  Buy Yes
                </button>
              </div>

              {/* No */}
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-red-400">{selectedMarket.outcomes[1]}</span>
                  <span className="text-2xl font-bold">${(selectedMarket.prices[1] * 100).toFixed(2)}</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  Market odds: {(selectedMarket.prices[1] * 100).toFixed(0)}%
                </div>
                <button className="w-full py-2 bg-red-500 text-white font-bold border-2 border-red-400 hover:bg-red-400">
                  Buy No
                </button>
              </div>
            </div>

            <div className="p-4 bg-yellow-900/30 border border-yellow-600 text-sm">
              <div className="font-bold text-yellow-400 mb-1">⚡ Max Position Size: ${selectedMarket.liquidity}</div>
              <div className="text-gray-400">
                Probability reflects market consensus. Win by being right.
              </div>
            </div>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How Prediction Markets Work</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-orange-400 mb-2">Forecast</h3>
              <p className="text-xs text-gray-400">Predict if event will happen</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Buy Shares</h3>
              <p className="text-xs text-gray-400">Buy Yes/No at current price</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Win on Outcome</h3>
              <p className="text-xs text-gray-400">Get $1 if prediction is correct</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">P&L</h3>
              <p className="text-xs text-gray-400">Price moves = profit/loss</p>
            </div>
          </div>
        </section>

        {/* Top Platforms */}
        <section className="bg-gray-900 border-4 border-orange-400 p-6">
          <h2 className="text-xl font-black text-orange-400 mb-4">Popular Platforms</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-orange-400 mb-2">Polymarket</div>
              <p className="text-sm text-gray-400">
                US-regulated, Bitcoin payments, 24/7 trading. Leading prediction market.
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-orange-400 mb-2">Kalshi</div>
              <p className="text-sm text-gray-400">
                CFTC-regulated, election-focused, US-only trading.
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-orange-400 mb-2">Augur</div>
              <p className="text-sm text-gray-400">
                Decentralized, community-driven, crypto-first.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-orange-400 hover:underline">@samdevrel</a>
          <button
            onClick={() => window.location.href = '/docs/overview'}
            className="w-full py-4 bg-purple-500 text-white font-bold border-4 border-purple-400 hover:bg-purple-400 mb-4"
          >
            {buttonText}
          </button>
                    </p>
        </footer>
      </div>
    </main>
  );
}
