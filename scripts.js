// $(document).ready(function() {
  // const side1 = prompt("Enter the first side length in inches.");
  // const side2 = prompt("Enter the second side length in inches.");
  // const side3 = prompt("Enter the third side length in inches.");

  // if(side1 === side2 && side2 === side3 && side1 === side3) {
  //   alert("This triangle is equilateral!")
  // } else if(side1 === side2 || side2 === side3 || side1 === side3) {
  //   alert("This triangle is Isosceles!")
  // } else if(side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
  //   alert("This is not a triangle")
  // } else {
  //   alert("This triangle is scalene!")
  // }
// });

// NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.
$(document).ready(function() {
  function areSidesEqual(triangleSide1, triangleSide2, triangleSide3) {
    if(triangleSide1 === triangleSide2 && triangleSide2 === triangleSide3 && triangleSide1 === triangleSide3) {
      alert("This triangle is equilateral!")
    } else if(triangleSide1 === triangleSide2 || triangleSide2 === triangleSide3 || triangleSide1 === triangleSide3) {
      alert("This triangle is Isosceles!")
    } else {
      alert("This triangle is scalene!")
    }
  }

  // function checkIfTriangle(side1, side2, side3) {
  //   if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
  //     alert("This is not a triangle!");
  //   }
  //   else {
  //     areSidesEqual(side1, side2, side3);
  //   }
  //   }

      const side1 = prompt("Enter the first side length in inches.");
      const side2 = prompt("Enter the second side length in inches.");
      const side3 = prompt("Enter the third side length in inches.");

  areSidesEqual(side1, side2, side3);

  // checkIfTriangle(side1, side2, side3);
});

