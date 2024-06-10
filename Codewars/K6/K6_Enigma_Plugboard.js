// The plugboard crosswired the 26 letters of the latin alphabet togther, so that an input into one letter could generate output as another letter. If a wire was not present, then the input letter was unchanged. Each plugboard came with a maximum of 10 wires, so at least six letters were not cross-wired.

// For example:
// - If a wire connects A to B, then an A input will generate a B output and a B input will generate an A output.
// - If no wire connects to C, then only a C input will generate a C output.

// Note
// In the actual usage of the original Enigma Machine, punctuation was encoded as words transmitted in the stream, in our code, anything that is not in the range A-Z will be returned unchanged.

// Kata
// The Plugboard class you will implement, will:
// - Take a list of wire pairs at construction in the form of a string, with a default behaviour of no wires configured. E.g. "ABCD" would wire A <-> B and C <-> D.
// - Validate that the wire pairings are legitimate. Raise an exception if not.
// - Implement the process method to translate a single character input into an output.

// Examples
// var plugboard = Plugboard("ABCDEFGHIJKLMNOPQRST")
// plugboard.process("A") ==> "B"
// plugboard.process("B") ==> "A"
// plugboard.process("X") ==> "X"
// plugboard.process(".") ==> "."


class Plugboard { // had to look at solns first to get a general idea of what i was going for, did the rest myself (realizing the if(wires) part took a while)
    constructor(wires) {
      this.wires = wires
      if (wires) {
        if (wires.length > 20 // plugboard only has up to 10 wires
           || wires.length % 2 // wires connect 2 letters each
           || Array.from(new Set(wires)).length != wires.length) { // no repeats
          throw new Error
        }
      }
    }
    process(wire) {
      if (!this.wires.includes(wire)) return wire
      let ind = this.wires.indexOf(wire)
      return ind%2 ? this.wires[ind-1] : this.wires[ind+1]
    }
  }