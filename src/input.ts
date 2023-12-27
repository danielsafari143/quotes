export default function Inputs(id: string): void {
  const homepage = document.getElementById(id);
  const input: string = '<input placeholder="Something" class="border  border-indigo-600" />';
  homepage.innerHTML += input;
}
