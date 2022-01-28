// javascript

const addItem = document.getElementById('addBtn')
<<<<<<< HEAD
const list = document.getElementsByClassName('list-container')[0]

let listOfItems = ""
let arrayOfItems = []
// new list to keep track of marked items
let doneList = []

function updateItemtoDom(){
    listOfItems = ""
    arrayOfItems.map(data=>{
            // if any item in arrayOfItems match items in done list different generated html
            if(doneList.includes(arrayOfItems.indexOf(data))){
                listOfItems +=`
                    <div class="list-item">
                        <div class='task-container toggle-done'>${data}</div>
                        <div class="btn-container">
                            <div class="del">-</div>
                            <div class="cross">✓</div>
                        </div>
                    </div>
                    `
            }else{
                listOfItems +=`
                    <div class="list-item">
                        <div class='task-container'>${data}</div>
                        <div class="btn-container">
                            <div class="del">-</div>
                            <div class="cross">✓</div>
                        </div>
                    </div>
                    `
            }
   })  
    console.log(doneList)
    list.innerHTML = listOfItems

    del()
    cross()
=======
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
    
   
>>>>>>> 4f6fd928f6ea87e5548c643625d876d5834c6784
}


addItem.addEventListener('click', ()=>{
    let getValue = document.getElementById('addItemText')
    if(getValue.value !== " "){
<<<<<<< HEAD
        arrayOfItems.push(getValue.value)
        updateItemtoDom()
    }
    del()
    cross()
})




function del(){
    const delItem = document.getElementsByClassName('del')
    
    let convertArray = Array.from(delItem)
   
    convertArray.map((el,index) => {
           
        delItem[index].addEventListener('click', function(event){

            arrayOfItems.splice(convertArray.indexOf(event.target),1)
            convertArray.splice(convertArray.indexOf(event.target),1)
            doneList.splice(convertArray.indexOf(event.target),1)
            updateItemtoDom()
            
            del()
        })  
    });
       
}

function cross(){
    const crsItem = document.getElementsByClassName('cross')
    
    let convertArrCrs = Array.from(crsItem)
    
    convertArrCrs.map((el,index)=>{
        
        crsItem[index].addEventListener('click', function(event){
            
            let getStrikeItem = document.getElementsByClassName("task-container")
            getStrikeItem[convertArrCrs.indexOf(event.target)].classList.toggle('toggle-done')
            // getting index of done and adding it to array for ref
            if(doneList.includes(convertArrCrs.indexOf(event.target))){
                doneList.splice(doneList.indexOf(convertArrCrs.indexOf(event.target)),1)
            }else if(!doneList.includes(convertArrCrs.indexOf(event.target))){
                doneList.push(convertArrCrs.indexOf(event.target))
            }

            updateItemtoDom()
            
            cross()
        })
    })
}
=======
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

>>>>>>> 4f6fd928f6ea87e5548c643625d876d5834c6784
