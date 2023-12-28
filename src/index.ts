import "./style.css";
import Inputs from "./input";
import run from "./gemini";

Inputs({
  idContainer: "homepage",
  tagName: "input",
  placeholder: "Hey Type something",
});
Inputs({ idContainer: "homepage", tagName: "button", name: "Envoyer" });

document.getElementById("Envoyer").addEventListener("click", (e) => {
  const inpt = <HTMLInputElement>document.getElementById("input");

  const result = run(inpt.value);
  result.then((value) => {
    console.log(value);
  });
});
