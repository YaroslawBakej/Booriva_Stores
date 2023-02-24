import products from "./storage/products"

let item = [

]

function addItem({ id, name, price, path }) {
    products[id].flag = true
    products[id].color=`vector.png`
    item.push({ id, name, price, path })
}

function updateItem(id) {
    products[id].flag = false
    products[id].color=`icon.png`
    const result = item.filter((el) => el.id !== id)
    item = result
}
export { item, updateItem, addItem }