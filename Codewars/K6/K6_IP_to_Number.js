// An IPv4 address is a 32-bit number that identifies a device on the internet.
// While computers read and write IP addresses as a 32-bit number, we prefer to read them in dotted-decimal notation, which is basically the number split into 4 chunks of 8 bits, converted to decimal, and delmited by a dot.
// In this kata, you will create the function ipToNum (or ip_to_num, depending on the language) that takes an ip address and converts it to a number, as well as the function numToIp (or num_to_ip) that takes a number and converts it to an IP address string. Input will always be valid.

// Conversion Example
// //original IP address
    // 192.168.1.1
// //breaks down into 4 binary octets
    // 11000000 . 10101000 . 00000001 . 00000001
// //which are merged together (unsigned 32-bit binary)
    // 11000000101010000000000100000001
// //and finally converted to base 10
    // 3232235777

// Note that the binary octets are unsigned (so we can't have negative numbers).
// Be careful: JavaScript does bitwise arithmetic on signed 32-bits integers.

// Examples
// ipToNum / ip_to_num
    // '192.168.1.1' converts to 3232235777
    // '10.0.0.0'    converts to  167772160
    // '176.16.0.1'  converts to 2953838593
// numToIp / num_to_ip
    // 3232235777 converts to '192.168.1.1'
    //  167772160 converts to    '10.0.0.0'
    // 2953838593 converts to  '176.16.0.1'


function ipToNum(ip) { // really dont like how long it is, but w/e
    let merge = ip.split('.').map(n=>Number(n).toString(2).padStart(8,'0')).join('').split('').reverse()
    let num = 0
    for (let i=0; i<merge.length; i++) {
        if(merge[i] == '1') num += Math.pow(2,i)
    }
    return num
}
function numToIp(num) {
    let digit = 31
    let bin = ''
    while (num) {
        if (num >= Math.pow(2,digit)) {
            bin += '1'
            num -= Math.pow(2,digit)
            digit--
        } else {
            bin += '0'
            digit--
        }
    }
    bin = bin.padEnd(32,'0')
    let a = bin.substring(0,8)
    let b = bin.substring(8,16)
    let c = bin.substring(16,24)
    let d = bin.substring(24)
    return `${parseInt(a,2)}.${parseInt(b,2)}.${parseInt(c,2)}.${parseInt(d,2)}`
}


// alternatively...


function ipToNum(ip) { // ... fuck me
    return ip.split(".").reduce((a,b) => a*256 + +b); // ok, this part i didnt know about, and still dont fully get, seems like mult * 256 shifts the binary form of the number over 8 digits, filling rest w/ 0, so then add next number, then have to mult ALL of that * 256 since youre moving all of it over by 8 again, then repeat as needed... note 2^8 = 256
  }
function numToIp(num) {
    return ("00000000" + num.toString(2)).substr(-32).match(/.{8}/g).map(x => parseInt(x,2)).join('.'); // this also pisses me off, cuz for some reason i assumed toString(2) wouldnt work... idk why, but also the match regex is cool
  }