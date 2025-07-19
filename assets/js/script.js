/*let savedName = localStorage.getItem(userName);
if (!savedName) {
    document.getElementById('nameForm').style.display = 'block';
} else {
    greeting(savedName);
}
function greeting() {
    let getName = document.getElementById('userName');
    let date = new Date();
    if (date < )
    console.log(`Dear ${getName}`);
}*/

function toggleImage() {
    let detectiveImg = document.querySelector('.detective-wrapper');
    let list = document.querySelectorAll('.task-container');

     if (list.length === 0) {
          detectiveImg.classList.remove('hidden');
        } else {
         detectiveImg.classList.add('hidden');
         //list.replaceWith(detectiveImg);
        }
     
      }

//This part is how user adds tasks

let task = document.getElementById('taskInput');
let submit = document.getElementById('addBtn');

submit.addEventListener('click', function() {
  if (task.value.trim() === '') {
    return;
  } else {
    addTask();
  };
})

                    //        main function to add task        //

 function addTask() {
  let taskLi = document.createElement('li');
  taskLi.classList.add('task-li');
  taskLi.textContent = task.value;
  //To add checkbox
  let checkbox = document.createElement('span');
 checkbox.classList.add('checkbox'); 
  checkbox.addEventListener('click',  function() {
  if (!checkbox.classList.contains('checked')) {
    checkbox.classList.add('checked');
  } else {
    checkbox.classList.remove('checked');
  };
});

   //  Edit function   //
function editTask(taskContainer) { 
 let editInput = document.createElement('input');
 editInput.classList.add('edit-input');
 editInput.type = 'text';
 let taskNode = taskContainer.childNodes[1];
 editInput.value = taskNode.textContent;
let currentInput = taskContainer.querySelector('input');

        if (currentInput) {
           currentInput.focus();
             return;
          }
 taskNode.replaceWith(editInput);
     let saveEdit = document.createElement('button');
 saveEdit.classList.add('save-edit');
 saveEdit.textContent = 'save';
 editPen.replaceWith(saveEdit);
    taskContainer.append(saveEdit);

    saveEdit.addEventListener('click',() => {
        taskLi.prepend(currentInput);
    })
}

//To add trash bin
 let trashBin = document.createElement('span')
  trashBin.innerHTML = '<i class="fa-regular fa-trash trash-icon"></i>';
  trashBin.addEventListener('click', () => {
    let confirmBox = document.querySelector('.confirm-wrapper');
      confirmBox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      let confirmDel = document.getElementById('delBtn');
      let cancelDel = document.getElementById('cancelBtn');

      confirmDel.onclick = () => {
        taskContainer.remove();
        toggleImage();
        confirmBox.style.display = 'none';
        document.body.style.overflow = 'auto';

      };

      cancelDel.onclick = () => {
        confirmBox.style.display = 'none';
        document.body.style.overflow = 'auto';

      };
  })

//To add edit icon
let editPen = document.createElement('span');
editPen.innerHTML = '<i class="fa-regular fa-pen-nib edit-pen"></i>';
editPen.addEventListener('click', () => {
   editTask(taskContainer);
   editPen.remove();
})

   // For CSS style
  let actionsWrapper = document.createElement('div');
   actionsWrapper.classList.add('actions-wrapper');
   actionsWrapper.append(trashBin);
   actionsWrapper.append(editPen);
  
  let taskContainer = document.createElement('div');
   taskContainer.classList.add('task-container');
   taskContainer.prepend(checkbox);
   taskContainer.append(taskLi);
   taskContainer.append(actionsWrapper);

    let tasksList = document.querySelector('.tasks');
         tasksList.appendChild(taskContainer);
         toggleImage();
           task.value = '';

  // Local storage //
     // let taskText = taskLi.textContent;
   let allTasks = document.querySelectorAll('.task-li');
   localStorage.getItem('myTasks', JSON.stringify(allTasks));
   let savedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
   console.log(savedTasks);




   }

                //        Main add task function ends       //
   

    
  


    




