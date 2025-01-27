function max_number() {
  var num0 = Number(document.getElementById("1").value);
  var num1 = Number(document.getElementById("2").value);
  var num2 = Number(document.getElementById("3").value);

  var maxval = Math.max(num0, num1, num2);

  document.getElementById("maxresult").value = maxval;
}

function min_number() {
  var num0 = Number(document.getElementById("1").value);
  var num1 = Number(document.getElementById("2").value);
  var num2 = Number(document.getElementById("3").value);

  var minval = Math.min(num0, num1, num2);

  document.getElementById("minresult").value = minval;
}
function avg_value() {
  var num0 = Number(document.getElementById("1").value);
  var num1 = Number(document.getElementById("2").value);
  var num2 = Number(document.getElementById("3").value);

  var avgval = (num0 + num1 + num2) / 3;

  document.getElementById("avgresult").value = avgval;
}
function median_1() {
  var num0 = Number(document.getElementById("1").value);
  var num1 = Number(document.getElementById("2").value);
  var num2 = Number(document.getElementById("3").value);

  let nums = [num0, num1, num2];
  let middleIndex = Math.floor(3 / 2);
  let median = nums[middleIndex];

  document.getElementById("mediancalc").value = median;
}
function median_1() {
  var num0 = Number(document.getElementById("1").value);
  var num1 = Number(document.getElementById("2").value);
  var num2 = Number(document.getElementById("3").value);

  let nums = [num0, num1, num2];
  let middleIndex = Math.floor(3 / 2);
  let median = nums[middleIndex];

  document.getElementById("mediancalc").value = median;
}
function range_1() {
  var num0 = Number(document.getElementById("1").value);
  var num1 = Number(document.getElementById("2").value);
  var num2 = Number(document.getElementById("3").value);

  let maxval = Math.max(num0, num1, num2);
  let minval = Math.min(num0, num1, num2);
  let range = maxval - minval;

  document.getElementById("rangecalc").value = range;
}

function sum_1() {
  var num0 = Number(document.getElementById("1").value);
  var num1 = Number(document.getElementById("2").value);
  var num2 = Number(document.getElementById("3").value);

  var sum = num0 + num1 + num2;

  document.getElementById("totsum").value = sum;
}

function max_sqrt() {
  var num0 = Number(document.getElementById("1").value);
  var num1 = Number(document.getElementById("2").value);
  var num2 = Number(document.getElementById("3").value);

  var maxval = Math.max(num0, num1, num2);
  let maxsqrt = Math.sqrt(maxval);

  document.getElementById("maxsquare").value = maxsqrt;
}

function min_sqrt() {
  var num0 = Number(document.getElementById("1").value);
  var num1 = Number(document.getElementById("2").value);
  var num2 = Number(document.getElementById("3").value);

  var minval = Math.min(num0, num1, num2);
  let minsqrt = Math.sqrt(minval);

  document.getElementById("minsquare").value = minsqrt;
}
