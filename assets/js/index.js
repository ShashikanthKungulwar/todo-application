const delete_button = document.querySelector('a');  //delete tasks button node reference
const checkList = document.querySelectorAll('input[type="checkbox"'); //checklists in the document
let deleteArray = []; //initially the array to store the ids of the checked items
for (let i of checkList) {
    i.addEventListener('change', (event) => {

        //if to add the id to the deletearray
        if (event.target.checked) {
            deleteArray.push(event.target.dataset.id);

            delete_button.href = `/form/delete-items?arr=${deleteArray}`;
        }
        //else to remove the unchecked array
        else {
            const idx = deleteArray.indexOf(event.target.dataset.id);
            if (idx != -1);
            deleteArray.splice(idx, 1);
            delete_button.href = `/form/delete-items?arr=${deleteArray}`;
        }
    })
}