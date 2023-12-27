export default function Inputs(id: string): HTMLElement {
  const homepage: HTMLElement = document.getElementById(id);
  const input: HTMLInputElement = document.createElement("input");
  input.placeholder = "Typssomething about your quotes";
  input.focus();
  homepage.innerHTML += input;
  return homepage.appendChild(input);
}
