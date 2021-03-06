function inName(name){
  var newName = name.split(" ");
  newName[0] = newName[0][0].toUpperCase() + newName[0].slice(1).toLowerCase();
  newName[1] = newName[1].toUpperCase();
  return newName.join(" ");
}
$("#main").append(internationalizeButton);


var bio = {
  "name" : "Spencer Menethil",
  "role" : "Designer",
  "welcomeMessage" : "Life is short, I just show you the code.",
  "biopic" : "images/fry.jpg",
  "contacts" : {
    "mobile" : "1860000000",
    "email" : "transitionandholdon@gmail.com",
    "github" : "transitionandholdon@github.com",
    "location" : "ShenZhen",
    "twitter" : "spencerM"
  },
  "skills" : [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Python",
    "AutoCAD",
    "SketchUp"
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "ShenZhen BaoAn city Planning",
      "dates" : "2009~2012",
      "description" : "I am a very new coder, so obviously I don't have many completed FrontEnd project to show, I prefer to use my real career project to be a placeholder. So this is one of my real project.",
      "images" :  [
        "images/project1-show1.jpg",
        "images/project1-show2.jpg"
      ]
    },
    {
      "title" : "ChangLe giant east lake Planning",
      "dates" : "2008~2010",
      "description" : "I am a very new coder, so obviously I don't have many completed FrontEnd project to show, I prefer to use my real career project to be a placeholder. So this is one of my real project.",
      "images" :  [
        "images/project2-show1.jpg",
        "images/project2-show2.jpg"
      ]
    }
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "HMA LandScape and Planning Corporation",
      "title" : "Project Manager",
      "location" : "ShenZhen",
      "dates" : "2012.08-NOW",
      "description" : "I join this company in 2012, it's a very small team but everyone has powerful skills, I had much happy time in here, and now I am promoted to be a Project Manager now, I hope every work well in the future days."
    },
    {
      "employer" : "Aoya landscape Design Corporation",
      "title" : "Designer",
      "location" : "ShenZhen",
      "dates" : "2008.07-2012.07",
      "description" : "It is my first Job after my graduated, at first I am really lost myself in everyday busy work, it's took a long time to catch up with my staff and do a well job."
    }
  ]
};

var education = {
  "schools" : [
    { "name" : "HuNan University",
      "location" : "ChangSha",
      "degree" :　"Bachelor",
      "majors" : ["landscape","planning"],
      "dates" : "2004-2008",
      "url" : "http://www.hunau.edu.cn/"
    }
  ],
  "onlineCourses" : [
    { "title" : "Japanese Basics",
      "school" : "hunan nongda",
      "dates" : "2005-2008",
      "url" : "www.hunan.com"
    },
    {
      "title" : "English Basics",
      "school" : "hunan nongda",
      "dates" : "2004-2005",
      "url" : "www.hunan.com"
    }
  ],
  //This function display the education message.
  "display" : function(){
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++){
    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
    formattedSchool = formattedSchool.replace("#", education.schools[i].url);
    $(".education-entry:last").append(formattedSchool);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $(".education-entry:last").append(formattedSchoolDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    for(var j = 0; j < education.schools[i].majors.length; j++) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
      $(".education-entry:last").append(formattedMajor);
      }
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
      var formatteronlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
      $(".education-entry:last").append(formatteronlineTitle);
      var formatteronlineSChool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
      $(".education-entry:last").append(formatteronlineSChool);
      var formatteronlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
      $(".education-entry:last").append(formatteronlineDates);
      var formatterURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
      $(".education-entry:last").append(formatterURL);

    }
  }
};

//This function append the bio message to the top of the page.
bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formatterWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").prepend(formattedName, formattedRole);
  $("#header").append(formattedPic, formatterWelcome);


  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
  $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation, formattedTwitter);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++){
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }
};

bio.display();

work.display = function(){
  for (var job = 0; job < work.jobs.length; job++){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer =
    HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle =
    HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates =
    HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation =
    HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription =
    HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);


  }
};

work.display();

projects.display = function(){
  for(var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle =
    HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates =
    HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription =
    HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[i].images.length > 0) {
      for (var j = 0; j < projects.projects[i].images.length; j++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

projects.display();
education.display();

$("#mapDiv").append(googleMap);
