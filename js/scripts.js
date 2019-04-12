function PizzaOrder() {
  this.pizzas = [];
  this.pizzaId = 0;
}

function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
  this.addToppings(toppings);
}

Pizza.prototype.addToppings = function(toppings) {
  for (var i = 0; i <= toppings.length -1; i++){
    this.toppings.push(toppings[i]);
  }
}

PizzaOrder.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza);
  this.pizzaId ++;
};


var newOrder = new PizzaOrder();
var newPizza = new Pizza("Lg", "Pan", ["pepperoni", "mushroom"])
