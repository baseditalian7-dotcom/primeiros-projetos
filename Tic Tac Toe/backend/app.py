from game_logic import check_draw, check_winner, create_board, make_move, show_board


def change_player(current_player):
    if current_player == "X":
        return "O"
    else:
        return "X"


def run_game():
    board = create_board()
    current_player = "X"
    winner = ""
    game_running = True

    print("Tic Tac Toe - Python")
    print("Escolha uma posicao de 1 a 9.")

    while game_running:
        show_board(board)
        print("Vez do jogador", current_player)

        choice = int(input("Digite a posicao: "))
        position = choice - 1

        if position < 0 or position > 8:
            print("Posicao invalida.")
        elif make_move(board, position, current_player):
            winner = check_winner(board)

            if winner != "":
                show_board(board)
                print("Jogador", winner, "venceu!")
                game_running = False
            elif check_draw(board):
                show_board(board)
                print("Empate!")
                game_running = False
            else:
                current_player = change_player(current_player)
        else:
            print("Essa posicao ja foi escolhida.")

    play_again = input("Deseja jogar novamente? s/n: ")

    if play_again == "s":
        run_game()
    else:
        print("Jogo encerrado.")


if __name__ == "__main__":
    run_game()
