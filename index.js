const button2 = document.getElementById("button2");

function changeText(ev)
{
    //get the heading and the input element
    const heading2 = document.getElementById("heading2");
    const input1 = document.getElementById("userText1");


    //getting text from the input
    let text1 = input1.value.toString();

    //setting heading with the text (but kalpan for debugging)
    heading2.innerHTML = text1;
}

button2.addEventListener("click", changeText);