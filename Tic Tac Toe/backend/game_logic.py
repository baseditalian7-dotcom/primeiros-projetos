winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


def create_board():
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9"]


def show_board(board):
    print()
    print(board[0], "|", board[1], "|", board[2])
    print("--+---+--")
    print(board[3], "|", board[4], "|", board[5])
    print("--+---+--")
    print(board[6], "|", board[7], "|", board[8])
    print()


def is_position_free(board, position):
    return board[position] != "X" and board[position] != "O"


def make_move(board, position, player):
    if is_position_free(board, position):
        board[position] = player
        return True
    else:
        return False


def check_winner(board):
    for combination in winning_combinations:
        first = combination[0]
        second = combination[1]
        third = combination[2]

        if board[first] == board[second] and board[second] == board[third]:
            return board[first]

    return ""


def check_draw(board):
    for item in board:
        if item != "X" and item != "O":
            return False

    return True
