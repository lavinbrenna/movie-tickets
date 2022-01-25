function Ticket(age, time){
  this.age = age;
  this.time = time;
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
  time = this.time
  if(time > 0 && time < 4 ){
    return "matinee";
  }else{
    return "non-matinee";
  }
}

Ticket.prototype.findPrice = function(age, time, price){
  age = this.findAge(age);
  time = this.findTime(time);
  price = this.price;
  if(age === "baby"){
    price = 0;
    return price;
  }else if(age === "child" && time ==="matinee"){
    price += 8;
    return price;
  }else if(age === "child" && time === "non-matinee"){
    price += 10;
    return price;
  }else if(age === "adult" && time ==="matinee"){
    price += 10;
    return price;
  }else if(age === "adult" && time === "non-matinee"){
    price += 12
    return price;
  }else if(age === "senior" && time === "matinee"){
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
    const inputtedTime = $("option:selected").val();
    let ticket = new Ticket(inputtedAge, inputtedTime);
    console.log(inputtedTime);
    $(".order-total").show();
    $(".price").html(ticket.findPrice());
    console.log(ticket.findPrice());
  })
})