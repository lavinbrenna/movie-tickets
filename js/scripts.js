function Cart(){
  this.tickets = {};
  this.ticketId = 0;
  this.cartTotal = 0;
}
Cart.prototype.addTicket = function(ticket){
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
}

Cart.prototype.assignId = function(ticket){
  this.ticketId += 1;
  return this.ticketId;
}

Cart.prototype.findTicket = function(id){
  if(this.tickets[id] != undefined){
    return this.tickets[id];
  }
  return false;
}

Cart.prototype.deleteTicket = function(id){
  if(this.tickets[id]=== undefined){
    return false;
  }
  delete this.tickets[id];
  return true;
}
function Ticket(age, time, name){
  this.age = age;
  this.time = time;
  this.name = name;
  this.price = 0;
}

Ticket.prototype.findAge = function(age){
  age = this.age;
  if( age > 0 && age < 2){
    return "Baby";
  }else if(age < 11){
    return "Child";
  }else if(age > 11 && age < 60){
    return "Adult";
  }else{
    return "Senior";
  }
}

Ticket.prototype.findTime = function(time){
  time = this.time;
  console.log(time);
  if(parseInt(time) <= 4){
    return "matinee";
  }else{
    return "non-matinee";
  }
}

Ticket.prototype.findReleaseType = function (name){
  name = this.name;
  console.log(name);
  if(name === "0"){
    return "first-release";
  }else if(name === "1"){
    return "first-release";
  }else if(name === "2"){
    return "second-release";
  }else{
    return "second-release";
  }
}

Ticket.prototype.findName = function(name){
  name = this.name;
  console.log(name);
  if(parseInt(name) === 0){
    return "Belle";
  }else if(parseInt(name) === 1){
    return "The King's Man";
  }else if(parseInt(name) === 2){
    return "The Matrix Resurrections";
  }else if(parseInt(name) === 3){
    return "Spiderman: No Way Home";
  }
}
Ticket.prototype.findPrice = function(age, time, price, name){
  age = this.findAge(age);
  time = this.findTime(time);
  price = this.price;
  name = this.findReleaseType(name);
  if(age === "Baby"){
    price = 0;
    return price;
  }else if(age === "Child" && time ==="matinee" || age === "Child" && name === 'second-release'){
    price += 8;
    return price;
  }
  else if(age === "Child" && time === "non-matinee"){
    price += 10;
    return price;
  }else if(age === "Adult" && time ==="matinee" || age === "Adult" && name === 'second-release'){
    price += 10;
    return price;
  }else if(age === "Adult" && time === "non-matinee"){
    price += 12
    return price;
  }else if(age === "Senior" && time === "matinee" || age === "Senior" && name === 'second-release'){
    price += 8;
    return price;
  }else{
    price += 10;
    return price;
  }
}

//User Interface Logic
let cart = new Cart();

function displayTicketDetails(cartToDisplay){
  let ticketList = $("ul#tickets");
  let htmlForTicketList = "";
  Object.keys(cartToDisplay.tickets).forEach(function(key){
    const ticket = cartToDisplay.findTicket(key);
    htmlForTicketList += "<li id=" + ticket.id + ">" + ticket.findAge() + " for " + ticket.findName() +": $" + ticket.findPrice() + "</li>";
  });
  ticketList.html(htmlForTicketList)
}

function orderTotal(cartToTotal){
  let htmlForTicketTotal = "";
  Object.keys(cartToTotal).forEach(function(key){
    const ticket= cartToTotal.findTicket(key);
    console.log(ticket);
    //cartToTotal.cartTotal += ticket.findPrice(age, time, movie);

  })
}

$(document).ready(function(){
  $("form#movieForm").submit(function(event){
    event.preventDefault();
    const inputtedAge = $("input#new-age").val();
    const inputtedTime = $("select#time option:selected").val();
    const inputtedMovie = $("select#movie option:selected").val();
    let ticket = new Ticket(inputtedAge, inputtedTime, inputtedMovie);
    console.log(ticket);
    cart.addTicket(ticket);
    displayTicketDetails(cart);
    orderTotal(cart);
    $(".order-total").show();
  })
})