// Your friend saw the great work you did with keeping your user-names at bay in
// http://www.codewars.com/dojo/katas/525d9b1a037b7a9da7000905
// now he'd like you to do (nearly) the same thing for his website, but as always, the devil is in the details.

// He has troubles with users ending or starting in a ".", and his user-array is a flat array of user-email-pairs, like so:
// [ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]
// He is only interested in e-mailing the users and ask them to sign up again, so no need to keep the user-name, only e-mail addresses for the user-names that start or end with a "." should be returned. For the above array, the correct return-array would be
// [ "food@bar.com" ]

// You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true.

function searchNames( logins ){ // easy enough, could even be 1-line, but i like this as its easier to read
    return logins.filter((e,i,a)=>{
      if (i%2 && a[i-1].match(/^\.|\.$/gm)) {
        return true
      }
      return false
    })
  }
  