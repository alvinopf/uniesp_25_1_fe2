
# Obtenha dados da altura e o gênero (Masculino ou Feminino) de 15 pessoas e apresente os seguintes resultados:
# - A maior e a menor altura do grupo;
# - A média de altura das pessoas do gênero Masculino;
# - O número de pessoas do gênero Feminino.
# Para o desenvolvimento da atividade, o aluno deve utilizar a linguagem de programação que desejar. 
# Após o término da atividade, o aluno deve disponibilizar o link do seu github com a resposta.

# criar uma lista de 15 pessos perguntando altura e genero

def main():
    
    pessoas = []

    for i in range(3):
        print(f"pessoa {i + 1}")
        altura = float(input("Digite a sua altura em metros (ex: 1.80): ").strip().replace(",","."))
        genero = input("Digite o seu genero (apenas M ou F): ").strip().upper()
        pessoas.append({"altura": altura, "genero": genero})

    # exibir a lista criada

    # print("n\Lista de pessoas:")
    # for pessoa in pessoas:
    #     print(pessoa)

    # buscar na lista e exibir qual a maior altura

    maior_altura = max(pessoas, key=lambda p: p["altura"])
    print(f"\nA maior altura na lista é {maior_altura["altura"]:.2f}".replace(".",",") + " metros!")

    # buscar na lista e exibir qual a menor altura

    menor_altura = min(pessoas, key=lambda p: p["altura"])
    print(f"\nA menor altura na lista é {menor_altura["altura"]:.2f}".replace(".",",") + " metros!")

    # somar na lista e exibir pessoas do sexo feminino

    mulheres = sum(1 for p in pessoas if p['genero'] == "F")
    print(f"\nO número de mulheres na lista é: {mulheres}!")

    # somar as 15 alturas e dividir por 15

    soma_altura = sum(p["altura"] for p in pessoas)
    media_altura = soma_altura/len(pessoas)
    print(f"\nA média das alturas das pessoas na lista é: {media_altura:.2f}".replace(".",",") + " metros!\n")

if __name__ == '__main__':
    main()