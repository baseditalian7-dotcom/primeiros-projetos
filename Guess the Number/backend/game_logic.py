import random


best_score_file = "best_score.txt"


def create_secret_number():
    return random.randint(1, 100)


def read_best_score():
    try:
        file = open(best_score_file, "r")
        best_score = file.read()
        file.close()

        if best_score == "":
            return 0
        else:
            return int(best_score)
    except FileNotFoundError:
        return 0


def save_best_score(attempts):
    best_score = read_best_score()

    if best_score == 0 or attempts < best_score:
        file = open(best_score_file, "w")
        file.write(str(attempts))
        file.close()
        return True
    else:
        return False


def show_guesses(guesses):
    if len(guesses) == 0:
        print("Nenhum palpite ainda.")
    else:
        print("Palpites:", guesses)


def check_guess(secret_number, guess):
    if guess == secret_number:
        return "correct"
    elif guess < secret_number:
        return "low"
    else:
        return "high"
