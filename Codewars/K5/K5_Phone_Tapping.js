// First, we'll have to define some people. To do that we'll need a Person constructor. Each instance of Person will have a minimum of three exposed properties: name, text, and call.
// The property name will be a simple string representing the name of the Person instance.
// The method call will take in 2 parameters: cellphone and callee. The cellphone will be a simple object with two properties owner and number. owner will be a reference to a person and number will be a a string representing the phone number. The callee parameter will also hold a reference to a person.

// A simple example of a call will look like:
// const dan = new Person("Dan");
// const alex = new Person("Alex");
// const phone = {owner : dan, number: "202-555-0199"};
// dan.call(phone, alex); 

// The method text will be very similar to the call method, but instead of taking one callee it can have any number of recipients (all of which will be instances of Person).

// Borrowing from the variables declared previously, texting could look like this:
// const mark = new Person("Mark");
// dan.text(phone, alex, mark); 

// The NSA needs you to record every phone call and every text that every person makes. The NSA object will need one exposed method log. This method will take one parameter: an instance of Person. It will return the log kept on that person in the following format:
// [CALLER] called/texted [CALLEE] from [PHONE OWNER]'s phone([PHONE NUMBER])

// Each record will be seperated by a line break \n. So a sample record would look something like this:
// Dan called Erin from Dan's phone(202-555-0149)
// Dan texted Anthony from Anthony's phone(202-555-0199)
// Dan texted Alex from Dan's phone(202-555-0149)

// Newlines should only be added between each record, so if there's only one record don't add a newline.
// If there are no entries for the person, the log method will simply return No Entries.
// Oh, and every so often the NSA is accused of spying on civilians (crazy, right?). Be sure to erase each individual record after we read that particular one from the log. Good luck!


// Create the NSA object 
const NSA = {}; // problem actually took a bit, mainly b/c work is super busy, but also got caught up trying to figure out if certain things needed to be done, namely dealing with name capitalization, and also whether or not other people calling/texting say, person A, should be counted for person A's logs (they did not), also ran into an issue with referencing the keys in the objects used as arguments, didnt realize at first i needed to put them as strings
NSA.log = (person) => {
  let records = NSA[person['name']]
  if(records && records.length>0) {
    let res = records.join('\n')
    NSA[person['name']] = []
    return res
  } else {
    return 'No Entries'
  }
}
// Create the Person class
class Person {
    constructor(name) {
      this.name = name
    }
    call(cellphone, callee) {
      NSA[this.name] = NSA[this.name] || []
      NSA[this.name].push(`${this.name} called ${callee['name']} from ${cellphone['owner']['name']}'s phone(${cellphone['number']})`)
    }
    text(cellphone, ...group/* add the callees' parameters yourself */) {
      NSA[this.name] = NSA[this.name] || []
      for (let t of group) {
        NSA[this.name].push(`${this.name} texted ${t['name']} from ${cellphone['owner']['name']}'s phone(${cellphone['number']})`)
      }
    }
}