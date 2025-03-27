const menu = [
    {name: "margherita", price: 20},
    {name: "pepperoni", price: 5},
    {name: "pineapple", price: 25},
    {name: "chicken", price: 10},
];

const cashInRegister = 100;
const nextOrderId = 0;
const orderQueue = [];

const addNewPizza = (newPizza) => {
  menu.push(newPizza);
};

const placeOrder = (pizzaName) => {
    const order = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    cashInRegister += order.price;
    return orderQueue.push({pizza: order, status: "ordered", id: nextOrderId++});
}


const completeOrder = (orderId) => {
    const completedOrder = orderQueue.find(orderedPizza => orderedPizza.id === orderId);
    return completedOrder.status = "completed";
}

addNewPizza({name: "spicy sausage", price: 3})
addNewPizza({name: "bbq chicken", price: 10})
addNewPizza({name: "spicy chicken", price: 15})

console.log(menu);
