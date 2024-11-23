const TypeSelector = ({ options, selectedOption, onSelect, label }) => (
  <div className="mb-4">
    <label className="block text-white mb-2">{label}</label>
    <div className="flex gap-2">
      {options.map((option) => (
        <button
          key={option}
          className={`p-2 rounded ${
            selectedOption === option
              ? "bg-gray-600 text-white"
              : "bg-gray-800 text-gray-400"
          }`}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);
export default TypeSelector;
