const Button = ({ textOnly = false, onClick, children, ...props }) => {
  const cssClass = textOnly ? "text-button" : "button";

  return (
    <button className={cssClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
