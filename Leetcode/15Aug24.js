// https://leetcode.com/problems/lemonade-change/?envType=daily-question&envId=2024-08-15

var lemonadeChange = function(bills) {


    function recursion(ind, count_five, count_ten) {
  if (ind === bills.length) {
    return true;
  }

  if (bills[ind] === 5) {
    return recursion(ind + 1, count_five + 1, count_ten);
  } else if (bills[ind] === 10) {
    if (count_five) {
      return recursion(ind + 1, count_five - 1, count_ten + 1);
    } else {
      return false;
    }
  } else if (bills[ind] === 20) {
    if (count_five && count_ten) {
      return recursion(ind + 1, count_five - 1, count_ten - 1);
    } else if (count_five && count_five >= 3) {
      return recursion(ind + 1, count_five - 3, count_ten);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

return recursion(0, 0, 0);
};