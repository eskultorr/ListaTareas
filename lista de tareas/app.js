var inputBox = document.querySelector("#inputBox");
var list = document.querySelector("#list");

inputBox.addEventListener("keyup", function(event)
{
    if(event.key == 'Enter')
    {
        addItem(this.value);
        this.value = '';
    }
})

var addItem = (inputBox)=>
{
    var listItem = document.createElement("li");
    listItem.innerHTML = `${inputBox} <i></i>`;
    //añadir a la lista
    listItem.addEventListener("click", function()
    {
        this.classList.toggle('done');
    })
    //eliminar la list
    listItem.querySelector("i").addEventListener("click",function()
    {
        listItem.remove();
    })
    list.appendChild(listItem);
}