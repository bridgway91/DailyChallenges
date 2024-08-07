// There are all types of cylons. The trick is, some look like humans. Using prototypical inheritance, create a prototype for Cylon. Cylons should have a model, and should have an attack function, which will return the string "Destroy all humans!"
// Since some cylons appear human, then make a child object called HumanSkin. This should have a model, as Cylons do, and should have the same attack. However, it should also have a function called infiltrate, which will return the string "Infiltrate the colonies".

class Cylon { // weird problem, but rather easy, but DID have to refresh my memory on classes
    constructor(model) {
      this.model = model
    }
    attack() {
      return 'Destroy all humans!'
    }
  }
  class HumanSkin extends Cylon {
    constructor(model) { // probably didnt need this part, since exact same
      super(model)
    }
    infiltrate() {
      return 'Infiltrate the colonies'
    }
  }