function PizzaOrder() {
  this.pizzas = [];
  this.pizzaId = 0;
  this.orderTotal = 0;
}

function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
  this.addToppings(toppings);
}

PizzaOrder.prototype.pricedPizza = function(newPizza) {
  var pizzaPrice = 0;
  var orderTotal = 0;
  console.log(this.pizzas[0].toppings);
  this.pizzas.map(function() {
    if (newPizza.size === "Small"){
      pizzaPrice += 8
    }else if (newPizza.size === "Medium") {
      pizzaPrice += 12
    }else{pizzaPrice += 14}
    while(newPizza.toppings.length >= 2){
      pizzaPrice += 1.5
      newPizza.toppings.pop()
    }
    orderTotal += pizzaPrice
  })
  this.orderTotal = orderTotal
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
var newPizza = new Pizza("Large", "Pan", ["pepperoni", "mushroom"])
console.log(newOrder.addPizza(newPizza));
console.log(newOrder.pricedPizza(newPizza));
console.log(newOrder);
