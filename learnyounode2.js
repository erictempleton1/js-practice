var arg1 = process.argv;
var summed = 0;

for (var num = 2; num <= (arg1.length - 1); num += 1) {
    summed += Number(arg1[num]);
};

console.log(summed);
