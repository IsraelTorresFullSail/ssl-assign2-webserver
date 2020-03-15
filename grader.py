import sys

class Grader:
    def outputGrade(self):
        name = raw_input("Please enter the student name: ")
        assignment = raw_input("Please enter assignment name: ")
        grade = float(raw_input("Please enter grade: "))
        if  grade <= 100 and grade >= 90:
            print("\r\n%s@fullsail.edu\r\nHere is your grade for %s assignment: A\r\nGrade details:\r\nYou have met all the requirements for full grade\r\n" % (name, assignment))
        elif grade <= 89.99 and grade >= 80:
            print("\r\n%s@fullsail.edu\r\nHere is your grade for %s assignment: B\r\nGrade details:\r\nIt looks like you are missing some of the functionality\r\n" % (name, assignment))
        elif grade <=79.99 and grade >= 70:
            print("\r\n%s@fullsail.edu\r\nHere is your grade for %s assignment: C\r\nGrade details:\r\nIt looks like you are missing most of the functionality\r\n" % (name, assignment))
        elif grade <= 69.99 and grade >= 60:
            print("\r\n%s@fullsail.edu\r\nHere is your grade for %s assignment: D\r\nGrade details:\r\nIt looks like you are missing most of the functionality\r\n" % (name, assignment))
        elif grade < 60:
            print("\r\n%s@fullsail.edu\r\nHere is your grade for %s assignment: F\r\nGrade details:\r\nIt looks like you are missing all of the functionality\r\n" % (name, assignment))
        else:
            print("\r\nPlease enter a valid value of grade between 0-100\r\n")

myGrader = Grader()
print(myGrader.outputGrade())