from task_service import create_task, delete_task, list_tasks, toggle_task


def show_menu():
    print("\nSimple Todo List")
    print("1 - Ver tarefas")
    print("2 - Adicionar tarefa")
    print("3 - Marcar/desmarcar tarefa")
    print("4 - Remover tarefa")
    print("5 - Sair")


def show_tasks():
    tasks = list_tasks()

    if len(tasks) == 0:
        print("Nenhuma tarefa cadastrada.")
    else:
        for task in tasks:
            status = "Concluida" if task["done"] else "Pendente"
            print(f'{task["id"]} - {task["title"]} ({status})')


def run_todo_list():
    option = ""

    while option != "5":
        show_menu()
        option = input("Escolha uma opcao: ")

        if option == "1":
            show_tasks()
        elif option == "2":
            title = input("Digite a tarefa: ")

            if title == "":
                print("A tarefa nao pode ficar vazia.")
            else:
                create_task(title)
                print("Tarefa adicionada.")
        elif option == "3":
            task_id = int(input("Digite o id da tarefa: "))
            task = toggle_task(task_id)

            if task is None:
                print("Tarefa nao encontrada.")
            else:
                print("Status alterado.")
        elif option == "4":
            task_id = int(input("Digite o id da tarefa: "))
            deleted = delete_task(task_id)

            if deleted:
                print("Tarefa removida.")
            else:
                print("Tarefa nao encontrada.")
        elif option == "5":
            print("Programa encerrado.")
        else:
            print("Opcao invalida.")


if __name__ == "__main__":
    run_todo_list()
