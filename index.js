const form1 = document.getElementById("userForm");

function changeText(ev)
{
    //prevent submission of form
    ev.preventDefault();

    //get the userentry div tag
    const div1 = document.getElementById("userEntries");

    //getting text from the input
    let text1 = form1.userName.value;
    let text2 = form1.ageEntry.value;

    //appending name to entries
    let text3 = `<p>${text1}, ${text2}</p>`;
    div1.innerHTML += text3;

    //clear out the entry on submit
    form1.reset();
}

form1.addEventListener("submit", changeText);

//TODO: have hint for entries
//TODO: have focus on first field on load and  on reset
//TODO: have tab formatting for the entries
//TODO: have appendChilds