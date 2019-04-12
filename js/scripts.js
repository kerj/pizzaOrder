function PizzaOrder() {
  this.pizzas = [];
  this.orderTotal = 0;
}

PizzaOrder.prototype.finalizeOrder = function() {
  for (var i = 0; i <= this.pizzas.length -1; i++) {
    this.orderTotal += this.pizzas[i].pricePer;
  }
  return this.orderTotal
}

function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
  this.pricePer = 0;
  this.pizzaId = 0;
  this.addToppings(toppings);
}

Pizza.prototype.addToppings = function(toppings) {
  this.pizzaId += newOrder.pizzas.length
  for (var i = 0; i <= toppings.length -1; i++){
    this.toppings.push(toppings[i]);
  }
  this.addPizza();
}

Pizza.prototype.pricedPizza = function() {
  for (var i=0; i <= this.pizzaId; i++){
    this.pricePer = 0;
    var pizzasPrice = this.pricePer
    if (this.crust != "Hand-tossed"){
      pizzasPrice += 1;
    }
    if (this.size === "Small"){
      pizzasPrice += 8;
    }else if (this.size === "Medium") {
      pizzasPrice += 12;
    }else{pizzasPrice += 14}
    if (this.toppings.length >= 2) {
      pizzasPrice -= 1.5;
      this.toppings.forEach(function() {
        pizzasPrice += 1.5;
      })
    }
    this.pricePer += pizzasPrice;
  }
}

Pizza.prototype.addPizza = function () {
  newOrder.pizzas.push(this);
  this.pricedPizza()
};

var newOrder = new PizzaOrder();
var newPizza = new Pizza("Large", "Pan", ["pepperoni", "mushroom", "Bell pepper", "Extra-Cheese", "pepperoni", "Extra-Cheese", "Mushroom", "Pineapple"])
var newPizza2 = new Pizza("Large", "Pan", ["pepperoni", "Extra-Cheese"])
var newPizza3 = new Pizza("Medium", "Thin", ["Mushroom", "Pineapple"])
