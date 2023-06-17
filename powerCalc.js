function powerCalc(voltage,current) {
    circuitPower  = voltage * current;
    return circuitPower;
}
const myPowerCalc = powerCalc(110,3);
console.log(myPowerCalc);