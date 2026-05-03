from password_logic import calculate_strength, generate_password, get_characters


def ask_yes_or_no(message):
    answer = input(message + " s/n: ")

    if answer == "s":
        return True
    else:
        return False


def show_strength(score):
    labels = ["Muito fraca", "Fraca", "Ok", "Boa", "Forte", "Muito forte"]
    print("Forca da senha:", labels[score])


def run_generator():
    print("Password Generator - Python")

    try:
        size = int(input("Digite o tamanho da senha: "))
    except ValueError:
        print("Digite apenas numeros.")
        return

    if size < 4:
        print("O tamanho minimo e 4.")
        return

    use_uppercase = ask_yes_or_no("Usar letras maiusculas?")
    use_lowercase = ask_yes_or_no("Usar letras minusculas?")
    use_numbers = ask_yes_or_no("Usar numeros?")
    use_symbols = ask_yes_or_no("Usar simbolos?")

    characters = get_characters(use_uppercase, use_lowercase, use_numbers, use_symbols)

    if len(characters) == 0:
        print("Escolha pelo menos um tipo de caractere.")
        return

    password = generate_password(size, characters)
    score = calculate_strength(size, use_uppercase, use_lowercase, use_numbers, use_symbols)

    print("Senha gerada:", password)
    show_strength(score)


if __name__ == "__main__":
    run_generator()
