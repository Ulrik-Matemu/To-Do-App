document.getElementById('addTaskButton').addEventListener('click', addTask);

// Load tasks form local storage when page is loaded
document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);

function addTask() {
    console.log("Clicked");
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = createTaskElement(taskText);

        taskList.appendChild(taskItem);

        //Save task to local storage
        saveTasksToLocalStorage(taskText);

        taskInput.value = '';

        
    } else {
        alert('Please enter a task!');
    }
}

function createTaskElement(taskText) {
    const taskItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', 
        function () {
            let deleteConfirmation = confirm("Are you sure you want to delete task?");

            if (deleteConfirmation) {
                taskItem.remove();
            deleteTaskFromLocalStorage(taskText);
            } else {
                alert('Delete Canceled');
            }
            
        }
    );

    taskSpan.addEventListener('click', 
        function () {
            taskItem.classList.toggle('completed');
        }
    );

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

function saveTasksToLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskList = document.getElementById('taskList');

    tasks.forEach(taskText => {
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
    });
}


function deleteTaskFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Random Quote Generator.
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Do not watch the clock; do what it does. Keep going. - Sam Levenson",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "If at first you don’t succeed, then skydiving definitely isn’t for you. - Steven Wright",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Life is like a sewer... what you get out of it depends on what you put into it. - Tom Lehrer",
    "Opportunity is missed by most people because it is dressed in overalls and looks like work. - Thomas Edison",
    "The road to success is dotted with many tempting parking spaces. - Will Rogers",
    "Even if you are on the right track, you’ll get run over if you just sit there. - Will Rogers",
    "A diamond is merely a lump of coal that did well under pressure. - Unknown",
    "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily. - Zig Ziglar",
    "The elevator to success is out of order. You’ll have to use the stairs, one step at a time. - Joe Girard",
    "I am so clever that sometimes I don’t understand a single word of what I am saying. - Oscar Wilde",
    "Age is of no importance unless you’re a cheese. - Billie Burke",
    "I always wanted to be somebody, but now I realize I should have been more specific. - Lily Tomlin",
    "If you think you are too small to make a difference, try sleeping with a mosquito. - Dalai Lama",
    "I have not failed. I’ve just found 10,000 ways that won’t work. - Thomas Edison",
    "Life is short, smile while you still have teeth. - Unknown",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "You can’t have everything. Where would you put it? - Steven Wright",
    "The best way to cheer yourself up is to try to cheer somebody else up. - Mark Twain"
  ];
  
  

document.getElementById('addTaskButton').addEventListener('click', () => {
    displayRandomQuote();
});


function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

setInterval(displayRandomQuote, 10000);
