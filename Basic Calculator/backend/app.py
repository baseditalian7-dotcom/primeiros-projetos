from calculator import calculate


def show_menu():
    print("\nBasic Calculator")
    print("1 - Somar")
    print("2 - Subtrair")
    print("3 - Multiplicar")
    print("4 - Dividir")


def choose_operation(option):
    if option == "1":
        return "add"
    elif option == "2":
        return "subtract"
    elif option == "3":
        return "multiply"
    elif option == "4":
        return "divide"
    else:
        return ""


def run_calculator():
    show_menu()

    first_number = float(input("Digite o primeiro numero: "))
    second_number = float(input("Digite o segundo numero: "))
    option = input("Escolha uma opcao: ")

    operation = choose_operation(option)

    if operation == "":
        print("Opcao invalida.")
    else:
        result = calculate(first_number, second_number, operation)
        print("Resultado:", result)


if __name__ == "__main__":
    run_calculator()
