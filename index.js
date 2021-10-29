let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('concert-date').value;
    row.insertCell(1).innerHTML = document.getElementById('headliner').value;
    row.insertCell(2).innerHTML = document.getElementById('opener').value;
    row.insertCell(3).innerHTML = document.getElementById('venue').value;
    row.insertCell(4).innerHTML = document.getElementById('city').value;
    row.insertCell(5).innerHTML = document.getElementById('state').value;
    let actions = row.insertCell(6);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('headliner').value = '';
    document.getElementById('opener').value = ''; 
    document.getElementById('venue').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
});

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = "btn btn-primary";
    btn.id = id;
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);    
    };
    return btn;
}