/**
 * Author: Lurd Synell B. Najarila
 * Description: Card component for common use in widgets.
 */

function Card({ children }) {
  return (
    <article className='px-16 py-8 rounded-xl bg-white shadow-sm'>
      { children }
    </article>
  );
}

export default Card;