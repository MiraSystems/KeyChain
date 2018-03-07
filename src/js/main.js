// JS
let applications = [
  "Google",
  "Facebook",
  "Artesis Plantyn",
  "Paypal",
  "Coolblue",
];

function findApp (element) {
  let app = element.value;
  if (applications.indexOf(app) !== -1) {
    console.log('App exits: ' + applications[applications.indexOf(app)]);
    let jup = prompt("Do you want to add " + app + " to your list?");
    if (jup === "yes")
    {
      addApp();
    }
  } else {
    console.log('App doesn\'t exist');
  }
}
function addApp() {
  let list = document.getElementById('list');
  let adding = document.getElementById('AddItem').innerHTML;
  let addings = document.createElement('li');
  list.appendChild(addings);
  addings.innerHTML = adding;
  console.log(addings);

}
