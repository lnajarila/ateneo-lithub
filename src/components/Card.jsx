/**
 * Author: Lurd Synell B. Najarila
 * Description: Card component for common use in widgets.
 */

function Card({ elevation, isClickable = false, children }) {
  let className = 'rounded-xl overflow-hidden ';

  if (elevation == 1) {
    if (isClickable) {
      className += 'bg-white shadow-sm hover:shadow-lg cursor-pointer duration-300';
    } else {
      className += 'bg-white shadow-sm';
    }
  } else if (elevation == 2) {
    if (isClickable) {
      className += 'bg-slate-50 shadow-sm hover:shadow-md cursor-pointer duration-300';
    } else {
      className += 'bg-slate-50 shadow-sm';
    }
  }

  return (
    <article className={className}>
      { children }
    </article>
  );
}

export default Card;