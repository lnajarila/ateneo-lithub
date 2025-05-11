/**
 * Author: Lurd Synell B. Najarila
 * Description: Accent button component for high-emphasis buttons used for final actions in a flow.
 */

function AccentButton({ handleClick, children }) {
  return (
    <button
      className='w-full px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-400 font-bold text-gray-800 cursor-pointer duration-300'
      type='button'
      onClick={() => handleClick()}
    >
      { children }
    </button>
  );
}

export default AccentButton;