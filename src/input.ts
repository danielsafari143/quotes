export default function Inputs(containerId: string): void {
  const container = document.getElementById(containerId);

  if (!container) {
    throw new Error(`Container with ID "${containerId}" not found.`);
  }

  const inputElement = document.createElement("input");
  inputElement.placeholder = "Something";
  inputElement.classList.add("ring-1", "ring-black-500");

  container.appendChild(inputElement);
}


