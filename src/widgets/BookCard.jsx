import { Link } from 'react-router';
import Card from '../components/Card.jsx';

export default function BookCard({ listing }) {
  const numberFormat = Intl.NumberFormat('PH', {style: 'currency', currency: 'PHP'});

  return (
    <Link to={`/listings/${listing.id}`}>
      <Card elevation={1} isClickable={true}>
        <div className="h-64 w-full overflow-hidden bg-orange-300">
          {/*<img
            src={`${img}`}
            alt="Book Cover"
            className="object-cover w-full h-full"
          />*/}
        </div>
        <div className="p-4">
          <h2 className="mb-1 font-serif text-md font-bold text-gray-900 truncate">{listing.title}</h2>
          <p className="mb-4 text-sm text-gray-600 truncate">{listing.authors.join(', ')}</p>
          <div className="flex space-x-2 mb-2">
            <span className="max-w-28 rounded-lg px-4 py-1 bg-gray-100 text-gray-600 text-sm truncate">
              {listing.category}
            </span>
            <span className="max-w-28 rounded-lg px-4 py-1 bg-gray-100 text-gray-600 text-sm truncate">
              {listing.subcategory}
            </span>
          </div>
          <p className="text-primary-500 font-extrabold text-lg">{numberFormat.format(listing.price)}</p>
        </div>
      </Card>
    </Link>
  );
}
