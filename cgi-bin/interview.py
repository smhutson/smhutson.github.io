from resume import (stephanie, breaker)
import webbrowser

class Employer:
  def __init__(self, employees=[]):
    self.employees = employees

  def interview(self, employee):
    message = '''
    Why should we consider you? \n {breaker}
    \t employee.personal_statement \n
    How did you come up with {}?\n\t {} \n
    And what about {}?\n\t{}\n
    '''.format(employee.personal_statement, employee.projects[-1].name,
               employee.projects[-1].why, employee.projects[0].name,
               employee.projects[0].why, breaker=breaker)
    print message
    hired = raw_input("Do you want to proceeed with the hiring process?"
                      "(Y/N): ")
    if hired in ["Y", "y", "yes", "Yes", "YES"]:
      self.hire(employee)
    else:
      print "Sorry to hear that. Better luck next time!"

  def hire(self, employee):
    self.employees.append(employee)
    employee.company = self
    print ("Congratulations on your new hire! {} is looking forward to joining "
           "the team.").format(employee.name.split(" ")[0])

  def openDemos(self, employee):
    project_id = None
    print ("Note: the opening of the applications will not work in coderpad, "
           "but the links are provided")
    while project_id != "finished":
      for i,project in enumerate(employee.projects):
        print i,":",project.name
      project_id = raw_input("Which project would you like to view? Please "
                             "select a number, or type 'finished'\n")
      if project_id in ["0", "1","2","3"]:
        url = employee.projects[int(project_id)].url
        if url == None:
          url = employee.projects[int(project_id)].github
        print "Opening",url+"..."
        webbrowser.open(url)
        print breaker
      elif project_id != "finished":
        print "I'm sorry, I do not understand. Please try again."

employer = Employer()
employer.interview(stephanie)
employer.openDemos(stephanie)
