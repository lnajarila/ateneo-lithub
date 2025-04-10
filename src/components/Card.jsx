/**
 * Author: Lurd Synell B. Najarila
 * Description: Card component for common use in widgets.
 */

function Card({ elevation, children }) {
  const commonClasses = 'rounded-xl overflow-hidden duration-300 ';
  const elevationClassesList = [
    'bg-white shadow-sm',
    'bg-slate-100 hover:bg-slate-50 shadow-md hover:shadow-lg duration-300',
  ];
  const elevationClasses = elevationClassesList[elevation - 1];

  return (
    <article className={commonClasses.concat(elevationClasses)}>
      { children }
    </article>
  );
}

export default Card;