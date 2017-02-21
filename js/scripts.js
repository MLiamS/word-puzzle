$(document).ready(function(){
  var sent = $("p#sentence").text();
  console.log(sent);

  var vowels = ["a", "e", "i", "o", "u", "y"];

  var sentArray = sent.split("");
// debugger;
console.log(sentArray)
  vowels.forEach(function(vowel){
          sentArray.forEach(function(letter){
            if (vowel === letter){
              var a = sentArray.indexOf(letter)
              sentArray.splice(a , 1,"-")};
            });
          });
    var sentJoin = sentArray.join("");
    $("p.joined").append(sentJoin);
    $("#form").submit(function(){
      event.preventDefault();
      $("#sentence").toggle();
      $(".joined").toggle();
    });
    console.log(sentJoin)
    console.log(sentArray)
});
