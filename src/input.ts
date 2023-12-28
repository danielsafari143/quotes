export default function Inputs(idContainer: string): void {
  let homepage: HTMLElement;
  const placeholder = `Share your thoughts, and I'll craft a quote to capture their essence.`;
  const style = `ring-2 ring-slate-400 outline outline-slate-100 px-3 rounded-sm h-10 w-6/12`;

  if (!document.getElementById(idContainer)) {
    throw new Error(
      `There is no parent component with this id: ${idContainer}`,
    );
  }

  homepage = document.getElementById(idContainer);
  const input: string = `<input placeholder="${placeholder}" id="input" class="${style}"/>`;
  homepage.innerHTML += input;
}
