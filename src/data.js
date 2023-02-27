import products from "./storage/products"

let item = [

]

function addItem({ id, name, price, path }) {
    products[id].flag = true
    item.push({ id, name, price, path })
    products[id].color=`icon.png`
}

function updateItem(id) {
    products[id].color=`vector.png`
    products[id].flag = false
    const result = item.filter((el) => el.id !== id)
    item = result
}
export { item, updateItem, addItem }