import BookCard from './BookCard';

const CategoryFilter = ({ listings, selectedCategory }) => {
  const filteredListings =
    selectedCategory === 'All Books'
      ? listings
      : listings.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredListings.map((listing) => (
          <BookCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
