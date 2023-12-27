export default function Inputs(id: string):HTMLElement {
    const homepage = document.getElementById(id);
    const input:HTMLElement = document.createElement('input');
    return homepage.appendChild(input) 
}