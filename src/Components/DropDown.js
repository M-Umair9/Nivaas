const Dropdown = ({ label, options, selectedOption, onSelect }) => (
  <div className="mb-4 ">
    <label className="block text-white mb-2">{label}</label>
    <select
      className="w-full p-2 bg-gray-700 text-white rounded"
      value={selectedOption}
      onChange={(e) => onSelect(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
export default Dropdown;
