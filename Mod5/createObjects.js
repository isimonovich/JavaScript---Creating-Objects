let myDog = {
  name: "Danny",
  breed: "Great Dane",
  origin: "JoJo's Bizarre Adventure",
  owner: "Jonathan Joestar",
  role: "Loyal dog who is kicked and killed by Dio Brando",
  species: "Dog",
  mySound: "I'm a gentle giant, but I’ll protect my family if you threaten them!"
};

document.write("<h2>Literal Object Output:</h2>");
document.write(`${myDog.name} is a ${myDog.breed} from the anime ${myDog.origin}.<br>`);
document.write(`He belongs to ${myDog.owner} and serves as a ${myDog.role}.<br>`);
document.write(`As a ${myDog.species}, he says: "${myDog.mySound}"<br><br>`);

function Dog(name, breed, origin, owner, role, species, mySound, canTalk) {
  this.name = name;
  this.breed = breed;
  this.origin = origin;
  this.owner = owner;
  this.role = role;
  this.species = species;
  this.mySound = mySound;
  this.canTalk = canTalk;

  this.myGreeting = function () {
    let talkStatus = this.canTalk ? "Yes, I can talk!" : "No, I’m just a regular barking dog.";
    document.write("<h2>Constructor Object Output:</h2>");
    document.write(`Hi, my name is ${this.name}, and I’m a ${this.breed} from ${this.origin}.<br>`);
    document.write(`I belong to ${this.owner}, and I’m known for being ${this.role}.<br>`);
    document.write(`I’m a ${this.species}.<br>`);
    document.write(`If you heard me, I’d say: "${this.mySound}"<br>`);
    document.write(`Can I talk? ${talkStatus}`);
  };
}

let myDogConst = new Dog(
  "Danny",
  "Great Dane",
  "JoJo's Bizarre Adventure",
  "Jonathan Joestar",
  "a loyal pet who is kicked and killed by Dio Brando",
  "Dog",
  "I'm a gentle giant, but I’ll protect my family if you threaten them!",
  false
);

myDogConst.myGreeting();
