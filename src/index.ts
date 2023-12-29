import "./style.css";
import Inputs from "./input";
import run from "./gemini";
import posts from "./posts";

const style = `ring-2 ring-slate-500 outline outline-slate-100 px-3 rounded-sm h-10 w-6/12`;
const placeholder = `Share your thoughts, and I'll craft a quote to capture their essence.`;
const buttonStyle =
  "bg-blue-800 text-white p-2 ring-2 ring-blue-300 rounded-lg text-slate-500 hover:bg-blue-500 hover:ring-purple-200 hover:text-white  hover:text-bold";

Inputs({
  idContainer: "homepage",
  tagName: "input",
  placeholder,
  style,
});

Inputs({
  idContainer: "homepage",
  tagName: "button",
  name: "Submit",
  style: buttonStyle,
});

document.getElementById("Submit").addEventListener("click", () => {
  const inpt = <HTMLInputElement>document.getElementById("input");

  const result = run(inpt.value);
  result
    .then((value): void => {
      posts(value, "homepage");
    })
    .catch((e) => console.log(`This error happend:${e}`));
});
