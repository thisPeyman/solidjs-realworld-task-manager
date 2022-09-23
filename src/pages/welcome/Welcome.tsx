import { Component } from "solid-js";
import { Button } from "../../components/Button";

export const Welcome: Component = () => {
  return (
    <main class="text-center mt-8">
      <h2 class="text-xl">Welcome to Solid Task Manager</h2>
      <p class="p-3 text-gray-600">
        To get started, just click on The button and start your amazing journey
      </p>
      <div class="mt-3">
        <Button content="Let's Go" />
      </div>
    </main>
  );
};
