###############
# Stephanie Hutson
# Software Developer
# copy and paste me into coderpad.io and run me as Python, or run python in your command line, paste and press enter.
###############
# Because who wants a cover letter, when you can have a cover-app
###############

import webbrowser
import cgi


class Person:
  def __init__(self, name, email, skills=[], education=[], projects=[],
                company = None, experience=[]):
    self.name = name
    self.email = email
    self.skills = skills
    self.education = education
    self.projects = projects
    self.company = company
    self.experience = experience

  def add_skill(self, skill):
    self.skills.append(skill)

  def add_project(self, project):
    self.projects.append(project)

  def display(self):
    print self.name, "\n" ,self.email, "\n",breaker
    print "SKILLS:"
    for skill in self.skills:
      print "-",skill
    print breaker
    print "EDUCATION:"
    for education in self.education:
      print "-",education.name,"-",education.year,"-",education.subject
    print breaker
    print "PROJECTS:"
    for project in self.projects:
      print "*",project.name
      print "---",project.description
      print "---",(", ").join(project.stack)
      if project.url != None: print "--- hosted at:",project.url
      print "--- Source Code:", project.github
    print breaker
    print "EXPERIENCE:"
    for role in self.experience:
      print "*", role.company
      print "--- {} : {}-{}".format(role.title, role.years[0], role.years[1])
      for k,v in role.description.iteritems():
        print "--- {}:".format(k)
        for points in v:
          print "--- --- {}".format(points)
    print "\n"

class Education:
  def __init__(self, name, year, subject):
    self.name = name
    self.year = year
    self.subject = subject

class Experience:
  def __init__(self, company, years, title, description={}):
    self.company = company
    self.years = years
    self.description = description
    self.title = title

class Project:
  def __init__(self, options={}):
    self.name = options["name"]
    self.description = options["description"]
    self.stack = options["stack"]
    self.url = options["url"]
    self.github = options["github"]

  def deploy(self, url):
    self.url = url

  def purpose(self, purpose):
    self.why = purpose

########
# Seed
########
breaker = "_"* 20


### The Background

dev_bootcamp = Education("Dev Bootcamp", 2015, "Software Development")
pvcc = Education("Piedmont Virginia Community College", 2014, "Computer Science")
univeristy_of_virginia = Education("University of Virginia", 2012, "Environmental Sciences & Archaeology")
univeristy_of_edinburgh = Education("University of Edinburgh", 2011, "GeoSciences")

### Experience

shotput = Experience("Shotput", [2016, "Present"], "Backend Developer",
                        {"technologies": ["Flask", "SQLAlchemy", "supervisor",
                                          "AngularJS"],
                         "responsibilities": [("Write, maintain, and handle "
                                               "endpoints for the API."),("Work"
                                               " with sales team to meet client"
                                               "needs")]
                        })

### The Portfolio

pixie_report = Project({"name": "Pixie Report", "description": "web analytics site connecting non-tech people with thier site visitors", "stack": ["rails", "api", "d3.js"], "url": "http://pixiereport.herokuapp.com", "github": "http://github.com/pixieanalytics"})
train_all = Project({"name": "Train-All", "description":"a place to log your workouts and visualize your progress", "stack": ["Sinatra", "Google Charts", "jquery"], "url":"http://train-all.herokuapp.com", "github":"http://github.com/triathloncodes/training-log"})
pitch_it = Project({"name": "Pitch It", "description": "an entrepreneur's first opportunity to pitch and get feedback", "stack": ["rails", "rails API", "react", "react native", "twitter API", "CORS", "REST"], "url": "http://gopitchit.herokuapp.com", "github": "http://github.com/thepitch"})
co2_emissions = Project({"name": "CO2 Emissions", "description": "a first look at R, and an exploration of the global CO2 emission rates per capita", "stack": ["R", "shiny"], "url": None, "github":"https://github.com/TriathlonCodes/Beginning-R-CO2-data-exploration"})
stephanie = Person("Stephanie Hutson", "stephanie.m.hutson@gmail.com",
  ["Python", "Ruby", "JavaScript", "R", "MVC", "REST", "data",
  "Object-Oriented Programming"],
  [dev_bootcamp, pvcc, univeristy_of_virginia, univeristy_of_edinburgh],
  [train_all, pitch_it, co2_emissions, pixie_report], experience=[shotput])


#### The Meat of it all

stephanie.personal_statement=("I started prgramming as a pre-teen, and after a "
  "decade of toying - laced into a life of science, sport, and entrepreneurship"
  " - and a year and a half of focused study, I now find myself able to build "
  "applications from the ground up and as excited as ever to learn, grown, and "
  "build. I have a passion for working with data through data visualization and"
  " backend data management. I love taking a pile of information, be it from a"
  " mongoDB, a CSV, or a relational database, and turn it into something "
  "meaningful. \n\nMy background in environmental science lends a unique set "
  "of skills and understanding about the physical world, while my experience as"
  " a small business owner and in anthropology/archaeology helps me understand"
  " clients' needs, and the human aspect of an application.")

pixie_report.purpose("After writing a few small web applications, most notably my training log app and an art portfolio for my sister, I decided I wanted to create an easy to plug in analytics application that required little to no learning of a new technology. Especially with my sister, who is not technical, my goal was to make it as user friendly as possible.")
train_all.purpose("Since 2001, I've been logging my workouts on an excel spreadsheet. But switching computers and moving around from place to place made it annoying to keep emailing the document back and forth to myself. So, I made it into a web application. I set it up so I, and other users, could upload their own excel spreadsheets into the database for their records, and then to visualize, sort, and track their yearly and daily workouts and races, and personally use it nearly everyday.")


########
# Runner
########

stephanie.display()

