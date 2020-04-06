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

shotput = Experience(
  "Shotput",
  [2016, 2016],
  "Backend Developer",
  {
    "technologies": [
      "Flask", "SQLAlchemy", "supervisor", "AngularJS"
    ],
    "responsibilities": [
      ("Write, maintain, and handle endpoints for the API."),
      ("Work with sales team to meet client needs")
    ]
  })

honor = Experience(
  "Honor",
  [2016, 2019],
  "Sr. Software Engineer",
  {
    "technologies": [
      "Flask", "Pandas/ETL", "Apache Thrift", "React", "AWS"
    ],
    "responsibilities": [
      "Lead small teams to develop new products, working with designers and PMs",
      "Act as a liaison between the data and the product team",
      "Write, maintain, review and plan major product features."
    ]
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
  [train_all, pitch_it, co2_emissions, pixie_report], experience=[honor, shotput])


#### The Meat of it all

stephanie.personal_statement = """
I got my degree in environmental science and after working for the Virginia department of Environmental Quality made an opportunistic career change into Software Engineering. I remain passionate about reducing anthropogenic carbon emissions.
I've got experience developing in small teams and over the last several years I have grown into a senior software engineer working with individuals who are passionate about not only producing high quality code, but also remaining empathetic to the individuals and groups the software serves. I now intend to balance the knowledge I gained from my formal education with the practical skills I've gained in the workforce to make a lasting impact on sustainability.
In my own time I have put significant effort into researching the economically viable ways to make an impact on climate change. I think it's important to not only consider what individuals can do on a personal level, but also how to update the underlying infrastructure in a way that is sustainable not just for the environment but for the global economy.
If you ask any of my previous employers they will say I am quick to learn, hard working, and passionate. I am driven to keep growing as an individual and find energy in helping others achieve their own success. I am looking for a small team that shares my passion to provide an impactful solution to climate change.
"""

pixie_report.purpose("After writing a few small web applications, most notably my training log app and an art portfolio for my sister, I decided I wanted to create an easy to plug in analytics application that required little to no learning of a new technology. Especially with my sister, who is not technical, my goal was to make it as user friendly as possible.")
train_all.purpose("Since 2001, I've been logging my workouts on an excel spreadsheet. But switching computers and moving around from place to place made it annoying to keep emailing the document back and forth to myself. So, I made it into a web application. I set it up so I, and other users, could upload their own excel spreadsheets into the database for their records, and then to visualize, sort, and track their yearly and daily workouts and races, and personally use it nearly everyday.")


########
# Runner
########

stephanie.display()

