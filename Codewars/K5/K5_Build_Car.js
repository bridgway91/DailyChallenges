// Ever wondered how it is to build cars? Today you can have a taste of it and build your own, very simplified version of car using your programming skills. We are going to build vehicles like these below: ____ __________ ____________ | []\ | []\ |[] []
// -o--o-' -o-o------o-' -o-o------o-o-'
// (Hope that those resemble cars|buses|trucks).

// Short introduction
// A single vehicle is built with 3 layers:
// first: ' ____' second: |  []\ third: -o--o-'
// first layer (top) consists of one space character ' ' and underscores '_';
// second layer consists of a vertical line (rear) |, empty spaces (filling) ' ', square brackets (doors) [] and a backslash (front) \ ;
// third layer consists of dashes (frame) '-', lowercase O letters (axles|wheels) 'o' and one single quote (headlight) "'"

// Problem specification
// Your aim is to implement 'Car' class/constructor. The instance of 'Car' must contain 2 properties/members body and chassis which themselves are objects.
// Each instance object (body and chassis) must contain one property called component.
// Let's assume that car refers to an instance of Car, then tests can refer to component properties by: car.chassis.component and car.body.component.
// The component properties are of String type, and contain layers of the car. body.component constitutes of first two layers, whereas chassis.componentcontains the last, third layer.

// The Car constructor takes two integer arguments:
// length specifies the length of the car (in number of characters). Must be at least 7 characters wide (as the first car above), if not, an Exception | Error must be thrown;
// doors specifies the number of doors (square brackets) in the second layer. Must be at least 1, if not, an exception must be thrown. Another exception must be thrown when the doors parameter is too big for the current car (when we cannot fit that number of doors in the given length).

// The specified error cases are the only 3 expected (in Java: throw an unchecked exception), therefore the tests will use only positive integers as parameters to Car()

// Design guidelines
//     _____________          ______          __________
//    |[][]   [][][]\        |[][][]\        |        []\
//    -o-o-o-----o-o-'       -o----o-'       -o-o------o-'
// As we can see, our Car class is quite flexible in terms of number of axles and doors, and here the following applies.
// As the length parameter increases, we want our cars|trucks to keep balance, hence the number of axles has to increase. The third axle has to be added at the length = 12 and subsequent axles have to be added every time the given length is wider by 2 (next axle at length = 14 and so on). As the parameter is big enough we add axles once to the rear (left), once to the front (right) part of the car - starting from the rear.
// The situation works similarly with the doors parameter. We try to fit the given number of doors in the given length. The first door is added to the front, the next to the rear, the next again to the front.

// One final guide:
// first layer's length = length - 2
// second layer's length = length - 1
// third layer's length = length
// first and second layers need a line feed character at their end: \n.


function Car(length, doors) { // worked through using CGPT as my little duckling
    if (length < 7 || doors < 1 || doors > Math.floor((length - 3) / 2)) throw Error
    
    this.body = {}
    this.chassis = {}
    
    let roof = ' ' + '_'.repeat(length-3) + '\n'
    let backDoors = '[]'.repeat(Math.floor(doors/2))
    let frontDoors = '[]'.repeat(Math.ceil(doors/2))
    let middle = '|' + backDoors + ' '.repeat(length - backDoors.length - frontDoors.length - 3) + frontDoors + '\\'
    this.body.component = roof + middle + '\n'
    
    let totalWheels = 2 + Math.max(0, Math.floor((length - 10) / 2))
    let back = Math.ceil(totalWheels / 2)
    let front = Math.floor(totalWheels / 2)
    let filler = length - 2*back - 2*front - 1
    this.chassis.component = '-o'.repeat(back) + '-'.repeat(filler) + 'o-'.repeat(front) + "'"
  }