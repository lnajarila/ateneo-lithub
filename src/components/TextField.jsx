/**
 * Author: Lurd Synell B. Najarila
 * Description: Reusable component for input text fields
 */

function TextField({ id, label, placeholder, isVisible = true, supportingText, handleChange }) {
  return (
    <div>
      <label htmlFor={id} className='block pb-1 text-sm text-gray-600 font-semibold'>{label}</label>

      <input
        id={id}
        type={isVisible ? 'text' : 'password'}
        placeholder={placeholder}
        className='block w-full border border-gray-400 rounded-md p-3 text-gray-900'
        onChange={(event) => handleChange(event.target.value)}
      />

      {supportingText && <p className='pt-2 text-sm text-gray-900'>{supportingText}</p>}
    </div>
  );
}

export default TextField;