import csv
mortality = {}
with open('number-of-deaths-by-risk-factor.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
           # print(f'\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.')
            #print(f'\t{row[0]} in {row[2]} year from smoking died {row[23]}.')
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
    print(csv_reader)
    line_count = 0
    
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
            first_row=row
        else:
           # print(f'\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.')
            #print(f'\t{row[0]} in {row[2]} year from smoking died {row[23]}.')
            country = row[0]
            deaths={}
            for i in range(1,len(row)):
                deaths.update({first_row[i]:row[i]})
            world_deaths.update({country:deaths})
            line_count += 1
    print(f'Processed {line_count} lines.')
    print(mortality)