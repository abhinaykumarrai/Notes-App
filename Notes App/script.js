const addBtn = document.querySelector('.addNote');
const wrapper = document.querySelector('#wrapper')

const savenotes = () =>{
    const notes = document.querySelectorAll(".notes textarea");
    console.log(notes);
    const data = [];

    notes.forEach((notes)=>{
        data.push(notes.value);
    })
    // console.log(data)
    if(data.length===0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
}

addBtn.addEventListener('click',function(){
    addNotes();
});



// {/* <div class="notes">
// <div class="tool">
//    <img src="./img/save.png" width="25px" height="25px" alt="">
//    <img src="./img/delete_565491.png" width="25px" height="25px" alt="">
// </div>

// <textarea></textarea>

// </div> */}


const addNotes = (text = "") =>{
    const notes = document.createElement("div");
    notes.classList.add("notes");
    notes.innerHTML = `<div class="tool">
    <img src="./img/save.png" class="save" width="25px" height="25px" alt="">
    <img src="./img/delete_565491.png" class="remove" width="25px" height="25px" alt="">
 </div>
 
 <textarea>${text}</textarea>`;


 notes.querySelector(".remove").addEventListener('click',function(){
      notes.remove();
      savenotes();
 });

 notes.querySelector(".save").addEventListener('click',function(){
      savenotes();
 });

 wrapper.appendChild(notes);
 savenotes();
}

(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if(lsnotes === null){
            addNotes();
        }else{
            lsnotes.forEach(
                (lsnotes) => {
                  addNotes(lsnotes);
                }  
              ) 
        }
       
    }
)()




