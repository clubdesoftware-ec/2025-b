def max2(a, b):
    if a > b:
        return a
    else:
        return b

numeros = [2, 342, 123, 5503, 1]
mayor_hasta_ahora = numeros[0]
for num in numeros:
    mayor_hasta_ahora = max2(mayor_hasta_ahora, num)
print(mayor_hasta_ahora)
