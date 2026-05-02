from game_logic import choice_names, decide_winner, get_ai_choice, get_player_choice, show_choices


def show_score(score):
    print("\nPlacar")
    print("Jogador:", score["jogador"])
    print("IA fake:", score["ia"])
    print("Empates:", score["empate"])


def play_round(score):
    show_choices()
    option = input("Escolha uma opcao: ")
    player_choice = get_player_choice(option)

    if player_choice == "":
        print("Opcao invalida.")
        return

    ai_choice = get_ai_choice()
    winner = decide_winner(player_choice, ai_choice)

    print("Voce escolheu:", choice_names[player_choice])
    print("IA fake escolheu:", choice_names[ai_choice])

    if winner == "jogador":
        print("Voce venceu!")
        score["jogador"] += 1
    elif winner == "ia":
        print("IA fake venceu!")
        score["ia"] += 1
    else:
        print("Empate!")
        score["empate"] += 1


def run_game():
    score = {
        "jogador": 0,
        "ia": 0,
        "empate": 0
    }

    option = ""

    while option != "3":
        print("\nRock Paper Scissors - Python")
        print("1 - Jogar rodada")
        print("2 - Ver placar")
        print("3 - Sair")

        option = input("Escolha uma opcao: ")

        if option == "1":
            play_round(score)
        elif option == "2":
            show_score(score)
        elif option == "3":
            print("Jogo encerrado.")
        else:
            print("Opcao invalida.")


if __name__ == "__main__":
    run_game()
