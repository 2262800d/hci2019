import csv
import json
mortality = {}
with open('number-of-deaths-by-risk-factor.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
        else:
            country = row[0]
            year = row[2]
            dead = float(row[23])
            if int(year)>=2000:
                if country not in mortality:
                    mortality.update({country:{year:dead}})
                else:
                    mortality[country][year]=dead

            line_count += 1
world_deaths = {}
with open('deaths _table.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    #print(csv_reader)
    line_count = 0
    
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
            first_row=row
        else:
            country = row[0]
            deaths={}
            for i in range(1,len(row)):
                deaths.update({first_row[i]:row[i]})
            world_deaths.update({country:deaths})
            line_count += 1
    #print(f'Processed {line_count} lines.')
    #print(world_deaths)

death_percentage={}
for country in mortality:
    if country in world_deaths:
        alldeaths = world_deaths[country]
        smokedeaths = mortality[country]
        for i in range(2000,2017):
            year = str(i)
            if alldeaths[year] == '' or alldeaths[year] == ' ':
                per = "null"
            else:
                #print(alldeaths[year])
                allval=float(alldeaths[year])
                smokeval = smokedeaths[year]
                per = (smokeval/allval)*100
            if country not in death_percentage:
                death_percentage.update({country:{year:per}})
            else:
                death_percentage[country][year]=per

print(json.dumps(death_percentage))

