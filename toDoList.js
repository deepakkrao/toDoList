const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
function updateTimeDate(){const dt = new Date();
console.log(dt);
document.getElementById('time-date').innerText = dt;}
setInterval(()=>{
  updateTimeDate();
},1000)

item.addEventListener(
    "keyup",
    function(event)
    {
       if(event.key == "Enter") 
      { 
        addToDo(this.value)
        this.value = ""
      }
    }
)
const addToDo = (item) => {
     const listItem = document.createElement("li");
     listItem.innerHTML = `
     ${item} 
     <i>🪁</i>`;
     listItem.addEventListener("click", function(){
      this.classList.toggle("done");
     })
     listItem.querySelector("i").addEventListener("click",
     function(){
      listItem.remove()
     })
     toDoBox.appendChild(listItem)
}
