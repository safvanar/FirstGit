const myForm=document.getElementById('my-form')
myForm.addEventListener('submit',onSubmit)
function onSubmit(e){
    e.preventDefault()
    let nameInput=document.getElementById('name').value
    let emailInput=document.getElementById('email').value
    let myObj={
        name:nameInput,
        email:emailInput
    };
    let myObj_serialized=JSON.stringify(myObj)
    localStorage.setItem("myObj",myObj_serialized)
    let myObj_deserialized=JSON.parse(localStorage.getItem("myObj"))
    console.log(myObj_deserialized)
}