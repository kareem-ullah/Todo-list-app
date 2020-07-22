var list = document.getElementById("list")


function addTodo() {
    var todo_item = document.getElementById("todo-item");



    var li = document.createElement('li');
    li.setAttribute("class", "lie")

    // li.appendChild(litext)

    var div = document.createElement('div')
    var divtext = document.createTextNode(todo_item.value);
    div.setAttribute("class","divbtn")
    div.appendChild(divtext)

    // delete button

    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("DELETE")
    delbtn.setAttribute("class", "btn")
    delbtn.setAttribute("onclick", "deleteItem(this)")
    delbtn.appendChild(deltext)
    div.appendChild(delbtn)


    //edit button

    var editbtn = document.createElement("button");
    var edittext = document.createTextNode("EDIT");
    editbtn.setAttribute("class", "btn")
    editbtn.appendChild(edittext)
    editbtn.setAttribute("onclick", "editItem(this)")
    div.appendChild(editbtn)


    li.appendChild(div)
    list.appendChild(li)


    todo_item.value = ""

}

function deleteItem(q) {
    q.parentNode.remove()
}

function editItem(q) {
    var val = prompt("enter edit value", q.parentNode.firstChild.nodeValue);
    q.parentNode.firstChild.nodeValue = val;
}



function deleteAll() {
    list.innerHTML = ""
}