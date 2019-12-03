import json
with open("tobacco_prices.json", 'r', encoding="utf-8") as f:
         datastore = json.load(f)
         dic={}
         for el in datastore["fact"]:
            if el["dim"]["GHO"]=="Most sold brand of cigarettes - price in US$ at official exchange rates":
               country=el["dim"]["COUNTRY"]
               year=el["dim"]["YEAR"]
               try:
                  val=float(el["Value"])
               except:
                  val=""
               if country not in dic:
                  dic.update({country:{year:val}})
               else:
                  dic[country][year]=val
print(json.dumps(dic))