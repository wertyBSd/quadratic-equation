module.exports = function solveEquation(equation) {
  let a,b,c;
  //'2 * x^2 - 10 * x + 12'
  a = Number(equation.split('*')[0].replace(/\s/g, ''));
  console.log(a);
  b = Number(equation.split('*')[1].replace('x^2','').replace(/\s/g, ''));
  console.log(b);
  c = Number(equation.split('*')[2].replace('x','').replace(/\s/g, ''));
  console.log(c);
  let d = b * b - 4 * a * c;
  console.log(d);
  let xone = Math.round((-b - Math.sqrt(d)) / (2*a));
  let xtwo = Math.round((-b + Math.sqrt(d)) / (2*a));
  let result = [xtwo,xone]
  return result.sort((x,y) => (x-y));
}
