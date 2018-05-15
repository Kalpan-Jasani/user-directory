const button1 = document.getElementById("button1");

function changeText(ev)
{
    const heading2 = document.getElementById("heading2");
    heading2.innerHTML = "User directory for Kalpan";
}

button1.addEventListener("click", changeText);