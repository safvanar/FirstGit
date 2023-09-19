const form=document.querySelector("#my-form")
const msg=document.querySelector(".msg")
form.addEventListener('submit',storeLocal)
function storeLocal(e){
    e.preventDefault()
    var nameInput=document.getElementById('name')
    var emailInput=document.getElementById('email')
    if(nameInput.value===''||emailInput.value===''){
        msg.classList.add('error')
        msg.innerHTML='Enter all fields!'
        setTimeout(()=>msg.remove(),3000)
    }else{
        localStorage.setItem("User Details",nameInput.value+":"+emailInput.value)
    }
    nameInput.value=''
    emailInput.value=''
}