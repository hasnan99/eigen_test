def hitung_matrix(matrix):
    n = len(matrix) 
    diagonal_pertama = 0
    diagonal_kedua = 0

    isi_diagonal_pertama = []
    isi_diagonal_kedua = []
    
    for i in range(n):
        isi_diagonal_pertama.append(matrix[i][i])
        isi_diagonal_kedua.append(matrix[i][n-i-1])
        diagonal_pertama += matrix[i][i]  
        diagonal_kedua += matrix[i][n-i-1]

    print("Diagonal pertama = " + ' + '.join(map(str, isi_diagonal_pertama)) + f" = {diagonal_pertama}")
    print("Diagonal kedua = " + ' + '.join(map(str, isi_diagonal_kedua)) + f" = {diagonal_kedua}")
    result = abs(diagonal_pertama - diagonal_kedua)
    print(f"Hasil {diagonal_pertama} - {diagonal_kedua} = {result}")
    return result
    

matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
]
hitung_matrix(matrix)

