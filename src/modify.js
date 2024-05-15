const getMainHeadingText = () => {
  console.log(document.querySelector("#main-heading").textContent)
};

//-------------------------------------------------------------------------
const getAllMainText = () => {
  //storing .maintext elements in a variable
  const mainTextElements = document.querySelectorAll(".main-text");

  //initialize empty string 
  let combinedText = "";

  //Modifying each individual element to fit the conditions of the strange
  mainTextElements.forEach((element, index) => {

    //add each element of the NodeList, modified with no white spaces around the text using trim
    combinedText += element.textContent.trim();

    //if it's not the last element of the array, add a comma after the element!
    if (index < mainTextElements.length - 1) {
      combinedText += ',';
    }
  }
  )

  console.log(combinedText)
}

//-------------------------------------------------------------------------

const setSubtitleText = () => {
  //selecting the element with the id "subtitle" and reassigning its value to the string below
  document.querySelector("#subtitle").textContent = 'This is a subtitle!'
};

//-------------------------------------------------------------------------
const modifyDivClassList = () => {
  //editing the list of classes identifying the element by accessing the class property, using classlist
  let classList = document.querySelector("#modify-classes").classList;
  //removing the bad class
  classList.remove("bad-class")

  //adding the new-class
  classList.add("new-class")
};

//----------------------------------------------------------------------------------

const addH2 = () => {
  //creating a new element stored in the variable H2
  const H2 = document.createElement("h2");

  //giving it the text it will present on the website page
  H2.textContent = 'Another one!';

  //giving the new element an ID
  H2.id = "h2-test"

  //adding the new element to the end of the body tag inside the document
  document.body.appendChild(H2);
};


//----------------------------------------------------------------------------------

const removeOldInfo = () => {
  const oldPee = document.querySelector("#old-info")
  oldPee.remove();
};

//----------------------------------------------------------------------------------

const makeAlphabet = () => {
  //creating a string of the alphabet as reference of what to fetch
  const theLiteralAlphabet = "abcdefghijklmnopqrstuvwxyz";

  //accessing the element with the alphabet attribute and the number of letters it wants
  const alpha = document.querySelector("#alphabet")

  //specifically fetching the number
  const getNum = alpha.dataset.numLetters

  //creating the letter position starting value
  let letterPosition = 1

  //looping through the literal alphabet the amount of times given by numLetters using getNum
  for (i = 0; i < getNum; i++) {
    //create a new element 
    let newListItem = document.createElement("li");

    //fill the new element with information about the current letter and current letterposition, incrementing
    newListItem.textContent = `${theLiteralAlphabet[i].toUpperCase()} is letter #${letterPosition++} in the alphabet`

    //add the new elements to the alphabet ul tag
    document.querySelector("#alphabet").appendChild(newListItem);

    // console.log(`${theLiteralAlphabet[i].toUpperCase()} is #${letterPosition++} in the alphabet`)
  }

};

//----------------------------------------------------------------------------------

const makeBio = () => {
  //with syntax and layout, you need to copy the exact answer key or it will mark it as wrong.
  document.querySelector("#my-bio").innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`
};



// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
