import { useState } from 'react';
import CategoryFilter from '../widgets/CategoryFilter.jsx';
import Footer from '../widgets/Footer.jsx';
import Header from '../widgets/Header.jsx';
import SearchBar from '../widgets/SearchBar.jsx';
import BookCard from '../widgets/BookCard.jsx';
import { sampleListings } from '../data/sampleListings.js';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['All Books', ...new Set(sampleListings.map((item) => item.category))];

  const featuredListings = sampleListings.slice(0, 4);

  const latestListings = [...sampleListings]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <>
      <Header />

      <div className="min-h-screen flex flex-col items-center">
        <div className="text-center mt-10 w-full py-7 flex flex-col items-center shadow-md">
          <h1 className="font-serif text-[32px] font-bold">Buy & Sell Books</h1>
          <p className="font-sans text-[16px] text-[#4A5568]">
            Connect with fellow Ateneans to buy and sell textbooks, novels, comics, and<br />
            other books within the AdNU community.
          </p>

          <SearchBar />

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(prev =>
                    prev === category ? null : category
                  )
                }
                className={`px-4 py-2 rounded-sm text-sm font-semibold transition border border-[#D9DDE2]
                  ${
                    selectedCategory === category ||
                    (category === 'All Books' && selectedCategory === 'All Books')
                      ? 'bg-[#1A407A] text-white hover:cursor-pointer'
                      : ' text-gray-700 hover:bg-[#1A407A] hover:text-white hover:cursor-pointer'
                  }`}
                  
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Listings Section */}
        <div className="w-full max-w-screen-xl px-4 mt-10">
          {selectedCategory === null ? (
            <>
              {/* Featured Listings */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Featured Listings</h2>
                  <a href="#" className="text-sm text-blue-500 hover:underline">View All</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {featuredListings.map(listing => (
                    <BookCard key={listing.id} listing={listing} />
                  ))}
                </div>
              </div>

              {/* Latest Listings */}
              <div className="py-10 rounded-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Latest Listings</h2>
                  <a href="#" className="text-sm text-blue-500 hover:underline">View All</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {latestListings.map(listing => (
                    <BookCard key={listing.id} listing={listing} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <CategoryFilter
              listings={sampleListings}
              selectedCategory={selectedCategory}
            />
          )}
        </div>

        <div className="text-center mt-5 mb-20">
          <div className='flex flex-col gap-5'>
              <h1 className="text-[24px] font-bold font-serif">Have books to sell?</h1>
              <p className="text-[16px] font-sans">
                List your books for sale and connect with buyers from the AdNU community.
              </p>
          </div>
          <button className="bg-[#E6B325] font-sans font-semibold px-5 py-2 mt-7 rounded-sm hover:cursor-pointer">
            Create Listing
          </button>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Home;
