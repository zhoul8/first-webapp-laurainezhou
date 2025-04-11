// Add JavaScript code for your web site here and call it from index.html.
document.getElementsByTagName("ul")



function additem() {
    var li = document.createElement("li");
    var newitem = document.getElementById("to do item")?.value;
    var t = document.createTextNode(newitem);
    li.appendChild(t);
    if (document.getElementById("to do item")?.value === '') {
        alert("write something please");
    }
    else {
        document.getElementById("to do list").appendChild(li);
    }
    document.getElementById("to do item").value = "";
}
