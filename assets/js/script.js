/*
window.addEventListener('DOMContentLoaded', () => {
    let userName = localStorage.getItem("username")
})
*/
function toggleImage() {
    let detectiveImg = document.querySelector('.detective-wrapper');
    let list = document.querySelectorAll('.task-container');

    if (list.length === 0) {
        detectiveImg.classList.remove('hidden');
    } else {
        detectiveImg.classList.add('hidden');
    }

}

//This part is how user adds tasks

let task = document.getElementById('taskInput');
let submit = document.getElementById('addBtn');

submit.addEventListener('click', function () {
    if (task.value.trim() === '') {
        return;
    }

    addTask();
})

//        main function to add task        //

function addTask() {
    let taskLi = document.createElement('li');
    taskLi.classList.add('task-li');
    taskLi.textContent = task.value;
    let tasksList = document.querySelector('.tasks');
    tasksList.prepend(taskLi);
    //To add checkbox
    let checkbox = document.createElement('span');
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('click', function () {
        if (!checkbox.classList.contains('checked')) {
            checkbox.classList.add('checked');
        } else {
            checkbox.classList.remove('checked');
        }

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

        saveEdit.addEventListener('click', () => {
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

    //tasksList = document.querySelector('.tasks');
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


//     Toggle Mood  //

function toggleMood() {
    let darkMood = document.getElementById('darkMood');
    let lightMood = document.getElementById('lightMood');

    lightMood.addEventListener('click', () => {
        document.body.classList.toggle('dark-mood');
        lightMood.style.display = 'none';
        darkMood.style.display = 'flex';
    })
    darkMood.addEventListener('click', () => {
        document.body.classList.toggle('dark-mood');
        darkMood.style.display = 'none';
        lightMood.style.display = 'flex';
    })
}

toggleMood();

// Toggle actions //
function showToggleMenu() {
    let toggleBtn = document.querySelector('.dropdowntoggle');
    toggleBtn.addEventListener('click', () => {
        let dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.style.display = 'flex';
    })
}






