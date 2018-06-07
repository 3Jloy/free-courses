let n = parseInt(process.argv[2]), e = parseInt(process.argv[3]); 
let sum = 0;
for (let i = 1; i <= n; i++) {
   sum += Math.pow(i, e);
}
process.stdout.write(sum.toString());
