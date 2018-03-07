// JS
let applications = [
  "Gmail",
  "Facebook",
  "Artesis Plantyn",
  "Paypal",
  "Coolblue",
  "Slack",
  "Google",
  "Youtube",
  "Instagram",
  "Reddit",
  "Dropbox",
  "Swarm",
  "LinkedIn",
  "Skype",
  "Tinder",
  "Outlook",
  "Office",
  "Evernote",
  "Twitch",
  "Github",
  "Spotify"
];

function findApp (element) {
  let app = element.value;
  if (applications.indexOf(app) !== -1) {
    console.log('App exits: ' + applications[applications.indexOf(app)]);
    let jup = prompt("Do you want to add " + app + " to your list?");
    if (jup === "yes")
    {
      addApp();
      TabInfo(app);
      console.log(app + " tab created");
    }
  } else {
    console.log('App doesn\'t exist');
  }
}
function UnknownApp() {
  let answer = prompt("Do you want to add this application to the application list?");
  if (answer === "yes")
  {
    let naam =document.getElementById('ingave').innerHTML = naam;
    console.log(naam);
    applications.push(naam);
    addApp();
    TabInfo(naam);
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
function TabInfo(input) {
  let Name = document.getElementById('Name');
  Name.innerHTML = input ;
  if (input === "Slack")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/slack.svg";
  }
  if (input === "Facebook")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/facebook.svg";
  }
  if (input === "Gmail")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/gmail.svg";
  }
  if (input === "Youtube")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/youtube.svg";
  }
  if (input === "Google")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/google-plus.svg";
  }
  if (input === "Paypal")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/paypal.svg";
  }
  if (input === "Reddit")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/reddit.svg";
  }
  if (input === "Dropbox") {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/dropbox.svg";
  }
  if (input === "Instagram")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/instagram.svg";
  }
  if (input === "LinkedIn")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/linkedin.svg";
  }
  if (input === "Skype")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/skype.svg";
  }
  if (input === "Outlook")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/outlook.svg";
  }
  if (input === "Tinder")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/tinder.svg";
  }
  if (input === "Office")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/office.svg";
  }
  if (input === "Swarm")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/swarm.svg";
  }
  if (input === "Evernote")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/evernote.svg";
  }
  if (input === "Twitch")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/twitch.svg";
  }
  if (input === "Github")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/github.svg";
  }
  if (input === "Spotify")
  {
    let afbeelding = document.getElementById('img');
    afbeelding.src = "img/spotify.svg";
  }

}

