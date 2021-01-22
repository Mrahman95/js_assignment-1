//problem-1

function kilometerToMeter(a) {
    return a * 1000;

}
var distance = kilometerToMeter(2);
console.log(distance);

//problem-2

function budgetCalculator(watch_no, mobile_no, laptop_no) {
    var watch = 50;
    var mobile = 100;
    var laptop = 500;
    var budget = (watch * watch_no) + (mobile * mobile_no) + (laptop * laptop_no);
    return budget;
}
var totalPrice = budgetCalculator(5, 2, 3);
console.log(totalPrice);

//problem-3

function hotelCost(days) {
    var rent = 0;
    if (days <= 10) {
        rent = days * 100;
    } else if (days <= 20) {
        var firstRent = 10 * 100;
        var remaining = days - 10;
        var secondRent = remaining * 80;
        rent = firstRent + secondRent;
    } else {
        var firstRent = 10 * 100;
        var secondRent = 10 * 80;
        var remaining = days - 20;
        var thirdRent = remaining * 50;
        rent = firstRent + secondRent + thirdRent;
    }
    return rent;
}
var totalRent = hotelCost(25);
console.log(totalRent);

//problem-4

var friendsName = ["Rokon", "Habib", "Mahfuzur", "Rafsan", "Bipul"]
var maxString = friendsName[0];
function megaFriend(friendsName) {
    for (var i = 0; i < friendsName.length; i++)
        if (friendsName[i].length > maxString.length) {
            maxString = friendsName[i];
        }
    return maxString;

}
var maxName = megaFriend(friendsName);
console.log(maxName);
