import csv
world_deaths = {}
with open('deaths_table.csv') as csv_file:
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
            deaths={}
            for i in range(1,len(row)):
                deaths.update({csv_reader[0][i]:float(row[i])})
            world_deaths.update({country:deaths})
            line_count += 1
print(world_deaths)