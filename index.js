const form1 = document.getElementById("userForm");

function changeText(ev)
{
    //prevent submission of form
    ev.preventDefault();

    //get the userentry div tag
    const div1 = document.getElementById("userEntries");

    //getting text from the input
    const text1 = form1.userName.value;
    const text2 = form1.ageEntry.value;

    const para1 = document.createElement('P');
    para1.innerHTML = `${text1}, ${text2}`;
    
    //appending name to entries
    div1.appendChild(para1);

    //clear out the entry on submit
    form1.reset();
    form1.userName.focus();
}

form1.addEventListener("submit", changeText);

//TODO: have tab formatting for the entries
//TODO: have appendChilds