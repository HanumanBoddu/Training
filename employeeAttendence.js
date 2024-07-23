function generateAttendance() {
    const Random = Math.random();
    if(Random<= 0.5)  console.log("Employee is Present"); 
    else console.log("Employee is Absent");
}

export { generateAttendance };