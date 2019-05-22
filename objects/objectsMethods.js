let restaurant = {
  name: 'CheeseCake',
  guestCapacity: 100,
  guestCount: 0,
  seatParty: function(partySize) {
    this.guestCount += partySize;
  },
  removeParty: function(partySize) {
    this.guestCount -= partySize;
  },
  checkAvailability: function(partySize) {
    //this refer to the object
    //console logging this would show everything inside restaurant
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  }
};


//method is a object property with function as value
restaurant.seatParty(10);
console.log(restaurant.checkAvailability(30));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(10));
console.log(restaurant);
