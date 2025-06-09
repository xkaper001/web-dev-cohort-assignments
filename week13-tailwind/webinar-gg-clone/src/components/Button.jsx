export const Button = ({ disabled, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`px-32 py-2 w-80 cursor-pointer ${
        disabled ? "bg-grey" : "bg-cyan"
      } rounded-md font-medium`}
    >
      {children}
    </div>
  );
};
