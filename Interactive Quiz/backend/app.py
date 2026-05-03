from questions import questions
from quiz_logic import check_answer, show_final_message, show_question


def run_quiz():
    score = 0
    total = len(questions)

    print("Interactive Quiz - Python")

    for index, question in enumerate(questions):
        show_question(question, index + 1, total)

        try:
            user_answer = int(input("Escolha uma resposta: "))
        except ValueError:
            print("Resposta invalida. Essa pergunta foi considerada errada.")
            continue

        if user_answer < 1 or user_answer > len(question["answers"]):
            print("Opcao fora da lista. Essa pergunta foi considerada errada.")
        elif check_answer(question, user_answer):
            print("Correto!")
            score += 1
        else:
            print("Errado.")

    show_final_message(score, total)


if __name__ == "__main__":
    run_quiz()
