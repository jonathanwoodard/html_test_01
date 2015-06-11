function insert()
{
    var task= document.querySelector("[type=text]").value;
    var li = document.createElement("li");
    li.innerHTML= task;
    li.onclick = function() {this.parentNode.removeChild(this);}
    document.querySelector("#toDoList").appendChild(li);
    document.querySelector("[type=text]").value= "";
}
