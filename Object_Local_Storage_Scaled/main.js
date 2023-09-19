const myForm=document.getElementById('my-form')
const userList=document.getElementById('users')
myForm.addEventListener('submit',storeLocally)
function storeLocally(e){
    e.preventDefault()
    let nameInput=document.getElementById('name')
    let emailInput=document.getElementById('email')
    let newUser=document.createElement('li')
    newUser.appendChild(document.createTextNode(nameInput.value+":"+emailInput.value))
    userList.appendChild(newUser)
    let userObj={
        username:nameInput.value,
        email:emailInput.value
    }
    let userObj_serialized=JSON.stringify(userObj)
    localStorage.setItem(emailInput.value,userObj_serialized)
    nameInput.value=''
    emailInput.value=''
}