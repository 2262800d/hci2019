import json
with open("tobacco_data.json", 'r', encoding="utf-8") as f:
        datastore = json.load(f)
        dic={}
        for el in datastore["fact"]:
            if el["dims"]["GHO"]=="Prevalence of smoking any tobacco product among persons aged >= 15 years":
                country=el["dims"]["COUNTRY"]
                year=el["dims"]["YEAR"]
                sex=el["dims"]["SEX"]
                val=float(el["Value"][0:el["Value"].index('[')-1])
                if country not in dic:
                    dic.update({country:{year:val}})
                
                else:
                    if year not in dic[country]:
                         dic[country].update({year:val})   
                    else:
                        temp=dic[country]
                    
                        temp[year]=temp[year]+float(el["Value"][0:el["Value"].index('[')-1])
                
        #print(dic)
        print(json.dumps(dic))