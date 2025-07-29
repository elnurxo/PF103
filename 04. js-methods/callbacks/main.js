//callback functions

// function display(cb, name) {
//   cb(name);
// }

// display((x) => {
//   console.log(`hello ${x}`);
// }, "Elmir");

//Higher Order Function - HOF
// function makePizza(callback) {
//   console.log("Preparing pizza...");

//   // Simulate time-consuming task
//   for (let i = 0; i < 1_000_000_000; i++) {} // Just wasting time

//   console.log("Pizza is ready!");
//   callback();
// }

// //callback function
// function callCustomer() {
//   console.log("Calling customer: Your pizza is ready! 📞");
// }

// makePizza(callCustomer);

function boilWater(callback) {
  console.log("Boiling water...");
  setTimeout(callback, 1000);
}

function addPasta(callback) {
  console.log("Adding pasta...");
  setTimeout(callback, 1000);
}

function cookPasta(callback) {
  console.log("Cooking pasta...");
  setTimeout(callback, 1000);
}

function drainWater(callback) {
  console.log("Draining water...");
  setTimeout(callback, 1000);
}

function servePasta() {
  console.log("Serving pasta 🍝");
}

// Callback Hell begins!
boilWater(function () {
  addPasta(function () {
    cookPasta(function () {
      drainWater(function () {
        servePasta();
      });
    });
  });
});

function registerUser(username, email, callback) {
  console.log(`Registering user: ${username}`);

  // Simulate delay (e.g., saving to database)
  setTimeout(() => {
    console.log("User registered successfully ✅");

    // Call the callback and pass email as argument
    callback(email);
  }, 1000);
}

function sendWelcomeEmail(userEmail) {
  console.log(`Sending welcome email to ${userEmail} 📧`);
}

// Call registerUser and pass sendWelcomeEmail as callback
registerUser("elnur", "elnur@example.com", sendWelcomeEmail);
