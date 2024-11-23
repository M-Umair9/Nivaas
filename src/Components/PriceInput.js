const PriceInput = ({ label, placeholder, onChange }) => (
  <div className="mb-4">
    <label className="block text-white mb-2">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 bg-gray-700 text-white rounded"
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
export default PriceInput;
