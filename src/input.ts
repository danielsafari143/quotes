export default function Inputs(idContainer: string ,  tagName:string, placeholder?:string , style?:string): void {
  let homepage: HTMLElement;

  if (!document.getElementById(idContainer)) {
    throw new Error(
      `There is no parent component with this id: ${idContainer}`,
    );
  }

  homepage = document.getElementById(idContainer);
  const input: string = `<${tagName} placeholder="${placeholder}" id="input" class="${style}"/>`;
  homepage.innerHTML += input;
}

// const placeholder = `Share your thoughts, and I'll craft a quote to capture their essence.`;
// const style = `ring-2 ring-slate-500 outline outline-slate-100 px-3 rounded-sm h-10 w-6/12`;
