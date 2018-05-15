const form1 = document.getElementById("userForm");

function changeText(ev)
{
    //prevent submission of form
    ev.preventDefault();

    //get the heading and the input element
    const div1 = document.getElementById("userEntries");
    const input1 = document.getElementById("userText1");

    //getting text from the input
    let text1 = input1.value.toString();

    //appending name to entries
    let text2 = "<p>" + text1 + "</p1>";
    div1.innerHTML += text2;

    //clear out the entry on submit
    ev.target.reset();
}

form1.addEventListener("submit", changeText);