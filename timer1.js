
let args = process.argv;

args.splice(0,2);
args = args.sort(function(a, b) {
  return a - b;
});

let newArgs = [];
for (const iterator of args) {
  newArgs.push(Number(iterator));
}


for (const iterator of newArgs) {
  if (typeof(iterator) === "number" && iterator > -1) {
    setTimeout(() => {
      process.stdout.write('\x07');

    }, iterator);
  }
}




