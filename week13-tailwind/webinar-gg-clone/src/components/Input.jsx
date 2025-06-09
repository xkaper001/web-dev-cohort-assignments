export const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <div className={`rounded-lg bg-blue-300 px-4 py-2 w-80 border-`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="outline-0 bg-transparent w-72"
        placeholder={placeholder}
      ></input>
    </div>
  );
};
