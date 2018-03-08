// JS
let templates = {
  facebook:{
    name: 'Facebook',
    src: 'img/facebook.svg'
  },
  Gmail:{
    name: 'Gmail',
    src: 'img/gmail.svg'
  },
  paypal:{
    name: 'Paypal',
    src: 'img/paypal.svg'
  },
  slack:{
    name: 'Slack',
    src: 'img/slack.svg'
  },
  google:{
    name: 'Google',
    src: 'img/google-plus.svg'
  },
  youtube:{
    name: 'Youtube',
    src: 'img/youtube.svg'
  },
  instagram:{
    name: 'Instagram',
    src: 'img/instagram.svg'
  },
  reddit:{
    name: 'Reddit',
    src: 'img/reddit.svg'
  },
  dropbox:{
    name: 'Dropbox',
    src: 'img/dropbox.svg'
  },
  swarm:{
    name: 'Swarm',
    src: 'img/swarm.svg'
  },
  linkedin:{
    name: 'LinkedIn',
    src: 'img/linkedin.svg'
  },
  skype:{
    name: 'Skype',
    src: 'img/skype.svg'
  },
  outlook:{
    name: 'Outlook',
    src: 'img/outlook.svg'
  },
  office:{
    name: 'Office',
    src: 'img/office.svg'
  },
  twitch:{
    name: 'Twitch',
    src: 'img/twitch.svg'
  },
  github:{
    name: 'Github',
    src: 'img/github.svg'
  },
  spotify:{
    name: 'Spotify',
    src: 'img/spotify.svg'
  },
};
let activeApps = [
  "abcde"
];

function addApp() {
  let list = document.getElementById('list');
  let input = document.getElementById('ingave').value;
  let item =
    '      <li onclick="ToggleScreen(\'' + input + '\')">\n' +
    '        <img id="img" src="' + templates[input].src + '" alt="">\n' +
    '        <div>\n' +
    '          <p id="Name">' + templates[input].name + '</p>\n' +
    '          <p>6 March 10:21</p>\n' +
    '        </div>\n' +
    '      </li>';
  let active = false;
  activeApps.forEach(function (thing) {
    console.log(active);
    if(input !== thing) {
        activeApps.push(input);
      console.log('ja');
    } else {
      active = true;
      alert("You already have that application in your list.");
    }
  });

  if (active === false)
  {
    list.innerHTML += item;
    document.getElementById('Name').style.color = "white";
    ToggleScreen(input);
  }
  else{
    console.log('exists');
  }
}

function ToggleScreen(input) {
    let inhoud = document.getElementById('change');
    inhoud.innerHTML =
      '  <main>\n' +
      '    <div class="titel">\n' +
      '      <img id="img" src="' + templates[input].src + '" alt="">\n' +
      '      <h2> '+ templates[input].name + ' account</h2>\n' +
      '    </div>\n' +
      '    <form>\n' +
      '      <label for="username">Username</label>\n' +
      '      <input id="username" type="text">\n' +
      '      <label for="password">Password</label>\n' +
      '      <input id="password" type="password">\n' +
      '      <label for="strength">Strength</label>\n' +
      '      <div id="strength"></div>\n' +
      '      <label for="email">E-mail</label>\n' +
      '      <input id="email" type="email">\n' +
      '      <label for="site">Website</label>\n' +
      '      <input id="site" type="search">\n' +
      '    </form>\n' +
      '  </main>';
  }



