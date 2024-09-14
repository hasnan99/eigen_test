def hitung_query(INPUT, QUERY):
    result = {}
    
    for query in QUERY:
        result[query] = INPUT.count(query)
    
    return result

INPUT = ["xc", "dz", "bbb", "dz"]
QUERY = ["bbb", "ac", "dz"]

result = hitung_query(INPUT, QUERY)

print(result)
