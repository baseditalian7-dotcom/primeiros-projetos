from game_logic import check_guess, create_secret_number, read_best_score, save_best_score, show_guesses


def run_game():
    secret_number = create_secret_number()
    guesses = []
    attempts = 0
    game_running = True

    print("Guess the Number - Python")
    print("Tente adivinhar o numero secreto entre 1 e 100.")

    best_score = read_best_score()

    if best_score == 0:
        print("Ainda nao existe melhor pontuacao.")
    else:
        print("Melhor pontuacao:", best_score, "tentativas.")

    while game_running:
        try:
            guess = int(input("Digite seu palpite: "))
        except ValueError:
            print("Digite apenas numeros.")
            continue

        if guess < 1 or guess > 100:
            print("O numero precisa estar entre 1 e 100.")
            continue

        attempts += 1
        guesses.append(guess)

        result = check_guess(secret_number, guess)

        if result == "correct":
            print("Voce acertou!")
            print("Tentativas:", attempts)
            show_guesses(guesses)

            new_record = save_best_score(attempts)

            if new_record:
                print("Novo recorde salvo no arquivo best_score.txt.")

            game_running = False
        elif result == "low":
            print("Muito baixo. Tente um numero maior.")
            show_guesses(guesses)
        else:
            print("Muito alto. Tente um numero menor.")
            show_guesses(guesses)


if __name__ == "__main__":
    run_game()
