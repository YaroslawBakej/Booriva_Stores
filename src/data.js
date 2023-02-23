let item = [
    
]

function addItem({ id, name, price, path }){
item.push({ id, name, price, path })
console.log(item);
}

function updateItem(id){
    console.log(id);
    const result = item.filter((el)=>el.id!==id)
    item=result
    console.log(item);
}
export {item, updateItem, addItem}