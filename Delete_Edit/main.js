var form=document.getElementById("addForm")
var itemList=document.getElementById("items")
var filter=document.getElementById("filter")
//Form submit event
form.addEventListener('submit',addItem)
//delete event
itemList.addEventListener('click',removeItem)
//filter event
filter.addEventListener('keyup',filterItems)

//addItem function
function addItem(e){
    e.preventDefault()
    //Get input value
    var newItem=document.getElementById("item").value
    //create new li element
    var li=document.createElement('li')
    //adding class name like other li elements
    li.className="list-group-item"
    //create new button element
    var delBtn=document.createElement('btn')
    //add all classes like del buttons of other list items
    delBtn.className="btn btn-danger btn-sm float-right delete"
    //add text node to button
    delBtn.appendChild(document.createTextNode('X'))
    //create new button(edit)
    var edBtn=document.createElement('btn')
    //add all classes like edit buttons of other list items
    edBtn.className="btn btn-success btn-sm float-right"
    //add text node to button
    edBtn.appendChild(document.createTextNode('Edit'))
    //adding edit and delete buttons to the new li element
    li.appendChild(edBtn)
    li.appendChild(delBtn)
    //add new item as li element text node
    li.appendChild(document.createTextNode(newItem))
    
    //adding li element to the list element
    itemList.appendChild(li)
    //e.target.firstElementChild.value=''
    document.getElementById("item").value=''
}

//removeItem function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentNode
            itemList.removeChild(li)
        }
    }
}

//filterItem function
function filterItems(e){
    //convert text to lower case
    var text=e.target.value.toLowerCase()
    //Get list
    var items=itemList.getElementsByTagName('li')
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'
        }else{
            item.style.display='none'
        }
    })
}
