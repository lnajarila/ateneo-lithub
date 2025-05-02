/**
 * Author: Lurd Synell B. Najarila
 * Description: Surface button component for medium-emphasis buttons.
 */

function SurfaceButton({ children }) {
  return (
    <button className='px-4 py-2 rounded-md bg-slate-100 hover:bg-slate-200 text-primary-500 font-semibold cursor-pointer duration-300'>
      { children }
    </button>
  );
}

export default SurfaceButton;