export default function Inputfield({
  type,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="w-full mb-4">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-600 rounded-md bg-dark-gray text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
