
var text = "რეკლამა მარკეტინგი ვირუსი";
var forbWords = ["რეკლამა", "მარკეტინგი", "ვირუსი"];
if (text.indexOf(forbWords[0] && forbWords[1] && forbWords[2]) >= 0) {
    alert("სტრიქონი შეიცავს აკრძალულ სიტყვებს");
} else if (text.indexOf(forbWords[0] && forbWords[1] && forbWords[2]) < 0) {
    alert("სტრიქონი არ შეიცავს აკრძალულ სიტყვებს");

}