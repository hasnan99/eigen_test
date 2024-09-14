def reverse_alphabet(a):
    letters = ''.join([char for char in a if char.isalpha()])
    numbers = ''.join([char for char in a if char.isdigit()])
    
    reversed_letters = letters[::-1]
    
    return reversed_letters + numbers

a = "NEGIE1"
result = reverse_alphabet(a)
print(result)
