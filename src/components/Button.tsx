import { Component } from "solid-js";

interface ButtonProps {
  content: string;
}

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button class="py-2 px-3 bg-blue-600 text-gray-50 rounded shadow cursor-pointer active:bg-blue-400 active:text-gray-700 transition duration-75">
      {props.content}
    </button>
  );
};
