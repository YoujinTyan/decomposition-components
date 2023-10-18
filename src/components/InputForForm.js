export default function InputForForm({ placeholder }) {
  return (
    <input 
      className='input-from' 
      placeholder={placeholder} 
      value='' 
      type='text'
    />
  );
}