// var inp = document.getElementById("display");
// var inval = document.getElementById("ul")

// function addtask(){
//     var li = document.createElement("li");
//     var lival = document.createTextNode(inp.value);
//     li.appendChild(lival);
//     li.appendChild(li);
//     console.log(li ,lival)
// }


var inp = document.getElementById('inp')
var ul = document.getElementById('ul')
function deleteAll(btn) { 

    btn.parentNode.remove()
}
function btnal() {
    ul.innerHTML = '';
}
function lop(btn) {
    btn.parentNode.firstChild.nodeValue = prompt('enter Your Value');   
    // console.log(btn.value)
}
function addtask() {
    var li = document.createElement('li')
    var ilval = document.createTextNode(inp.value)
    li.appendChild(ilval);
    ul.appendChild(li);
    inp.value = "";
    ///delte Work
    var del = document.createElement('button')
    var deltext = document.createTextNode('delete')
    del.appendChild(deltext);
    li.appendChild(del);
    del.setAttribute('class', 'btn')
    del.setAttribute('onclick', 'deleteAll(this)')
    
    var del = document.createElement('button')
    var deltext = document.createTextNode('Edit')
    del.appendChild(deltext);
    li.appendChild(del);
    del.setAttribute('class', 'end')
    del.setAttribute('onclick', 'lop(this)')

}


