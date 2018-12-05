let studentAmount = +prompt("Select Amount of Student");
let studentName = ['ირაკლი', 'საბა', 'თორნიკე', 'გიორგი', 'სალომე'];
if (studentAmount > studentName.length || studentAmount <= 0) {
 alert("arasworia, sheitanet 10ze naklebi");
}    

else{
    for (let i = 0; i < studentAmount; i++) {
        alert(studentName[i]);


    }
}