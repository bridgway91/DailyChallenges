// Karan's company makes software that provides different features based on the version of operating system of the user.

// To compare versions, Karan currently parses both version numbers as floats.

// While this worked for OS versions 10.6, 10.7, 10.8 and 10.9, the operating system company just released OS version 10.10. This causes his method to fail, as 10.9 is greater than 10.10 when interpreting both as numbers, despite being a lesser version.

// Help Karan by writing him a function which compares two versions, and returns whether or not the first one is greater than or equal to the second.

// Specification notes:
// - Versions are provided as strings of one or more integers separated by ..
// - The version strings will never be empty.
// - The two versions are not guaranteed to have an equal amount of sub-versions, when this happens assume that all missing sub-versions are zero.
// - Two versions which differ only by trailing zero sub-versions will never be given.


function compareVersions (version1, version2) { // spent an unnecessarily long time trying to figure out an alternate solution to padding the shortest array with zeros and going through comparing each item all the way through...
    let v1 = version1.split('.').map(e => Number(e))
    let v2 = version2.split('.').map(e => Number(e))
    
    while(v1.length && v2.length) {
      let a = v1.shift(), b = v2.shift()
      if (a < b) return false;
      if (a > b) return true;
    }
  
    return v1.length >= v2.length
  }


// alternatively...


const compareVersions = (v1, v2) => { // most solns were similar to my original idea or the one i used
    const a1 = v1.split('.').map(Number);
    const a2 = v2.split('.').map(Number);
    for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
      let n1 = a1[i] || 0, n2 = a2[i] || 0;
      if (n1 === n2) continue;
      return (n1 > n2) ? true : false;
    }
    return true;
  };