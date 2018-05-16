const form1 = document.getElementById("userForm");

function onSubmit(ev)
{
    //prevent submission of form
    ev.preventDefault();

    //get the userentry div tag
    const div1 = document.getElementById("userEntries");

    //create and put a list into the div tag
    div1.appendChild(renderList());

    //clear out the entry on submit
    form1.reset();
    form1.userName.focus();
}

function renderColor(colorString)
{
    //create a div element
    const aSpan = document.createElement("SPAN");

    //set the background for the div tag
    aSpan.style.backgroundColor = colorString;
    return aSpan;
}
function renderList()
{
    const list1 = document.createElement("UL");
    const nameString = form1.userName.value;
    const age = form1.ageEntry.value;
    const colorString = form1.colorEntry.value;

    //render the list items and append them to the list
    list1.appendChild(renderListItem("name", "Name", nameString));
    list1.appendChild(renderListItem("age", "Age", age));
    list1.appendChild(renderListItem("color", colorString));
    return list1;
}

function renderListItem(modeString, name, value)
{
    
    if(modeString == "color")
    {
        const listItem = document.createElement("LI");
        const textNode1 = document.createTextNode("Favorite color: ");
        listItem.appendChild(textNode1);

        //get a tile (a span element()) with a specific color. The color is stored in the second argument when using this function to make a list item for a color entry
        const colorTile = renderColor(name);
        colorTile.style.height = "1em";
        colorTile.style.width = "2em";
        colorTile.style.display = "inline-block";
        listItem.appendChild(colorTile);
        return listItem;
    }
    else
    {
        const listItem = document.createElement("LI");
        const textNode1 = document.createTextNode(name + ": " + value);
        listItem.appendChild(textNode1);
        return listItem;
    }
}
form1.addEventListener("submit", onSubmit);

//TODO: have tab formatting for the entries