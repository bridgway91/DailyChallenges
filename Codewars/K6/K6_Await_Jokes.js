// Here are some classic Christmas cracker jokes.
// There is a made up API URL (http://great.jokes/christmas) that you can call to a get list of Christmas jokes in JSON format.

// Your challenge
// - Write an async function which takes an apiUrl and jokeId which returns a promise.
// - The data will need to be filtered to get the specified joke by id.
// - When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.

// Handle error cases
// - If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
// - Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.
// - Throw error in a promise style

// Info
// Get the data using the mocked fetch(url) function, which implements the basics of the fetch api.

// Joke data shape:
// {
//   jokes: [{ 
//     id: 101,
//     setup: "Who is Santa's favorite singer?",
//     punchLine: "Elf-is Presley!"
//   },
// ...moreJokes]
// // Use for your tests ^^


async function sayJoke(apiUrl, jokeId){ // admittedly borrowed a bunch from other solns for this... wasnt sure exactly how to structure the return, and error situations confused me a bit
    const search = await fetch(apiUrl)
    const response = await search.json()
    
    if (!response.hasOwnProperty('jokes')) throw new Error(`No jokes at url: ${apiUrl}`)
    let joke
    for (let j of response.jokes) {
      if (j.id == jokeId) joke = j
    }
    if (!joke) throw new Error(`No jokes found id: ${jokeId}`)
  
    return {
      saySetup: () => joke.setup,
      sayPunchLine: () => joke.punchLine
    }
  }