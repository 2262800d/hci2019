import json
with open("country_codes.json", 'r', encoding="utf-8") as f:
        datastore = json.load(f)
        dic={}
        for el in datastore:
            dic.update({el["name"]:el["alpha-3"]})
        print(dic)
        