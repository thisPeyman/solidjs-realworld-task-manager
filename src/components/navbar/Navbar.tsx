import { Component, createSignal, Show } from "solid-js";
import { MenuButton } from "./MenuButton";

export const Navbar: Component = () => {
  const [isNavbarOpen, setIsNavbarOpen] = createSignal(false);

  const toggleNavbar = () => setIsNavbarOpen((isOpen) => !isOpen);

  return (
    <header class="px-4 py-5 bg-blue-600 text-gray-50 flex justify-between">
      <h1 class="text-xl font-light">Task Manager</h1>
      <MenuButton isNavbarOpen={isNavbarOpen()} toggleNavbar={toggleNavbar} />
    </header>
  );
};
