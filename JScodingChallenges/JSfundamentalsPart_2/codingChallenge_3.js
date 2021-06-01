"strict";

const markHM = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

const johnHM = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

const higherBMI =
  markHM.calcBMI > johnHM
    ? markHM.firstName +
      markHM.lastName +
      " " +
      Math.trunc(markHM.calcBMI()) +
      " is higher than " +
      johnHM.firstName +
      johnHM.lastName +
      " " +
      Math.trunc(johnHM.calcBMI())
    : johnHM.firstName +
      johnHM.lastName +
      " " +
      Math.trunc(johnHM.calcBMI()) +
      " is higher than " +
      johnHM.firstName +
      johnHM.lastName +
      " " +
      Math.trunc(markHM.calcBMI());

console.log(higherBMI);
