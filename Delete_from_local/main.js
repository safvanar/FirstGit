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
    delBtn.addEventListener('click',removeItem)
    function removeItem(event){
        let emailToRemove = event.target.parentElement.firstChild.textContent.split(':')[1]
        emailToRemove = emailToRemove.trim()
        localStorage.removeItem(emailToRemove)
        itemList.removeChild(newUser)
    }
    newUser.appendChild(delBtn)
    itemList.appendChild(newUser)
    myForm.reset()
}