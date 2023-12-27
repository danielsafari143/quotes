export default function Inputs(id: string): void {
  const homepage: HTMLElement = document.getElementById(id);
  const input: HTMLInputElement = document.createElement("input");
  input.placeholder = "Typssomething about your quotes";
  input.classList.add('border-2' , 'border-indigo-600')
  homepage.appendChild(input);
  input.focus();
}
