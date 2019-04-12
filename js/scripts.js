function PizzaOrder() {
  this.pizzas = [];
  this.orderTotal = 0;
}

PizzaOrder.prototype.finalizeOrder = function() {
  if (newOrder.pizzas.length > 0){
    for (var i = 0; i <= this.pizzas.length -1; i++) {
      this.orderTotal += this.pizzas[i].pricePer;
    }
    return this.orderTotal
  }else{}
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
  for (var i = 0; i <= toppings.length-1; i++){
    this.toppings.push(toppings[i]);
  }
  this.addPizza();
}

Pizza.prototype.addPizza = function () {
  newOrder.pizzas.push(this);
  this.pricedPizza()
};

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



var newOrder = new PizzaOrder();

// function goBack(){
//   var newOrder = new PizzaOrder();
// }

$(document).ready(function() {
  $("#addMore").on("click",function() {
    var size = $("input[name='size']:checked").val();
    var crust = $("#crust").val();
    var toppings = [];
    $.each($("input[name='topping']:checked"), function(){
      toppings.push($(this).val());
    });
    var newPizza = new Pizza(size, crust, toppings);
    $("#pizzaList").append("<li id=" + newPizza.pizzaId + ">" + newPizza.size + ", " + newPizza.crust + ", " + toppings + " Pizza" + " $" + newPizza.pricePer.toFixed(2) + "</li>")
  })
  // $("#goBack").on("click", function() {
  //   $("#checkOutScreen").addClass("hidden");
  //   $("div#orderHere").removeClass("hidden");
  //   $("#pizzaList").empty();
  //   goBack();
  // })

  $("form").submit(function(event) {
    event.preventDefault();
    newOrder.orderTotal = 0
    newOrder.finalizeOrder();
    $("#pizzaList").prepend("<h1>" + "Total Due " + "$" + newOrder.orderTotal.toFixed(2) + "</h1>")
    $("div#orderHere").addClass("hidden");
    $("#checkOutScreen").removeClass("hidden");
  })
})
