// Write a function convert_temp(temp, from_scale, to_scale) converting temperature from one scale to another. Return converted temp value.
// Round converted temp value to an integer(!).

// Reading: http://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
// possible scale inputs:
//     "C"  for Celsius
//     "F"  for Fahrenheit
//     "K"  for Kelvin
//     "R"  for Rankine
//     "De" for Delisle
//     "N"  for Newton
//     "Re" for Réaumur
//     "Ro" for Rømer

// temp is a number, from_scale and to_scale are strings.

// convert_temp(   100, "C",  "F") # => 212
// convert_temp(    40, "Re", "C") # => 50
// convert_temp(    60, "De", "F") # => 140
// convert_temp(373.15, "K",  "N") # => 33
// convert_temp(   666, "K",  "K") # => 666


function convertTemp(temp, s1, s2){ // so a lot of typing, but easy... wonder if there's a slimmer way
    if(s1==s2) return temp
  
    let t = temp
    if(s1 != 'C') t = toCel(t, s1) // if not starting C, conv to C
    if(s2 != 'C') t = fromCel(t, s2) // if not targeting C, conv from C to desired
  
    return Math.round(t)
  }
function toCel(temp, scale) { // from Scale-1 to Celsius
    switch(scale) {
        case 'F':
          return (temp - 32) * (5/9)
        case 'K':
          return temp - 273.15
        case 'R':
          return (temp - 491.67) * (5/9)
        case 'De':
          return (100 - temp * (2/3))
        case 'N':
          return temp * (100/33)
        case 'Re':
          return temp * (5/4)
        case 'Ro':
          return (temp - 7.5) * (40/21)
        default:
          return temp
    }
  }
function fromCel(temp, scale) { // from Celsius to Scale-2
    switch(scale) {
        case 'F':
          return (temp * (9/5)) + 32
        case 'K':
          return temp + 273.15
        case 'R':
          return (temp + 273.15) * (9/5)
        case 'De':
          return (100 - temp) * (3/2)
        case 'N':
          return temp * (33/100)
        case 'Re':
          return temp * (4/5)
        case 'Ro':
          return (temp * (21/40)) + 7.5
        default:
          return temp
    }
  }


// or...

var toCelcius = { // didnt need extra functions, couldve done objects with functions as the values for each scale "key"
    C: function(t) { return t },
    F: function(t) { return (t - 32) * 5 / 9 },
    K: function(t) { return t - 273.15 },
    R: function(t) { return (t - 491.67) * 5 / 9 },
    De: function(t) { return 100 - t * 2 / 3 },
    N: function(t) { return t * 100 / 33 },
    Re: function(t) { return t * 5 / 4 },
    Ro: function(t) { return (t - 7.5) * 40 / 21 }
  }
var fromCelcius = {
    C: function(t) { return t },
    F: function(t) { return t * 9 / 5 + 32 },
    K: function(t) { return t + 273.15 },
    R: function(t) { return (t + 273.15) * 9 / 5 },
    De: function(t) { return (100 - t) * 3 / 2 },
    N: function(t) { return t * 33 / 100 },
    Re: function(t) { return t * 4 / 5 },
    Ro: function(t) { return t * 21 / 40 + 7.5 }
  }
function convertTemp(temp, from, to) {
    if (from === to) return temp
    
    temp = toCelcius[from](temp)
    temp = fromCelcius[to](temp)
    
    return Math.round(temp)
  }