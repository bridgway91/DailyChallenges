// Implement a class/function, which should parse time expressed as HH:MM:SS, or null/nil/None otherwise.

// Any extra characters, or minutes/seconds higher than 59 make the input invalid, and so should return null/nil/None.


String.prototype.toSeconds=function(){ // def should not be on the prototype... but also wasnt too hard
    if(this.match(/[^\d|:]/gi)) return null
    if(this.length != 8) return null
    
    let [h,m,s] = this.split(':').map(e=>+e)
    if(m>59 || s>59) return null
    return h*3600 + m*60 + s
  }

// or...

String.prototype.toSeconds = function () { // huh... yeah, i see now how that match would get want you want
    const m = this.match(/^(\d\d):([0-5]\d):([0-5]\d)$/)
    return m ? 3600 * m[1] + 60 * m[2] + 1 * m[3] : null
  }