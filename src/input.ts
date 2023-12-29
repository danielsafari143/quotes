type elementType = "button" | "input";

interface params {
  idContainer: string;
  tagName: elementType;
  placeholder?: string;
  style?: string;
  name?: string;
}

export default function Inputs(params: params): void {
  let homepage: HTMLElement;
  let childElement: string;

  if (!document.getElementById(params.idContainer)) {
    throw new Error(
      `There is no parent component with this id: ${params.idContainer}`,
    );
  }

  homepage = document.getElementById(params.idContainer);
  if (params.tagName == "input") {
    childElement = `<${params.tagName} placeholder="${params.placeholder}" id="${params.tagName}" class="${params.style}"/>`;
  } else {
    childElement = `<${params.tagName} id="${params.name}" class="${params.style}">${params.name}</${params.tagName}>`;
  }

  homepage.innerHTML += childElement;
}
