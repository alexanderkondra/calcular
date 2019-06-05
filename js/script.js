$(document).ready(function() {
  $(".number").click(function(){
    alert("clicked");
    console.log(".number")
    var number1 = parseInt($("#1").val());
    var number2 = parseInt($("#2").val());
    alert(add(number1, number2));
  )};
});
