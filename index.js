(function(){
    var screen =  document.querySelector(".screen");
    var buttons =  document.querySelectorAll(".btn");
    var Clear =  document.querySelector(".btn-clear");
    var equal =  document.querySelector(".btn-red");

    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            var value = e.target.dataset.num;
            screen.value+= value;
        })
    });
    // 00 equal =  document.querySelector(".btn-equal");00
//     equal.addEventListener('click', function (e){
// if(screen.value === ''){
//     screen.value = "";
// }
// else {
//     var answer = eval(screen.value);
//     screen.value = answer;
// }
//     });

equal.addEventListener('click', function(e){
    if(screen.value === ""){
        screen.value=" ";
    }
    else{
        var answer = eval(screen.value);
        screen.value = answer;
    }
})

Clear.addEventListener('click', function(e){
    screen.value = "";
});
})();