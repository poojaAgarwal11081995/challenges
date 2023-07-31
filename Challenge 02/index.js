// Challenge 02 Shorthand Property Names

// This practicle will not have any outputs just write your answer codes for bonus you can try to use the functions to do something and check if they work properly or not.

// Convert the below code to have shorthand property names

function shortHandPropertyName(name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now(),
    save() {
      console.log(`Good morning 😁 ${this.name} `);
    },
  };
}
const showMessage = shortHandPropertyName("Vansh");
console.log(showMessage.save());
