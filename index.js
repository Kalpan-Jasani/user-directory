const button1 = document.getElementById("button1");

function changeText(ev)
{
    const heading1 = document.getElementById("theHeading");
    heading1.innerHTML = "User directory for Kalpan";
}

button1.addEventListener("click", changeText);