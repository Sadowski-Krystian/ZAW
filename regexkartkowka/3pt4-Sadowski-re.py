
import re
pattern = re.compile("([/])([a-z]+-[a-zA-Z]{2,4})([/])([\d]+)([/])([1-5][a-z]{2}[4,5])")
print(pattern.match('/course-zaw/22/3pt4'))#true
print(pattern.match('/course-prog/2x2/p3t4'))#false

print('-----------------------------------')

pattern2 = re.compile("([1-5][a-zA-Z]{2}[4,5])-([a-zA-Z]{2,4})-([a-zA-Z]+-[a-zA-Z]+)")

txt = '3PT4-ZAW-re-krt'

result = pattern2.match(txt)

print(result[1])
print(result[2])
print(result[3])

print('-----------------------------------')

pattern3 = re.compile("([\S\D]+)-(\d{4})-(\d{4})")

line = 'Nazwisko-0000-0001, "2022-04-05 12:15:51"'

result2 = pattern3.match(line)
number = result2.group(3)
number = int(number)
number = number + 1
number = str(number)
number = number.zfill(4)
date = line.split(',')


newline = result2[1]+'-'+result2[2]+'-'+number+date[1]

print(newline)

print('-----------------------------------')