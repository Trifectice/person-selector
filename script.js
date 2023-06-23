function selectRandomPerson() {
    var people = ["Person 1", "Person 2", "Person 3", "Person 4", "Person 5 OR try again"];
    var randomIndex = Math.floor(Math.random() * people.length);
    var randomPerson = people[randomIndex];
    document.getElementById("result").textContent = "Randomly selected person: " + randomPerson;
  }
  
  // Add click event listener for the button
  var buttonContainer = document.getElementById("button-container");
  var pickButton = document.createElement("button");
  pickButton.textContent = "Pick Victim";
  pickButton.addEventListener("click", selectRandomPerson);
  buttonContainer.appendChild(pickButton);
  