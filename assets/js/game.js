var playerName = window.prompt("What is your robot's name?");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight= function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  // Log a resulting message to the console so we know that it worked.

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  // Log a resulting message to the console so we know that it worked.
};

fight();

if  (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
console.log (
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
if (enemyHealth <= 0) {
    window.alert(enemtName + " has died!");
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " attacked " + playerName + " now has " + playerHealth + " health remaining."
);

if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
         window.alert(playerName + " has decided to skip this fight! Goodbye!");
         playerMoney = playerMoney - 2;
    }
    else {
        fight ();
    }
   
} else {
    window.alert("You need to choose a valid option. Try Again!");
}
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);




