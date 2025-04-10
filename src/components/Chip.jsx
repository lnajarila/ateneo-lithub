/**
 * Author: Lurd Synell B. Najarila
 * Description: Chip component for common use in widgets.
 */

function Chip({ children }) {
  return (
    <p className='rounded-lg px-4 py-1 bg-gray-300 text-gray-600 text-sm'>
      {children}
    </p>
  );
}

export default Chip;