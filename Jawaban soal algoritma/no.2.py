def kata_terpanjang(kalimat):
    kata = kalimat.split()
    
    kata_split = max(kata, key=len)
    
    panjang_kalimat = len(kata_split)
    
    return kata_split, panjang_kalimat

kalimat = "Saya sangat senang mengerjakan soal algoritma"
word, length = kata_terpanjang(kalimat)
print(f"{word}: {length} character")
