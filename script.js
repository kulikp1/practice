var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

function sayHello(name) {
  console.log("Hello " + name);
}

function sayGoodbye(name) {
  console.log("Goodbye " + name);
}

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    sayGoodbye(names[i]);
  } else {
    sayHello(names[i]);
  }
}


