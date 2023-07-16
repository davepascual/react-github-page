import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: JSX.Element | string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

export default Button;
