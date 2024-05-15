//making d
const getHeader = () => {
    //creating the new element 
    const header1 = document.createElement("h1");

    //giving the header its id
    header1.id = "main-heading";

    //giving the header some text 
    header1.textContent = "Hello World!"

    //adding the header to the body
    document.body.appendChild(header1)
}

const getPara = () => {
    //making the new element 
    const newP = document.createElement("p");

    newP.id = "main-text";

    newP.classList.add("boring-text");

    newP.textContent = "Look, I'm some text!"

    document.body.appendChild(newP)
}



//runner
const main = () => {
    getHeader();
    getPara();
}

main();