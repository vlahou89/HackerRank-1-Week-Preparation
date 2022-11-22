function timeConversion(s) {
    // s='07:05:45PM
    
    //s.substring(8) = 'PM'        ^ 
    let lastTwo = s.substring(8);
    
    // ignoring AM PM => '07:05:45'
    let fullTime = s.substring(0, 8);
    
    // split number into an array => ['07', '05', '45']
    let times = fullTime.split(':');
    
    //if 'PM'=> times[0] + 12 = 19 
    if(lastTwo === "PM") {
        if(times[0] !== "12") {
            times[0] = parseInt(times[0]) + 12;
        }
    } else {
        // AM case, if 12AM replace with '00'
        if(times[0] === "12") {
            times[0] = "00";
        }
    }
    
    return times.join(':');
}
