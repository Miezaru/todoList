'use strict';

const inputElement = document.querySelector('#input');
const ulElement = document.querySelector('#list');
const actionPanel1 = document.querySelector('#actionPanel1');
const actionPanel2 = document.querySelector('#actionPanel2');

let todoList = [];
actionPanel2.style.display = 'none';

inputElement.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.keyCode === 13) && inputElement.value) {
    todoList.unshift({
      content: inputElement.value,
      done: false,
      selected: false,
    });
    inputElement.value = '';

    upgradeView();
  }
});

function upgradeView() {
  ulElement.innerHTML = '';

  // for (const todoItem of todoList) {
  for (let index = 0; index < todoList.length; index++) {
    const todoItem = todoList[index];

    const liElement = document.createElement('li');
    liElement.className = 'list-group-item';
    ulElement.append(liElement);

    const divElement = document.createElement('div');
    divElement.className = 'form-group form-check';
    liElement.append(divElement);

    const checkboxElement = document.createElement('input');
    divElement.append(checkboxElement);
    checkboxElement.type = 'checkbox';
    checkboxElement.className = 'form-check-input';
    checkboxElement.id = 'todoItem' + index;
    checkboxElement.checked = todoItem.selected;

    const labelElement = document.createElement('label');
    divElement.append(labelElement);
    labelElement.className = 'form-check-label';
    if (todoItem.done) {
      labelElement.className += ' todoDone';
    }
    labelElement.setAttribute('for', 'todoItem' + index);
    labelElement.innerText = todoItem.content;

    if (!todoItem.done) {
      const buttonDoneElement = document.createElement('button');
      divElement.append(buttonDoneElement);
      buttonDoneElement.type = 'button';
      buttonDoneElement.className = 'btn btn-outline-primary float-right';
      buttonDoneElement.innerHTML = 'Done';

      buttonDoneElement.addEventListener('click', () => {
        todoItem.done = !todoItem.done;

        upgradeView();
      });
    } else {
      const buttonRemoveElement = document.createElement('button');
      divElement.append(buttonRemoveElement);
      buttonRemoveElement.type = 'button';
      buttonRemoveElement.className = 'btn btn-outline-danger float-right';
      buttonRemoveElement.innerHTML = 'Remove';

      buttonRemoveElement.addEventListener('click', () => {
        todoList = todoList.filter(
          currentTodoItem => currentTodoItem !== todoItem
        );

        upgradeView();
      });
    }

    checkboxElement.addEventListener('change', () => {
      todoItem.selected = checkboxElement.checked;
    });
  }

  const someSelected = todoList.some(todoItem => todoItem.selected);
  if (someSelected) {
    actionPanel1.style.display = 'none';
    actionPanel2.style.display = 'block';
  } else {
    actionPanel1.style.display = 'flex';
    actionPanel2.style.display = 'none';
  }
}

// MVC
// Model = данные
// View = вид, отображение, представление
// Controller = управление, манипуляция

document.querySelector('#test').addEventListener('click', () => {
  for (const todoItem of todoList) {
    todoItem.selected = true;
  }

  upgradeView();
});

document.querySelector('#doneAction').addEventListener('click', () => {
  for (const todoItem of todoList) {
    if (todoItem.selected) {
      todoItem.done = true;
      todoItem.selected = false;
    }
  }

  upgradeView();
});

document.querySelector('#restoreAction').addEventListener('click', () => {
  for (const todoItem of todoList) {
    if (todoItem.selected) {
      todoItem.done = false;
      todoItem.selected = false;
    }
  }

  upgradeView();
});

document.querySelector('#removeAction').addEventListener('click', () => {
  todoList = todoList.filter(todoItem => !todoItem.selected);

  upgradeView();
});

var asdasda = 20;
function setto() {
  console.log('cream');
}
let a = 33;
