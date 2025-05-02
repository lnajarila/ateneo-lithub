/**
 * Author: Lurd Synell B. Najarila
 * Description: Outlined button component for medium-emphasis buttons.
 */

function FilledTonalButton({ children }) {
  return (
    <button className='px-4 py-2 border border-slate-100 rounded-md hover:bg-primary-400/40 text-slate-100 cursor-pointer duration-300'>
      { children }
    </button>
  );
}

export default FilledTonalButton;