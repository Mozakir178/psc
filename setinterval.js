


// L1 - Simulating a Loading Screen with setInterval

// Problem Statement:
// Create a JavaScript program that simulates a loading screen using setInterval. The program should:

// Start by logging "Loading..." every 1 second.
// After 5 seconds, stop the loading messages and log "Loaded successfully!".
// Use setInterval to repeat the loading message and clearInterval to stop it after 5 seconds.

let interval = () => {
    let count = 0 ;
    let curr = setInterval(() => {

        count++;
        console.log("Loading "+count) ;
        if(count == 5){
            clearInterval(curr) ;
            console.log("Done");
        }
    }, 1000)
}

interval() ;
