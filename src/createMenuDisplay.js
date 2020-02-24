const menuContainer = document.querySelector("#content");
const outterContainer = document.querySelector("#outter-container");

const createDescription = (text) => {
    const description = document.createElement("h2");
    description.textContent = text;

    return description;
}

const createMenuDisplay = (descriptionText) => {
    const description = createDescription(descriptionText);

    outterContainer.classList.add("background-mask");
    menuContainer.innerHTML = '';
    menuContainer.appendChild(description);
}

export default createMenuDisplay;