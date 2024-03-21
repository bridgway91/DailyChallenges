// Task

// You will be defining a class File (ES6 syntax please :) ) with the following properties and methods:

// Properties
// - fullName
// - filename
// - extension
// Methods
// - getContents()
// - write(str)
// - gets()
// - getc()

// Your File class should exhibit the following behaviour:

// Constructor
// Your constructor should accept two arguments in the following order: fullName and contents, where fullName is the full name of the file (including file extension) and contents is the file contents.

// fullName (property)
// Should contain the full name of the file, including the file extension. Please note that the fullName property should be read-only, which means that attempts to reassign fullName a new value should fail and it should retain its original value.

// filename (property)
// Should contain the name of the file, excluding the file extension. Should also be read-only which means reassignment attempts should fail.

// extension (property)
// Should contain the file extension. Read-only.

// getContents (method)
// Should return the contents of the file every time.

// write (method)
// Should accept exactly 1 argument str, the new content to be written to the file. The new content should be written on a new line on the file.

// gets (method)
// Returns a line on the file, starting on Line 1. Successive calls to the method should return successive lines on the file. If the number of calls exceeds the number of lines on the file, simple return undefined.

// getc (method)
// Should return a character on the file, starting from the first character. Successive calls should return successive characters on the file. If the number of calls exceeds the number of characters on the file, it should simply return undefined.

// Note regarding filenames
// For the purposes of this Kata, all filenames used in this Kata will be valid filenames. Valid filenames are summarized as follows:
// - Contains a filename and extension (e.g. LICENSE.txt is a valid filename, LICENSE is not)
// - Filename contains only alphanumeric characters (both uppercase and lowercase), underscores, spaces and/or dots (e.g. index.php, class.phptester.php, alpha beta.gamma_delta01.complicatedExample.txt are all valid filenames). Edge cases will not be considered (e.g. successive dots - Hello World..txt - will not appear in the test cases)
// - Extension contains only lowercase alphanumeric characters (e.g. txt, php, php3 are all valid)

// Note regarding file content
// All file content will be valid. In this Kata, valid file content may include alphanumeric characters (uppercase or lowercase), underscores, ordinary whitespace, punctuation or mathematical symbols, in which each line will be separated from the next by a newline character ("\n"). There will not be tabs or other whitespace/newline characters other than "\s" (spacebar) or "\n" and the contents of any file will not start or end with a newline. You may also assume that when the tests use the write(str) method, the string str will not contain newline characters itself.


class File { // got so caught up in certain parts due to trying to restrict myself to only having the 3 properties it asks for, rather than making more... had to look at solutions to see that that was okay, at which point it's easy, though tedious
    constructor(fullName, contents) {
      this._fullName = fullName
      this._filename = fullName.slice(0,fullName.lastIndexOf('.'))
      this._extension = fullName.slice(fullName.lastIndexOf('.') + 1)
      this.contents = contents
      this.getsIndex = 0
      this.getcIndex = 0
    }
    get fullName() {
      return this._fullName
    }
    get filename() {
      return this._filename
    }
    get extension() {
      return this._extension
    }
    
    getContents() {
      return this.contents
    }
    
    write(str) {
      this.contents += this.contents ? '\n' + str : str
    }
    
    gets() {
      return this.contents.split('\n')[this.getsIndex++]
    }
    
    getc() {
      return this.contents.split('')[this.getcIndex++]
    }
  }


// alternatively...

// other solutions mostly all same or close enough