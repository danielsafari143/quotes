import "./style.css";
import Inputs from "./input";
import run from "./gemini";

Inputs("homepage");
const result = run();
result.then((value) => {
    console.log(value)
})
