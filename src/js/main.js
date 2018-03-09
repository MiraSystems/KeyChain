//// Main App Logic

// Define global variables
let activeApps = [];

// Check for existing data & browser support
window.addEventListener('load', () => {
  //populator();
  if (typeof(Storage) !== "undefined") {
    if (!data.get()) {
      data.set([]);
    }
  } else {
    alert('Your browser does not support storage!');
  }
});

// Storage handler
let data = {
  place: 'saveDataTest',
  set: (value) => {
    localStorage.setItem(data.place, JSON.stringify(value));
  },
  get: () => {
    return JSON.parse(localStorage.getItem(data.place));
  },
  push: (item) => {
    let temporary = data.get();
    temporary.push(item);
    data.set(temporary);
  },
  flush: () => {
    localStorage.removeItem(data.place);
  }
}

// Listen for done loading
window.addEventListener('DOMContentLoaded', () => {
  updateAccounts();
});

// Update sidebar
function updateAccounts() {
  document.getElementById("list").innerHTML = '';
  data.get().forEach(item => {
    document.getElementById("list").innerHTML +=
    "      <li onclick=\"showAccount('" +
    item +
    "')\">\n" +
    '        <img id="img" src="' +
    templates[item.naam].src +
    '" alt="">\n' +
    "        <div>\n" +
    '          <p id="Name">' +
    templates[item.naam].name +
    "</p>\n" +
    "          <p>6 March 10:21</p>\n" +
    "        </div>\n" +
    "      </li>";
  });
}

// Open Account details page
function addAccount(type) {
  document.getElementById("change").innerHTML =
    '    <div class="titel">\n' +
    '      <img id="img" src="' +
    templates[type].src +
    '" alt="">\n' +
    "      <h2> " +
    templates[type].name +
    " account</h2>\n" +
    "    </div>\n" +
    "    <form>\n" +
    '      <label for="username">Username</label>\n' +
    '      <input id="username" type="text">\n' +
    '      <label for="password">Password</label>\n' +
    '      <input id="password" type="password">\n' +
    '      <label for="email">E-mail</label>\n' +
    '      <input id="email" type="email">\n' +
    '      <label for="site">Website</label>\n' +
    '      <input id="site" type="search">\n' +
    '      <input type="button" value="GOOOO" onclick="saveAccount(\'' + type + '\')">\n' +
    "    </form>\n";
}

// Save Account to Storage  and add to sidebar
function saveAccount(type) {
  data.push({
    naam: type,
    user: document.getElementById('username').value,
    password: document.getElementById('password').value,
    login: document.getElementById('email').value,
    site: document.getElementById('site').value
  });
  updateAccounts();
}

function showAccount() {
  // Show account where was clicked <Account>
}


/*data.push({
  naam: 'Facebook',
  user: 'MattZK',
  security: '********',
  login: 'me@mattwill.be',
  site: 'https://mattwill.be'
});*/

// Populate example data
function populator() {
  data.flush();
  data.set([]);
  data.push({
    naam: 'facebook',
    user: 'MattZK',
    password: '********',
    login: 'me@mattwill.be',
    site: 'https://mattwill.be'
  });
  data.push({
    naam: 'slack',
    user: 'MattZK',
    password: '********',
    login: 'me@mattwill.be',
    site: 'https://mattwill.be'
  });
  data.push({
    naam: 'instagram',
    user: 'MattZK',
    password: '********',
    login: 'me@mattwill.be',
    site: 'https://mattwill.be'
  });
}


/// OLD
/*

function addApp() {
  let list = document.getElementById("list");
  let input = document.getElementById("ingave").value;
  let item =
    "      <li onclick=\"ToggleScreen('" +
    input +
    "')\">\n" +
    '        <img id="img" src="' +
    templates[input].src +
    '" alt="">\n' +
    "        <div>\n" +
    '          <p id="Name">' +
    templates[input].name +
    "</p>\n" +
    "          <p>6 March 10:21</p>\n" +
    "        </div>\n" +
    "      </li>";
  let active = false;
  activeApps.forEach(function(thing) {
    console.log(active);
    if (input !== thing) {
      activeApps.push(input);
    } else {
      active = true;
      alert("You already have that application in your list.");
    }
  });

  if (active === false) {
    list.innerHTML += item;
    document.getElementById("Name").style.color = "white";
    ToggleScreen(input);
  } else {
    console.log("exists");
  }
}

function ToggleScreen(input) {
  let inhoud = document.getElementById("change");
  inhoud.innerHTML =
    "  <main>\n" +
    '    <div class="titel">\n' +
    '      <img id="img" src="' +
    templates[input].src +
    '" alt="">\n' +
    "      <h2> " +
    templates[input].name +
    " account</h2>\n" +
    "    </div>\n" +
    "    <form>\n" +
    '      <label for="username">Username</label>\n' +
    '      <input id="username" type="text">\n' +
    '      <label for="password">Password</label>\n' +
    '      <input id="password" type="password">\n' +
    '      <label for="email">E-mail</label>\n' +
    '      <input id="email" type="email">\n' +
    '      <label for="site">Website</label>\n' +
    '      <input id="site" type="search">\n' +
    '      <input type="button" value="GOOOO" onsubmit="addAccount(\' + templates[input].name + \')">\n' +
    "    </form>\n" +
    "  </main>";
}
function addAccount(event, name) {
  event.preventDefault();
  let theApp = templates[name].name;
  let username = document.getElementById("username");
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let website = document.getElementById("site").value;

  let app = {
    naam: theApp,
    user: username,
    security: password,
    login: email,
    site: website
  };
  console.log(app);
}
*/