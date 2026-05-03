def show_question(question, number, total):
    print()
    print("Pergunta", number, "de", total)
    print("Categoria:", question["category"])
    print(question["question"])

    for index, answer in enumerate(question["answers"]):
        print(index + 1, "-", answer)


def check_answer(question, user_answer):
    if user_answer == question["correct"]:
        return True
    else:
        return False


def calculate_percentage(score, total):
    return int((score / total) * 100)


def show_final_message(score, total):
    percentage = calculate_percentage(score, total)

    print()
    print("Pontuacao final:", score, "de", total)
    print("Porcentagem:", str(percentage) + "%")

    if score == total:
        print("Excelente. Voce acertou tudo.")
    elif score >= 3:
        print("Boa. Voce foi bem.")
    else:
        print("Continue praticando.")
