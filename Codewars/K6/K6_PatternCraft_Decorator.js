// Your Task
// Complete the code so that when a Marine gets a WeaponUpgrade it increases the damage by 1, and if it is a ArmorUpgrade then increase the armor by 1.

// You have 3 classes:
// - Marine: has a damage and an armor properties
// - MarineWeaponUpgrade and MarineArmorUpgrade: upgrades to apply on marine. Accepts a Marine in the constructor and has the same properties as the Marine


class Marine { // THIS IS BAD CODE, FFS, STOP GIVING ME SHIT SKELETONS TO WORK WITH
    constructor(_damage, _armor) {
      this._damage = _damage
      this._armor = _armor
    }
    get damage() { return this._damage }
    set damage(value) { this._damage = value }
    get armor() { return this._armor }
    set armor(value) { this._armor = value }
  }
class MarineWeaponUpgrade {
    constructor(marine) {
      this._damage = marine.damage + 1
      this._armor = marine.armor
    }
    get damage() { return this._damage }
    set damage(value) { this._damage = value }
    get armor() { return this._armor }
    set armor(value) { this._armor = value }
  }
  class MarineArmorUpgrade {
    constructor(marine) {
      this._damage = marine.damage
      this._armor = marine.armor + 1
    }
    get damage() { return this._damage }
    set damage(value) { this._damage = value }
    get armor() { return this._armor }
    set armor(value) { this._armor = value }
  }


// alternatively...

class Marine { // THIS IS SO MUCH BETTER
    constructor(_damage, _armor) {
        Object.assign(this, { _damage, _armor });
    }
    get damage() { 
        return this._damage; 
    }
    get armor() { 
        return this._armor; 
    }
  }
  class MarineWeaponUpgrade extends Marine {
    constructor({ damage, armor }) {
        super(damage + 1, armor);
    }
  }
  class MarineArmorUpgrade extends Marine {
    constructor({ damage, armor }) {
        super(damage, armor + 1);
    }
  }