var bio = {
	"name": "Charles Javelona",
	"role": "Front-end Ninja",
	"contacts": {
		"email": "charlesjavelona@gmail.com",
		"github": "charlesakio",
		"twitter": "@charlesjavelona",
		"location": "Mississauga, Ontario, Canada"
		},
	"welcomeMsg": "``Welcome to my interactive resume, created using Javascript``",
	"skills": ["Python", "Django", "Flask", "Front-end"],
	"bioPic": "images/business.portrait.jpg",
};

//2.)Bio and education for referrence, 
//check https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550/e-1935058561/m-1952638584
var education = {
	"schools" : [
	{
		"name": "Sheridan College",
		"location": "Oakville, ON",
		"degree": "Associates Degree",
		"major": ["Internet Communications Technology"],
		"dates": "2014-Present",
		"url": "https://www.sheridancollege.ca/academics/programs-and-courses/internet-communications-technology.aspx"
	}	
  ],
	"onlineCourses": [
	{
		"title": "Front-end Nanodegree",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/nanodegree"
	},
	{
		"title": "LFS101x: Introduction to Linux",
		"school": "Linux Foundation",
		"dates": "2015",
		"url": "https://verify.edx.org/cert/ba2913c463f04223831c9172ec9beae3"
	},
	{
		"title": "Web development",
		"school": "Udacity",
		"dates": "2014",
		"url": "https://www.udacity.com/course/web-development--cs253"
	},
  ]
}

//1.) Create work and project objects
var work = {
	"jobs": [
	{
		"employer": "Blackberry",
		"title": "Beta Software Analyst(Intern)",
		"dates": "January 2015 - April 2015 (4 months)",
		"location": "Waterloo, Ontario, Canada",
		"description": "Analyse bug reports and then triaged them to appropriate software development teams"
	},
	{
		"employer": "Udacity",
		"title": "Code Reviewer",
		"dates": "February 2015 - Present",
		"location": "MountainView, California, USA",
		"description": "Reviewed student submitted project and provided them with feedback to improve code skills" 
	},
	{
		"employer": "Max of Manila Restaurant",
		"title": "Management Trainee/Marketing Coordinator",
		"dates": "2012 - 2013",
		"location": "Vaughn, Ontario, Canada",
		"description": "Stepped in numerous role such as dishwasher, busboy, cashier, " +
		"server, stock manager, vendor negotiator, marketing coordinator " +
		"to learn different aspects of the restaurant so that I understand how to manage colleagues at work." 
	},
	{
		"employer": "San Miguel Canada Corporation",
		"title": "Marketing Executive",
		"dates": "2012 - 2013",
		"location": "Vaughn, Ontario, Canada",
		"description": "The first employee of a startup beer company, basically organized and attended beer show events." 
	},
	{
		"employer": "Advanced Basketball Canada",
		"title": "Assistant Basketball Coach",
		"dates": "2011 - 2014",
		"location": "Oakville, Ontario, Canada",
		"description": "Assisted in coaching youth to highschool kids for basketball camps and games." 
	},
	{
		"employer": "City of Missisauga",
		"title": "Youth Basketball Coach",
		"dates": "2007 - 2012",
		"location": "Missisauga, Ontario, Canada",
		"description": "Planned, organized, and executed activities to enhance and teach basketball skills to youths attending camp." 
	},
	{
		"employer": "City of Missisauga",
		"title": "Program Leader",
		"dates": "2007 - 2012",
		"location": "Missisauga, Ontario, Canada",
		"description": "Organized, facilitated, and executed activities that the community center provided for their recreation and leisure seeking customers." 
	},
	{
		"employer": "City of Missisauga",
		"title": "Sports Referee",
		"dates": "2007 - 2012",
		"location": "Missisauga, Ontario, Canada",
		"description": "Officiated sports games such as, dodgeball, basketball, volleyball." 
	},
  ]
}

var projects = {
	"projects": [
	{ 
		"title": "Portfolio",
		"dates": 2015,
		"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree.",
		"images": ["images/portfolio.jpg"],
		"url": "https://github.com/charlesakio/portfolio/tree/master/udacity_portfolio"
	},
	{ 
		"title": "Flask blog",
		"dates": 2015,
		"description": "Taught myself Flask by creating a basic blog app.",
		"images": ["images/flask.jpg"],
		"url": "http://charlesjavelona.pythonanywhere.com/"
	},
	{ 
		"title": "Blog engine",
		"dates": 2014,
		"description": "Created a basic content management system using Python",
		"images": ["images/blogShot.jpg"],
		"url": "http://charlesjavelona.appspot.com/blog"
	},
	{ 
		"title": "Wiki engine",
		"dates": 2014,
		"description": "Built a website from scratch that can mimic wikipedia using Python",
		"images": ["images/wikiShot.jpg"], 
		"url": "http://buildawiki.appspot.com/"
	},
	{ 
		"title": "Toastmasters club",
		"dates": 2014,
		"description": "A club that I started in my school aimed to enhance members communication skills",
		"images": ["images/toastShot.jpg"],
		"url": "http://sbo.toastmastersclubs.org/"
	}
  ]
}


///////////////////////////////////////////
//Modularize code by creating functions //
//////////////////////////////////////////

bio.display = function() {
	//Access the bio name and display them in the index.html page
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	//Access the bio role and display them in the index.html page!!!!!
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	//Access the welcome message and display it in the index.html page
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg)
	//Access the picture and display it in the index.html page
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);

	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


	//Append the objects in their respective classes and tags
	//Prepend is use for name and role because it organizes contacts
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(formattedbioPic);

	// Access the object bio and add all the skills in bio.skills array.
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}

	//Access the array object formattedContactInfo and append the objects 
	for(contact in formattedContactInfo) {
		$("#topContacts").append(formattedContactInfo[contact]);
		$("#footerContacts").append(formattedContactInfo[contact]);
	}
}

//Define function projects.display(), it displays the Work objects 
work.display = function() {

	//Write a for-in loop that iterates jobs
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

//Define function displayProject, and display the Projects objects 
projects.display = function() {
	if(projects.projects.length > 0) {
		for(project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url); 
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates); 
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}

		}
	}
}

//Define function displayEducation, and display the Eduaction objects
education.display = function() {
	if(education.schools.length > 0) {
		for(school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	

	if(education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for(course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
}



//Define function clickMetrics that locates all user clicks
function clickMetrics() { 
	$(document).click(function(loc) {
		var x = loc.pageX;
		var y = loc.pageY;

		logClicks(x, y);
	});
}

///////////////////////////////////
///Calling the functions section//
//////////////////////////////////

//Execute bio.display();
bio.display();

//Execute work.display();
work.display();

//Execute projects.display();
projects.display();

//Execute education.display();
education.display();

//Execute clickMetrics()
clickMetrics();


//Add google maps
$("#mapDiv").append(googleMap);



/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'Java',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2013, 10]]
			},
			{
				name: 'Python',
				color: 'rgba(119, 152, 191, .5)',
				data: [[2014, 4], [2015, 4]]
			},
			{
				name: 'Flask',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2015, 2]]
			},
			{
				name: 'Javascript',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2015, 1]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2014, 4], [2015, 4]]
			},
			{
				name: 'Linux',
				color: 'rgba(0, 153, 102, .5)',
				data: [[2014, 9]]
			},
			{
				name: 'Django',
				color: 'rgba(204, 102, 0, .5)',
				data: [[2015, 3]]
			},
			{
				name: 'Perl',
				color: 'rgba(210, 200, 0, .5)',
				data: [[2013, 3]]
			}]
	});
});

