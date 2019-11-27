import json
with open("alpha23.json", 'r', encoding="utf-8") as f:
        datastore = json.load(f)
        dic={}
        for el in datastore:
            dic.update({el["name"]:(el["alpha-3"],el["alpha-2"])})
        print(dic)
        