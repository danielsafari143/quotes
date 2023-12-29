import "./style.css";
import Inputs from "./input";
import run from "./gemini";
import posts from "./posts";

const style = `ring-2 ring-slate-500 outline outline-slate-100 px-3 rounded-sm h-10 w-6/12`;
const placeholder = `Share your thoughts, and I'll craft a quote to capture their essence.`;

Inputs({
  idContainer: "homepage",
  tagName: "input",
  placeholder,
  style,
});

Inputs({ idContainer: "homepage", tagName: "button", name: "Envoyer", style });

document.getElementById("Envoyer").addEventListener("click", () => {
  const inpt = <HTMLInputElement>document.getElementById("input");

  const result = run(inpt.value);
  result
    .then((value): void => {
      posts(value, "homepage");
    })
    .catch((e) => console.log(`This error happend:${e}`));
});
