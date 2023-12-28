export default function Inputs(containerId: string): void {
  const container = document.getElementById(containerId);
  const inputElement = document.createElement("input");

  if (!container) {
    throw new Error(`Container with ID "${containerId}" not found.`);
  }

  inputElement.placeholder = "Type your thought and let the ai do the rest";
  inputElement.classList.add("ring-1", "ring-black-500");

  container.appendChild(inputElement);
}


