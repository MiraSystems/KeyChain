// JS
let applications = [
  "Google",
  "Facebook",
  "Artesis Plantyn",
  "Paybpal",
  "Coolblue",
  "One+1",
  "VTM",
  "KAVO",
  "AdminBox",
  "Ubuntu",
  "Slack",
  "Oracle",
  "A veloke",
  "Github",
  "Steam",
  "Discord",
  "Twitch",
  "Cisco",
  "Amazon",
  "Ali-expres",
  "Reddit",
  "Swarm",
  "Belfius",
  "Outlook",
  "Office365"
  ];
applications.forEach(function (app) {
switch (app){
  case app === applications :
    if (app !==// niet bestaat)
    //make a new list item with this name
      else{
    let duplicate = prompt("This app already exists, do you want to duplicate?");
    if (duplicate = "yes")
    {
      app + "Duplicate"//make a new list item with this name
    }

  }

    //make a new list item with this name
    break;
  case app !== applications :
    let include = prompt("Do you want to add this application to the list?");
    if (include = "yes")
    {
      applications.unshift(app);
      //make a new list item with this name
    }
    else{
      app.clear()
    }
}
});