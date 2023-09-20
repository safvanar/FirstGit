const myForm=document.getElementById('my-form')
const itemList=document.getElementById('userList')
myForm.addEventListener('submit',storeLocal)
function storeLocal(e){
    e.preventDefault()
    let nameInput=document.getElementById('name').value
    let emailInput=document.getElementById('email').value
    let userObj={
        name:nameInput,
        email:emailInput
    }
    let userObj_serialized=JSON.stringify(userObj)
    localStorage.setItem(emailInput,userObj_serialized)
    let newUser=document.createElement('li')
    newUser.innerHTML=`${nameInput}:${emailInput}`
    let delBtn=document.createElement('button')
    delBtn.innerText="Delete"
    let edBtn=document.createElement('button')
    edBtn.innerText="Edit"
    delBtn.addEventListener('click',removeItem)
    edBtn.addEventListener('click',editItem)
    function removeItem(delEvent){
        let emailToRemove = delEvent.target.parentElement.firstChild.textContent.split(':')[1]
        emailToRemove = emailToRemove.trim()
        localStorage.removeItem(emailToRemove)
        itemList.removeChild(newUser)
    }
    function editItem(edEvent){
        let nameUpdate=edEvent.target.parentElement.firstChild.textContent.split(':')[0]
        nameUpdate=nameUpdate.trim()
        let emailToRemove = edEvent.target.parentElement.firstChild.textContent.split(':')[1]
        emailToRemove = emailToRemove.trim()
        localStorage.removeItem(emailToRemove)
        itemList.removeChild(newUser)
        document.getElementById('name').value=nameUpdate
        document.getElementById('email').value=emailToRemove
    }
    newUser.appendChild(delBtn)
    newUser.appendChild(edBtn)
    itemList.appendChild(newUser)
    myForm.reset()
}