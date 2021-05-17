// We are tracking down our rogue agent Matthew Knight also known as Roy Miller. He travels from places to places to avoid being tracked. Each of his travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the routes he will take in his every journey.

// Task
// You are given an array of routes of his itineraries. List down the only places where he will go in correct order based on his itineraries.

// Example
// Given the following routes:

// [ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]
// The result will be:

// "USA, BRA, UAE, JPN, PHL"

// start in the first array 
// if the last stop matches the first stop jump to that array and move through the stop 
// repeat the process until you have reached the all possible stops

// cycle through the given array
// find the first array in the arrays and then the first stop
// store or capture it
// use it the find an array with the same stop in the initial place, store it to
// repeat until you have an array with all the stops


function findRoutes(routes) {
    const routeTracker = []    

    // finding the starting point
    routes.map((route) => {
        if (!routes.find((place) => place[1] === route[0])) {
          // Push first point to the routeTracker
          routeTracker.push(route[0]);
        }
    })

    // moving through the rest of the array
    // while the tracker is less than the length of the input route, continue
    while (routeTracker.length <= routes.length) {
        routes.map(route => {
            if (route[0] === routeTracker[routeTracker.length-1]) {
                routeTracker.push(route[1])
            }
        })
    }
    return routeTracker.join(', ')
}

console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]))
// expected "MNL, TAG, CEB, TAC, BOR"

console.log(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]))
// expected "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"





