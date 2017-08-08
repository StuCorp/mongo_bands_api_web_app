use music;


// db.bands.insert({name:"Cinemechanica", genre:"math-rock", albums:["The Martial Arts", "Cinemechanica"]}); 
// db.bands.insert({name:"Q and not U", genre:"post-punk", albums:["No Kill No Beep Beep", "Different Damage", "Power"]});
// db.bands.insert({name:"Erase Errata", genre:"experimental punk", albums:["Other Animals", "At Crystal Palace", "Nightlife"]});


db.bands.insert([
{
  name:"Cinemechanica", 
  genre:"math-rock", 
  albums:["The Martial Arts", "Cinemechanica"]
},
{
  name:"Q and not U", 
  genre:"post-punk", 
  albums:["No Kill No Beep Beep", "Different Damage", "Power"]
},

{
  name:"Erase Errata", 
  genre:"experimental punk", 
  albums:["Other Animals", "At Crystal Palace", "Nightlife"]
}]
); 


// db.bands.insert([
//   { 
//     title: "Now You See Me",
//     actors: ["Woody Harrelson", "Jesse Eisenberg"],
//     genre: "Mystery",
//     reviews: [{
//       comment: "It's not even a thing. What just happened. I want my life back.",
//       rating: 1,
//       author: "Val"}]
//   },
//   { 
//     title: "Star Wars Episode IV: A New Hope",
//     actors: ["Harrison Ford", "Alec Guiness"],
//     genre: "Action",
//     reviews: [{
//       comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
//       rating: 101,
//       author: "Val"
//     }]
//   }]
// );