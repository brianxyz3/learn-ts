let cashInRegister: number = 100;
let nextOrderId: number = 1;
let nextPizzaId: number = 1;
const orderHistory: Order[] = [];


interface Pizza {
    readonly id: number
    name: string
    price: number
}

interface Status { status: "ordered" | "completed"};


type Order = {
    pizza: Pizza
    // both code logic for writing type property works.
    // status: "ordered" | "completed"
    id: number
    // getCoupon(couponName: string): number
} & Status

// OR

// interface Order extends Status {
//     pizza: Pizza
//     id: number
// }

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "margherita", price: 20},
    { id: nextPizzaId++, name: "pepperoni", price: 5},
    { id: nextPizzaId++, name: "pineapple", price: 25},
    { id: nextPizzaId++, name: "chicken", price: 10},
];

// type User = {
//     id: number
//     name: string
//     age: number
// }
// const users: User[] = [{id:1, name: "dave", age: 20}, {id:2, name:"kate", age: 28}];
// function updateUser(id:  number, updates: Partial<User>) {
//     const user = users.find(user => user.id === id);
//     if(!user) return;
//     const updatedUser = {...user, ...updates};
//     return updatedUser;
// }


const addToArray = <Type>(array: Type[], item: Type): Type[] => {
    array.push(item);
    return array;
}

addToArray<Order>(orderHistory, {
    pizza: menu[1],
    status: "completed",
    id: 1
})

const getPizzaDetail = (identifier: string | number):Pizza  => {
    // typeof identifier === "string" ?
    // menu.find(item => item.name === identifier)
    // : menu.find(item => item.id === identifier);
    if (typeof identifier === "string") {
        const pizza = menu.find(item => item.name.toLowerCase() === identifier.toLowerCase());
        if(!pizza) {
            throw new Error("Item not found")
        }
        return pizza;
    } else if(typeof identifier === "number") {
        const pizza = menu.find(item => item.id === identifier);
        if (!pizza) {
            throw new Error("Item not found")
        }
        return pizza;
    } else {
        throw new TypeError("Parameter must be either a 'string' or a 'number'");
    }
};

const addNewPizza = (pizzaObj: Omit<Pizza, "id">): Pizza => {
    const newPizza: Pizza = { 
        ...pizzaObj,
        id: nextPizzaId++ 
    };
    menu.push(newPizza);
    return newPizza;
};

const placeOrder = (pizzaName: string): Array<Order> | undefined => {
    const order = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if(!order) {
        console.error(pizzaName + " " + "is not available");
        return;
    }
    cashInRegister += order.price;
    const newOrder: Order = { pizza: order, status: "ordered", id: nextOrderId++ }
    orderHistory.push(newOrder);        
    return orderHistory;
}


const completeOrder = (orderId: number): void => {
    const completedOrder = orderHistory.find(orderedPizza => orderedPizza.id === orderId);
    if(!completedOrder) return console.error(`${orderId} does not exist`);
    completedOrder.status = "completed";
    return;
}

addNewPizza({name: "spicy sausage", price: 3})
addNewPizza({name: "bbq chicken", price: 10})
addNewPizza({name: "spicy chicken", price: 15})

completeOrder(1);
console.log(menu);


export {};