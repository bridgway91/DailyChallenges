// This kata requires you to write an object that receives a file path and does operations on it. NOTE FOR PYTHON USERS: You cannot use modules os.path, glob, and re
// The purpose of this kata is to use string parsing, so you're not supposed to import external libraries. I could only enforce this in python.

// Testing:

// const fm = new FileMaster('/Users/person1/Pictures/house.png');
// fm.extension(); // output: 'png'
// fm.filename(); // output: 'house'
// fm.dirpath(); // output: '/Users/person1/Pictures/'


class FileMaster { // skeleton was set up for me... not sure if this is ideal setup
    constructor(filepath) {
      this.path = filepath
      this.file = filepath.substring([filepath.lastIndexOf('/')+1])
    }  
    extension() {
      let type = this.file.split('.')[1]
      return type;
    }
    filename() {
      let name = this.file.split('.')[0]
      return name;
    }
    dirpath() {
      return this.path.substring(0,[this.path.lastIndexOf('/')+1]);
    }
  }