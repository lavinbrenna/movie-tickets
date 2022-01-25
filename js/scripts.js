function Ticket(age, time, name){
  this.age = age;
  this.time = time;
  this.name = name;
  this.price = 0;
}

Ticket.prototype.findAge = function(age){
  age = this.age;
  if( age > 0 && age < 2){
    return "baby";
  }else if(age < 11){
    return "child";
  }else if(age > 11 && age < 60){
    return "adult";
  }else{
    return "senior";
  }
}

Ticket.prototype.findTime = function(time){
  time = this.time;
  if(time > 0 && time < 4 ){
    return "matinee";
  }else{
    return "non-matinee";
  }
}

Ticket.prototype.findName = function (name){
  name = this.name;
  if(name === "belle"){
    return "first-release"
  }else if(name ==="kingsman"){
    return "first-release";
  }else if(name ==="matrix"){
    return "second-release";
  }else{
    return "second-release";
  }
}
Ticket.prototype.findPrice = function(age, time, price, name){
  age = this.findAge(age);
  time = this.findTime(time);
  price = this.price;
  name = this.findName(name);
  if(age === "baby"){
    price = 0;
    return price;
  }else if(age === "child" && time ==="matinee" || age === "child" && name === 'second-release'){
    price += 8;
    return price;
  }
  else if(age === "child" && time === "non-matinee"){
    price += 10;
    return price;
  }else if(age === "adult" && time ==="matinee" || age === "adult" && name === 'second-release'){
    price += 10;
    return price;
  }else if(age === "adult" && time === "non-matinee"){
    price += 12
    return price;
  }else if(age === "senior" && time === "matinee" || age === "adult" && name === 'second-release'){
    price += 8;
    return price;
  }else{
    price += 10;
    return price;
  }
}

$(document).ready(function(){
  $("form#movieForm").submit(function(event){
    event.preventDefault();
    const inputtedAge = $("input#new-age").val();
    const inputtedTime = $("option#new-time:selected").val();
    const inputtedMovie = $("option#new-movie:selected").val();
    let ticket = new Ticket(inputtedAge, inputtedTime, inputtedMovie);
    $(".order-total").show();
    $(".price").html(ticket.findPrice());
  })
})