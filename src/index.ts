import "./style.css";
import Inputs from "./input";
import run from "./gemini";

const style = `ring-2 ring-slate-500 outline outline-slate-100 px-3 rounded-sm h-10 w-6/12`;
const placeholder = `Share your thoughts, and I'll craft a quote to capture their essence.`;

Inputs({
  idContainer: "homepage",
  tagName: "input",
  placeholder,
  style
});


Inputs({ idContainer: "homepage", tagName: "button", name: "Envoyer" });

document.getElementById("Envoyer").addEventListener("click", (e) => {
  const inpt = <HTMLInputElement>document.getElementById("input");

  const result = run(inpt.value);
  result.then((value) => {
    console.log(value);
  });
});
