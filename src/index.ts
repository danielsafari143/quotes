import "./style.css";
import Inputs from "./input";
import run from "./gemini";

Inputs("homepage");
const text = run("Reformulate this quotes for me : I can't fight with love because I'm to young");
console.log(text)
