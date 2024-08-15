// alert("Hello");
function add(){
    var num1 = document.getElementById("num1").value;
    // alert(num1);
    var num2 = document.getElementById("num2").value;
    // alert(num2);
    var add = parseInt(num1)+parseInt(num2);
    // alert(add);
    document.getElementById("ans").innerHTML = add;
}