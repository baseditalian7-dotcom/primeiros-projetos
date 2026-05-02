import random


choices = ["pedra", "papel", "tesoura"]

choice_names = {
    "pedra": "Pedra",
    "papel": "Papel",
    "tesoura": "Tesoura"
}

winning_rules = {
    "pedra": "tesoura",
    "papel": "pedra",
    "tesoura": "papel"
}


def show_choices():
    print("1 - Pedra")
    print("2 - Papel")
    print("3 - Tesoura")


def get_player_choice(option):
    if option == "1":
        return "pedra"
    elif option == "2":
        return "papel"
    elif option == "3":
        return "tesoura"
    else:
        return ""


def get_ai_choice():
    return random.choice(choices)


def decide_winner(player_choice, ai_choice):
    if player_choice == ai_choice:
        return "empate"
    elif winning_rules[player_choice] == ai_choice:
        return "jogador"
    else:
        return "ia"
