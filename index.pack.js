// javascript

const addItem = document.getElementById('addBtn')
const delItem = document.getElementById('')
const list = document.getElementsByClassName('list-container')[0]
let listOfItems = ""
function addItemtoDom(item){
   
      listOfItems +=`
      <div class="list-item">
            <div class='task-container'>${item}</div>
            <div class="btn-container">
                <button class="del" onClick="del()">-</button>
                <button class="cross" onClick="cross()">✓</button>
            </div>
       </div>
      `
  
    list.innerHTML = listOfItems
    
   
}


addItem.addEventListener('click', ()=>{
    let getValue = document.getElementById('addItemText')
    if(getValue.value !== " "){
        addItemtoDom(getValue.value)
    }

    console.log(list);
    
})

// index plz
delItem.addEventListener('click', ()=>{

})


function del(){
    document.getElementById("test").remove();
}

function cross(){
    document.getElementById("test").style.textDecoration = "line-through";
}

