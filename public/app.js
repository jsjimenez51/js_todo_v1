const list = document.querySelector('.todos');
const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');

// Add New To Do Functionality

const generateTemplate = todo => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html // inserts new html into body instead of replacing
};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const newToDo = addForm.add.value.trim(); //removes white spaces of <string>
   
    if (newToDo.length) {
        generateTemplate(newToDo);
        addForm.reset(); // resets all input fields on form
    };
});


// Delete To Do Functionality
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});


// search list Functionality *keyup event*
const todoFilter = (entry) => {
    
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(entry))
        .forEach(todo => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(entry))
        .forEach(todo => todo.classList.remove('filtered'))
};

search.addEventListener('keyup', () => {
    const entry = search.value.trim().toLowerCase(); //grabs search input and trims
    todoFilter(entry);
});


