var form=document.getElementById("addForm")
var itemList=document.getElementById('items')
var filter=document.getElementById('filter')
filter.addEventListener('keyup',filterItem)
form.addEventListener('submit',addItem)


//addItem function
function addItem(e){
    e.preventDefault()
    //Get input value
    var newItem=document.getElementById("item").value
    //Get input description
    var newDesc=document.getElementById("description").value
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
    //add new item as li element text node
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode("  "+newDesc))
    //adding edit and delete buttons to the new li element
    li.appendChild(edBtn)
    li.appendChild(delBtn)
    
    //adding li element to the list element
    itemList.appendChild(li)
    //e.target.firstElementChild.value=''
    document.getElementById("item").value=''
}

function filterItem(e){
    var text=e.target.value.toLowerCase()
    var items=itemList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent.toLowerCase()
        var itemDesc=item.childNodes[1].textContent.toLowerCase()
        if(itemName.indexOf(text)!=-1 || itemDesc.indexOf(text)!=-1){
            item.style.display='block'
        }else{
            item.style.display='none'
        }
    })
}
