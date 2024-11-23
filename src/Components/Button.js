// Button.js
const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-3 bg-white text-dark-grey font-semibold rounded-md mt-4"
    >
      {text}
    </button>
  );
};

export default Button;
