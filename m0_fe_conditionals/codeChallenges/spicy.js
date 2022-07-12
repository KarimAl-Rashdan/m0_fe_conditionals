var goodDrivingRecord = true
var isOver25 = true

if (goodDrivingRecord === true && isOver25 === true){console.log("they should get a discount on the car rental");
} else if (goodDrivingRecord === true || isOver25 === true){console.log("they should pay full price");
} else if (goodDrivingRecord === false && isOver25 === false){console.log("they need to have someone else sign for the rental");
}
