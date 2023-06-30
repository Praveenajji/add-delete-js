//removind element

const trys=document.getElementById('deletes')
trys.addEventListener('click',()=>{
  var text=document.querySelector('h1')
  text.remove()
})


//adding element

const adds=document.getElementById('add')

adds.addEventListener('click',()=>{
  const para=document.createElement('h1')
  const node=document.createTextNode("HI I AM PRAVEEN")
 
  para.appendChild(node)
 
  
  const element=document.getElementById('new')
  element.appendChild(para)
  
})



