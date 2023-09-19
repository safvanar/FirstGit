var itemList=document.getElementById('items')
var filter=document.getElementById('filter')
filter.addEventListener('keyup',filterItem)

function filterItem(e){
    var text=e.target.value.toLowerCase()
    var items=itemList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent.toLowerCase()
        if(itemName.indexOf(text)!=-1){
            item.style.display='block'
        }else{
            item.style.display='none'
        }
    })
}
