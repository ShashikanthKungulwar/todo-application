const delete_button=document.querySelector('a');

const checkList=document.querySelectorAll('input[type="checkbox"');
let deleteArray=[];
// delete_button.href=`/form/delete-items?arr=${deleteArray}`;
for(let i of checkList)
{
    i.addEventListener('change',(event)=>{
        if(event.target.checked)
        {
            deleteArray.push(event.target.dataset.id);

            delete_button.href=`/form/delete-items?arr=${deleteArray}`;
        }
    })
}