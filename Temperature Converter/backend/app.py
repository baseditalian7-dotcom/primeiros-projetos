from converter_service import convert_temperature


def show_menu():
    print("\nTemperature Converter")
    print("1 - Celsius para Fahrenheit")
    print("2 - Fahrenheit para Celsius")


def run_converter():
    show_menu()

    temperature = float(input("Digite a temperatura: "))
    option = input("Escolha uma opcao: ")

    if option == "1":
        result = convert_temperature(temperature, "celsiusToFahrenheit")
        print(f"{temperature} C = {result} F")
    elif option == "2":
        result = convert_temperature(temperature, "fahrenheitToCelsius")
        print(f"{temperature} F = {result} C")
    else:
        print("Opcao invalida.")


if __name__ == "__main__":
    run_converter()
