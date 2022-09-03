import os
import json

# merges all companies and converts rgb to hex
# colors = {}
# for company in os.listdir():
#     if(company == "main.py"):
#         break
#     f = open(company)
#     data = json.load(f)
#     for i in range(len(data)):
#         if(data[i]['hex'][0] != "#"):
#             if(data[i]['hex'][1] == "#"):
#                 data[i]['hex'] = data[i]['hex'][1:]
#             elif(data[i]['hex'][0] == "r"):
#                 rgb_values = [int(x) for x in (data[i]['hex'][3:].strip("()")).split(",")]
#                 data[i]['hex'] = ('#%02x%02x%02x' % (rgb_values[0], rgb_values[1], rgb_values[2]))
#             else:
#                 print("error")
#         data[i]['hex'] = data[i]['hex'].strip(" ")
#     colors[company.split(".")[0]] = data

# json_object = json.dumps(colors, indent=4)
# f = open("colors.json", "w")
# f.write(json_object)

# removes "#" from hex values
f = open("colors.json")
data = json.load(f)
f.close()
for company in data:
    for color in range(len(data[company])):
        data[company][color]['hex'] = data[company][color]['hex'][1:]
json_object = json.dumps(data, indent=4)
f = open("colors.json", "w")
f.write(json_object)