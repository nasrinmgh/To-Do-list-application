window.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    savedTasks.forEach(taskText => {
        task.value = taskText;
        addTask();
    });
});

function toggleImage() {
    const detectiveImg = document.querySelector('.detective-wrapper');
    const list = document.querySelectorAll('.task-container');

    if (list.length === 0) {
        detectiveImg.classList.remove('hidden');
    } else {
        detectiveImg.classList.add('hidden');
    }

}

//This part is how user adds tasks

const task = document.getElementById('taskInput');
const submit = document.getElementById('addBtn');

submit.addEventListener('click', function () {
    if (task.value.trim() === '') {
        return;
    }

    addTask();
})

//        main function to add task        //

function addTask() {
    const taskLi = document.createElement('li');
    taskLi.classList.add('task-li');
    taskLi.textContent = task.value;
    const tasksList = document.querySelector('.tasks');
    tasksList.append(taskLi);
    saveTasks();

    //To add checkbox
    const checkbox = document.createElement('span');
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
        const editInput = document.createElement('input');
        editInput.classList.add('edit-input');
        editInput.type = 'text';
        const taskNode = taskContainer.childNodes[1];
        editInput.value = taskNode.textContent;
        const currentInput = taskContainer.querySelector('input');

        if (currentInput) {
            currentInput.focus();
            return;
        }
        taskNode.replaceWith(editInput);
        const saveEdit = document.createElement('button');
        saveEdit.classList.add('save-edit');
        saveEdit.textContent = 'save';
        editPen.replaceWith(saveEdit);
        taskContainer.append(saveEdit);

        saveEdit.addEventListener('click', () => {
            taskLi.prepend(currentInput);
            saveTasks();
            
        })
    }

//To add trash bin
    const trashBin = document.createElement('span')
    trashBin.innerHTML = '<i class="fa-regular fa-trash trash-icon"></i>';
    trashBin.addEventListener('click', () => {
        const confirmBox = document.querySelector('.confirm-wrapper');
        confirmBox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        const confirmDel = document.getElementById('delBtn');
        const cancelDel = document.getElementById('cancelBtn');

        confirmDel.onclick = () => {
            taskContainer.remove();
            toggleImage();
            confirmBox.style.display = 'none';
            document.body.style.overflow = 'auto';
            saveTasks();
        };

        cancelDel.onclick = () => {
            confirmBox.style.display = 'none';
            document.body.style.overflow = 'auto';

        };
    })

//To add edit icon
    const editPen = document.createElement('span');
    editPen.innerHTML = '<i class="fa-regular fa-pen-nib edit-pen"></i>';
    editPen.addEventListener('click', () => {
        editTask(taskContainer);
        editPen.replaceWith(saveEdit);
        checkbox.append(editInput);
    })

    // For CSS style
    const actionsWrapper = document.createElement('div');
    actionsWrapper.classList.add('actions-wrapper');
    actionsWrapper.append(trashBin);
    actionsWrapper.append(editPen);

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.prepend(checkbox);
    taskContainer.append(taskLi);
    taskContainer.append(actionsWrapper);

    tasksList.appendChild(taskContainer);
    toggleImage();
    task.value = '';

    // Local storage //
    function saveTasks() {
    const allTasks = document.querySelectorAll('.task-li');
    const tasksArr = [];
    allTasks.forEach(task => tasksArr.push(task.textContent));
    localStorage.setItem('myTasks', JSON.stringify(tasksArr));
}

}

//        Main add task function ends       //


//     Toggle Mood  //

function toggleMood() {
    const darkMood = document.getElementById('darkMood');
    const lightMood = document.getElementById('lightMood');
    const darkImage = document.getElementById('darkDetective');
    const lightImage = document.getElementById('detective');

    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mood');
        lightMood.style.display = 'flex';
        darkMood.style.display = 'none';
        lightImage.style.display = 'none';
        darkImage.style.display = 'block';
    }

    darkMood.addEventListener('click', () => {
        document.body.classList.toggle('dark-mood');
        lightMood.style.display = 'flex';
        darkMood.style.display = 'none';
        lightImage.style.display = 'none';
        darkImage.style.display = 'block';
         localStorage.setItem('darkMode', true);
    })
    lightMood.addEventListener('click', () => {
        document.body.classList.toggle('dark-mood');
        darkMood.style.display = 'flex';
        lightMood.style.display = 'none';
        lightImage.style.display = 'block';
        darkImage.style.display = 'none';
        darkImage.style.display = 'none';
        localStorage.setItem('darkMode', false);
    })
}

toggleMood();

// Toggle actions //
function showToggleMenu() {
    const toggleBtn = document.querySelector('.dropdowntoggle');
    toggleBtn.addEventListener('click', () => {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.style.display = 'flex';
    })
}






