// fetch by custom atributes
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
// checkboxes
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
// indicator
const indicator1 = document.querySelector("[data-indicator1]");
const indicator2 = document.querySelector("[data-indicator2]");
const indicator3 = document.querySelector("[data-indicator3]");
const indicator4 = document.querySelector("[data-indicator4]");
const indicator5 = document.querySelector("[data-indicator5]");
const indicator6 = document.querySelector("[data-indicator6]");

// generate button
const generateBtn = document.querySelector(".generateButton");

const allCheckbox = document.querySelectorAll("input[type=checkbox]");
// symbol
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider(); // for UI ko update kerta hai using password length

// uppercase is checked by default so checkCount = 1
//uppercaseCheck.checked = true;

// ste strength circle color to grey
// Function creation
// copy content()
// handle Slider()
// generate Password()
// set Indicator()
// getRandomInteger(min,max)
// getRandomupperCase()
// getRandomlowerCase()
// getRandomNumber()
// getrandomSymbol()
// calStrength()


// set password length  input slider background
function handleSlider() {  // handle slider work only for the reflect the password length on the UI
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    // const min = inputSlider.min;
    // const max = inputSlider.max;
    // inputSlider.style.backgroundSize =
    // ((passwordLength - min) * 100) / (max - min) + "% 100%";
}





function setIndicator1(color) {  
    indicator1.style.backgroundColor = color;
    //indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}
function setIndicator2(color) {  
    indicator2.style.backgroundColor = color;
    //indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}
function setIndicator3(color) {  
    indicator3.style.backgroundColor = color;
    //indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}
function setIndicator4(color) {  
    indicator4.style.backgroundColor = color;
    //indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}
function setIndicator5(color) {  
    indicator5.style.backgroundColor = color;
    //indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}
function setIndicator6(color) {  
    indicator6.style.backgroundColor = color;
    //indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}









// genarate any random no. b/w min and max(exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; // floor for roundof the number 
}
// generate any random no. b/w 0- 9
function generateRandomNumber() {
    return getRandomInteger(0, 10);
}
// The ASCII value of the lowercase alphabet is from 97 to 122. 
// generate any random lowercase b/w a - z
function generateLowercase() {
    return String.fromCharCode(getRandomInteger(97, 123));
}

// ASCII value of the uppercase alphabet is from 65 to 90.
// generate any random uppercase b/w A - Z
function generateUppercase() {
    return String.fromCharCode(getRandomInteger(65, 91));
}

// generate any random symbol from index 0 - 39
function generateSymbol() {
    const randomIndex = getRandomInteger(0, symbols.length);
    return symbols.charAt(randomIndex);
}
// calculate password strength
function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNumber = true;
    if (symbolsCheck.checked) hasSymbol = true;

    if (hasUpper && hasLower && hasNumber && hasSymbol && passwordLength >= 8) {
        setIndicator1("#399918");
        setIndicator2("#399918");
        setIndicator3("#399918");
        setIndicator4("#399918");
        setIndicator5("#399918");
        setIndicator6("#399918")

        // setIndicator1("#d21a1a");
        // setIndicator2("#df612a");
        // setIndicator3("#c98f1f");
        // setIndicator4("#94bf19");
        // setIndicator5("#58ba1a");
        // setIndicator6("#4CAF50")
    } else if (hasUpper && hasLower && (hasNumber ||hasSymbol) && passwordLength >= 6) {
        setIndicator1("#d21a1a");
        setIndicator2("#df612a");
        setIndicator3("#c98f1f");
        setIndicator4("#94bf19");
        setIndicator5("#58ba1a");
    } else if(hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >=4){
        setIndicator1("#d21a1a");
        setIndicator2("#df612a");
        setIndicator3("#c98f1f");
        setIndicator4("#94bf19");
    } else if (hasUpper && hasLower && hasNumber && hasSymbol || passwordLength>=4){
        setIndicator1("#d21a1a");
        setIndicator2("#df612a");
        setIndicator3("#c98f1f");
    }else if (hasUpper && hasLower && hasNumber && hasSymbol || passwordLength>=4){
        setIndicator1("#d21a1a");
        setIndicator2("#df612a");
    }else{
        setIndicator1("#d21a1a");
    }
}
async function copyContent() { 
    try {
        // if(password === ""){
        //     alert('First Generate Password to copy');
        //     throw 'Failed'; 
        // }
        // for copy to clipboard
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = " Copied ";


        // throw error if password is empty
        
    }
    // catch() will only run if any error is thrown by the try block
    catch (error) {
        copyMsg.innerText = error;
    }
    copyMsg.classList.remove("opacity-0")
    copyMsg.classList.add("opacity-100");
    setTimeout(() => {
        copyMsg.classList.remove("opacity-100")
        copyMsg.classList.add("opacity-0")
    }, 2000);
}
function shufflePassword(array){
    // fisher yates Method
   for(let i = array.length - 1; i> 0; i--)
   {
       // random j find
       const j = Math.floor(Math.random() * (i+1));
       // for swap
       const temp = array[i];
       array[i] = array[j]; 
       array[j] = temp;
   }

   let str = "";
   array.forEach((el) => (str += el));
   return str;
}
function handleCheckboxChange(){
    checkCount = 0; 
    allCheckbox.forEach((checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });
    //special condition
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}
allCheckbox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange);

})
inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
});
copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value)
        copyContent();
    // if (password) copyContent();
});
generateBtn.addEventListener('click',() => {
    // none of the checkbox are selected
    if(checkCount <= 0 )
        //alert('Atleast check one checkbox'); 
        return ;
    if(passwordLength < checkCount){
        console.log("checkcount is "+checkCount)
        passwordLength = checkCount;
        handleSlider();
    }
    // let's start the journey to find new password 
    // remove old password
    //if(password.length)
        password  = "";


    // let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked){
    //     password = generateUppercase;
    // }
    // if(lowercaseCheck.checked){
    //     password = generateLowercase;
    // }
    // if(numbersCheck.checked){
    //     password = generateRandomNumber;
    // }
    // if(symbolsCheck.checked){
    //     password = generateSymbol;
    // }

// another way
    let funArr = [];
    if(uppercaseCheck.checked){
        funArr.push(generateUppercase);
    }
    if(lowercaseCheck.checked){
        funArr.push(generateLowercase);
    }
    if(numbersCheck.checked){
        funArr.push(generateRandomNumber);
    }
    if(symbolsCheck.checked){
        funArr.push(generateSymbol);
    }

    // compulsory addition 
    for(let i=0; i<funArr.length;i++){
        password += funArr[i]();
    }

    //remaining charactor
    for(let i=0; i< (passwordLength - funArr.length);i++){
        let randomIndex = getRandomInteger(0, funArr.length);
        password += funArr[randomIndex]();
    }

    // shuffle the password 
    password = shufflePassword(Array.from(password));

    // show  in UI
    passwordDisplay.value = password;
    // calculate strength
    calcStrength();
 
});
