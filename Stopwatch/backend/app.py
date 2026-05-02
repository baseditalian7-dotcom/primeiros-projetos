import time

from stopwatch_logic import format_time, get_elapsed_time, show_laps


def show_menu():
    print("\nStopwatch - Python")
    print("1 - Start")
    print("2 - Pause")
    print("3 - Reset")
    print("4 - Registrar volta")
    print("5 - Ver tempo")
    print("6 - Sair")


def run_stopwatch():
    start_time = 0
    saved_time = 0
    running = False
    laps = []
    option = ""

    while option != "6":
        show_menu()
        option = input("Escolha uma opcao: ")

        if option == "1":
            if running:
                print("O cronometro ja esta rodando.")
            else:
                start_time = time.time()
                running = True
                print("Cronometro iniciado.")
        elif option == "2":
            if running:
                saved_time = get_elapsed_time(start_time, saved_time, running)
                running = False
                print("Cronometro pausado em", format_time(saved_time))
            else:
                print("O cronometro ja esta pausado.")
        elif option == "3":
            start_time = 0
            saved_time = 0
            running = False
            laps = []
            print("Cronometro resetado.")
        elif option == "4":
            current_time = get_elapsed_time(start_time, saved_time, running)
            lap_time = format_time(current_time)
            laps.append(lap_time)
            print("Volta registrada:", lap_time)
        elif option == "5":
            current_time = get_elapsed_time(start_time, saved_time, running)
            print("Tempo atual:", format_time(current_time))
            show_laps(laps)
        elif option == "6":
            print("Programa encerrado.")
        else:
            print("Opcao invalida.")


if __name__ == "__main__":
    run_stopwatch()
