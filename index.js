
function reverseString() {
    var inputString = document.getElementById("String").value;
    var reversedString = inputString.split('').reverse().join('');
    document.getElementById("answer").textContent = reversedString;
}


function isPalindrome() {
    var inputString = document.getElementById("NumString");
    var text =inputString.textContent;
    var firstChar = text[0];
    var lastChar = text[text.length - 1];

    var resultDiv = document.getElementById("result");
    
    if (firstChar === lastChar) {
        resultDiv.textContent = "is a palindrome";
    } else {
        resultDiv.textContent = "isn't a palindrome";
    }
}
 




function totalAmount() {
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var tip = parseFloat(document.getElementById("tip").value);
    var totalAmount = subtotal + (subtotal * (tip / 100));
    document.getElementById("total").textContent = "Total Amount: " + totalAmount;
}
  







