// There's no such thing as private properties on a coffeescript object! But, maybe there are?

// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

// getSecret() which returns the secret
// setSecret() which sets the secret
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

function createSecretHolder(secret) { // very weird challenge, took a bit to get the syntax right (even looked at solutions for it), but eventually even when I got it right, the test would fail the first time, I'd change nothing, then it would pass second test... I don't get it
    let _secret = secret;
    return {
      setSecret: function(s) {
        _secret = s;
      },
      getSecret: function() {
        return _secret;
      }
    }
  }


// alternatively...

function createSecretHolder(secret) {
    return {
      getSecret: function() { return secret; },
      setSecret: function(v) { secret = v; }
    };
  }