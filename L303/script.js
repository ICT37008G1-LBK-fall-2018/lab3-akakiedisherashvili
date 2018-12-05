var x = prompt("შეიყვანე თანხა");
if(x.charAt(0) === "$"){
    var y = x.substr(1);
    alert( y * 2.6 );
}else if(x.charAt(0) === "L"){
    y = x.substr(1);
    alert( y / 2.6 );
}
alert(x);