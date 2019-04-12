function PizzaOrder() {
  this.pizzas = [];
  this.pizzaId = 0;
}

function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}

PizzaOrder.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza);
};

var newOrder = new PizzaOrder();
var newPizza = new Pizza("Lg", "Pan", "pepperoni", "mushroom", "beef")
