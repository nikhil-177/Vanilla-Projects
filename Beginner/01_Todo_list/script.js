let items = JSON.parse(localStorage.getItem('items')) || [];
const itemList = document.getElementById("itemList");

function renderItems() {
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            items.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(items));
            renderItems();
        };
        li.appendChild(deleteBtn);
        itemList.appendChild(li);
    });
}

const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
    const newItem = text.value;
    if (newItem) {
        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));
        text.value = '';
        renderItems();
    }
});

renderItems();
