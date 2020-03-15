class Grader
    def outputGrade
        puts "Please enter the student name: "
        name = gets

        puts "Please enter assignment name: "
        assignment = gets

        puts "Please enter grade: "
        grade = gets.to_f

        if  grade <= 100 and grade >= 90
            print("\r\n"+name+"@fullsail.edu\r\nHere is your grade for "+assignment+" assignment: A\r\nGrade details:\r\nYou have met all the requirements for full grade\r\n")
        elsif grade <= 89.99 and grade >= 80
            print("\r\n"+name+"@fullsail.edu\r\nHere is your grade for "+assignment+" assignment: B\r\nGrade details:\r\nIt looks like you are missing some of the functionality\r\n")
        elsif grade <=79.99 and grade >= 70
            print("\r\n"+name+"@fullsail.edu\r\nHere is your grade for "+assignment+" assignment: C\r\nGrade details:\r\nIt looks like you are missing most of the functionality\r\n")
        elsif grade <= 69.99 and grade >= 60
            print("\r\n"+name+"@fullsail.edu\r\nHere is your grade for "+assignment+" assignment: D\r\nGrade details:\r\nIt looks like you are missing most of the functionality\r\n")
        elsif grade < 60
            print("\r\n"+name+"@fullsail.edu\r\nHere is your grade for "+assignment+" assignment: F\r\nGrade details:\r\nIt looks like you are missing all of the functionality\r\n")
        else
            print("\r\nPlease enter a valid value of grade between 0-100\r\n")
    end
end

myGrader = Grader.new
print(myGrader.outputGrade())
end