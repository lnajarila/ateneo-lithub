/**
 * Author: Lurd Synell B. Najarila
 * Description: Status indicator of an offer for a book listing.
 */

function OfferStatusIndicator({ offerStatus, children }) {
  const commonClasses = 'rounded-full px-4 py-1 bg-emerald-400 text-center text-sm ';

  if (offerStatus === 'Accepted') {
    return (
      <p className={commonClasses.concat('bg-emerald-400 text-gray-900')}>
        {children}
      </p>
    );
  }
  if (offerStatus === 'Rejected') {
    return (
      <p className={commonClasses.concat('bg-rose-500 text-gray-100')}>
        {children}
      </p>
    );
  }

  return (
    <p className={commonClasses.concat('bg-gray-300 text-gray-900')}>
      {children}
    </p>
  );
}

export default OfferStatusIndicator;