const form1 = document.getElementById("userForm");

function changeText(ev)
{
    //prevent submission of form
    ev.preventDefault();
    
    //get the heading and the input element
    const heading2 = document.getElementById("heading2");
    const input1 = document.getElementById("userText1");


    //getting text from the input
    let text1 = input1.value.toString();

    //setting heading with the text
    heading2.innerHTML = text1;
}

form1.addEventListener("submit", changeText);