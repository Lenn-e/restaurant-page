const homeContainer = document.querySelector("#content");
const outterContainer = document.querySelector("#outter-container");

const createDescription = (text) => {
    const description = document.createElement("h2");
    description.textContent = text;

    return description;
}

const createQuote = (text) => {
    const quote = document.createElement("p");
    quote.textContent = text;

    return quote;
}

const createHomeDisplay = (descriptionText, quoteText) => {
    const description = createDescription(descriptionText);
    const quote = createQuote(quoteText);

    homeContainer.innerHTML = '';
    outterContainer.classList.remove("background-mask");
    homeContainer.appendChild(description);
    homeContainer.appendChild(quote);
}

export default createHomeDisplay;