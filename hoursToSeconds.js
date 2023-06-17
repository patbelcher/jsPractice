const convertHours = (hours) => {
    let totalConvert =  hours * 3600;
    return totalConvert;
}

const hoursToSeconds  = convertHours(2);
console.log(hoursToSeconds);