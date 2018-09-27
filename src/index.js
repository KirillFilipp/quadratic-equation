module.exports = function solveEquation(equation) {
  let x1, x2, solutions;
  let m = equation.split (' ');
  let a=m[0];
  let b=m[3]+m[4];
  let c=m[7]+m[8];
  x1=(-b+(Math.sqrt(Math.pow(b,2)-4*a*c)))/(2*a); 
  x2=(-b-(Math.sqrt(Math.pow(b,2)-4*a*c)))/(2*a);
  if (x1 < x2) {
    solutions = [Math.round(x1),Math.round(x2)];
  } else {
    solutions = [Math.round(x2),Math.round(x1)];
  }
return solutions;
}
