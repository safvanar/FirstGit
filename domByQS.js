// var titles=document.querySelectorAll('.title')
// console.log(titles)
// titles[0].style.color='red'
var items=document.querySelectorAll('li')
items[1].style.color='green'
var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}

