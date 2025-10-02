// Tính tổng các số hợp lệ
function sum(...nums) {
  return nums
    .filter(n => typeof n === 'number' && !isNaN(n))
    .reduce((acc, cur) => acc + cur, 0);
}

// Tính trung bình các số hợp lệ, làm tròn 2 chữ số thập phân
function avg(...nums) {
  const validNums = nums.filter(n => typeof n === 'number' && !isNaN(n));
  if (validNums.length === 0) return 0;
  const total = validNums.reduce((acc, cur) => acc + cur, 0);
  return +(total / validNums.length).toFixed(2);
}

// In kết quả
console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 'x', 4));      // 5
console.log(avg(1, 2, 3, 4));     // 2.5
console.log(avg());               // 01ngrfy