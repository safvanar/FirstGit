//Traversing DOM:
var itemList=document.querySelector('#items') //<ul> element
//Parent Node and Parent Element
// console.log(itemList.parentNode) //gives <div> with id="main"
// itemList.parentNode.style.backgroundColor="lightBlue"
// console.log(itemList.parentElement) //gives <div> with id="main"
// itemList.parentElement.style.backgroundColor="lightGreen"

//Children
// console.log(itemList.childNodes) //NodeList
// console.log(itemList.children) //HTML collections
// console.log(itemList.children[2]) //3rd list item
// itemList.children[1].style.backgroundColor='yellow'

//First child
// console.log(itemList.firstChild) //Gives "text"(for Line Breaks) if there is any line breaks

//First element child
// console.log(itemList.firstElementChild) //Gives first element whether or not line break present
// itemList.firstElementChild.textContent='First item Changed'

//Similar Last Child and Last Element Child

// console.log(itemList.lastChild)
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.style.backgroundColor='lightBlue'

//Siblings

//Next Sibling
// console.log(itemList.nextSibling) //"Text" due to the line break

//Next element sibling
// console.log(itemList.children[1].nextElementSibling) //Next actual element sibling

//previousSibling
// console.log(itemList.previousSibling) //"Text" due to line break
 
//previousElementSibling
// console.log(itemList.previousElementSibling) //<h2> element
// itemList.previousElementSibling.style.color='orange' //Modifies <h2>

//CreateElement
var newDiv=document.createElement('div')
//add class 
newDiv.className='hello'
//add id
newDiv.id='hello1'
//add attribute
newDiv.setAttribute('title','hello div')
var newDivText=document.createTextNode('Hello world')
newDiv.appendChild(newDivText)
var header=document.querySelector('header .container')
var h1=document.querySelector('header h1')
var list=document.querySelector('#items')
var first=document.querySelector('#firstitem')
newDiv.style.fontSize='30px'
header.insertBefore(newDiv,h1)
list.insertBefore(newDiv,first)




