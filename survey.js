const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let object = {
  name: '',
  activity: '',
  listen: '',
  mealType: '',
  mealFood: '',
  sport: '',
  superpower: ''
};

rl.question('What\'s your name?❓ ', (num1) => {
  console.log(`Thank you for your valuable feedback: ${num1}💛`);
  object.name = num1
  rl.question('Whats an activity you like doing?❓ ', (num2) => {
    console.log(`Thank you for your valuable feedback: ${num2}💛`);
    object.activity = num2
    rl.question('What do you liten to while doing that?❓ ', (num3) => {
      console.log(`Thank you for your valuable feedback: ${num3}💛`);
      object['listen'] = num3
      rl.question('What type of meal is your favourite?❓ ', (num4) => {
        console.log(`Thank you for your valuable feedback: ${num4}💛`);
        object.mealType = num4
        rl.question('What is your favourite thing to eat for that meal?❓ ', (num5) => {
          console.log(`Thank you for your valuable feedback: ${num5}💛`);
          object.mealFood = num5
          rl.question('What sport is your favourite?❓ ', (num6) => {
            console.log(`Thank you for your valuable feedback: ${num6}💛`);
            object.sport = num6
            rl.question('What is your super power?❓ ', (num7) => {
              console.log(`Thank you for your valuable feedback: ${num7}💛`);
              object.superpower = num7
              console.log(`
Hi my name is ${object.name}. I love to do ${object.activity}. 
I enjoy listening to ${object.listen} while doing this activity.
My favourite meal of the day is ${object.mealType}. 
For this meal I love to have ${object.mealFood}.
My favourite sport to play and/or watch is ${object.sport}. 
My super power is pretty dope and it is ${object.superpower}.
`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
