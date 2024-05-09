import json

# Your original data, this could also be loaded from a file using json.load()

with open("./src/pages/data/airports.json", 'r') as file:
    # Load the JSON data from the file
    airports_data = json.load(file)


# Filtering the data for airports in Mississippi
filtered_airports = [airport for airport in airports_data if airport['iata'] in  [
"ATL",
"DFW",
"DEN",
"ORD",
"LAX",
"JFK",
"LAS",
"MCO",
"MIA",
"CLT",
"SEA",
"PHX",
"EWR",
"SFO",
"IAH",
"BOS",
"FLL",
"MSP",
"LGA",
"DTW",
"PHL",
"SLC",
"DCA",
"SAN",
"BWI",
"TPA",
"AUS",
"IAD",
"BNA",
"MDW",
"HNL",
"DAL",
"PDX",
"STL",
"HOU",
"SMF",
"MSY",
"RDU",
"SJC",
"SNA",
"OAK",
"RSW",
"SJU",
"MCI",
"SAT",
"CLE",
"IND",
"OGG",
"PIT",
"CVG",
"CMH",
"PBI",
"JAX",
"BUR",
"BDL",
"ONT",
"MKE",
"CHS",
"ANC",
"ABQ",
"BOI",
"OMA",
"MEM",
"RIC",
"RNO"]]

# Writing the filtered data to a new JSON file
with open("src/pages/data/filtered_airports.json", 'w') as file:
    json.dump(filtered_airports, file, indent=4)

print("Filtered airports saved to 'filtered_airports.json'")
