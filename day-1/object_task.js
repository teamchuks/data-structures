function footballer() {
  const player = {
    name: "Ademola Lookman",
    age: 27,
    occupation: "footballer",
    sex: "male",
    status: "single",
    email: "ademolalookman@gmail.com",
  };

// add another property
  player.height = "5.9 inches";
  console.log(player);

//   delete a property
  delete player.amount;
  console.log(player);

//   change the value of a property
  player.name = "corolla";
  console.log(player);
}
footballer();

