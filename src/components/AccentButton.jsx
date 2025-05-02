/**
 * Author: Lurd Synell B. Najarila
 * Description: Accent button component for high-emphasis buttons used for final actions in a flow.
 */

function AccentButton({ children }) {
  return (
    <button className='min-w-72 px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-400 font-bold text-gray-900 cursor-pointer duration-300'>
      { children }
    </button>
  );
}

export default AccentButton;