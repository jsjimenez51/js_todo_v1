const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html
};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const newToDo = addForm.add.value.trim(); //removes white spaces of <string>
   
    if (newToDo.length) {
        generateTemplate(newToDo);
        addForm.reset();
    };
});