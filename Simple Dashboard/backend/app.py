from dashboard_service import build_report, build_summary, find_metric_by_period, get_best_day, get_channel_ranking, save_report
from data import channels, daily_revenue, metrics


def show_menu():
    print("\nSimple Dashboard - Python")
    print("1 - Ver resumo do mes")
    print("2 - Ver melhor dia")
    print("3 - Ver ranking de canais")
    print("4 - Exportar relatorio")
    print("5 - Sair")


def show_summary():
    metric = find_metric_by_period(metrics, "month")
    summary = build_summary(metric)

    print("\nResumo do mes")
    print("Receita: R$", summary["revenue"])
    print("Vendas:", summary["sales"])
    print("Visitantes:", summary["visitors"])
    print("Conversao:", str(summary["conversion"]) + "%")
    print("Ticket medio: R$", summary["average_ticket"])


def show_best_day():
    best_day = get_best_day(daily_revenue)

    print("\nMelhor dia")
    print(best_day["day"], "- R$", best_day["revenue"])


def show_channel_ranking():
    ranking = get_channel_ranking(channels)

    print("\nRanking de canais por receita")

    for index, channel in enumerate(ranking):
        print(index + 1, "-", channel["name"], "- R$", channel["revenue"])


def export_report():
    metric = find_metric_by_period(metrics, "month")
    report = build_report(metric, channels, daily_revenue)
    save_report(report, "dashboard_report.txt")
    print("Relatorio salvo em dashboard_report.txt")


def run_dashboard():
    option = ""

    while option != "5":
        show_menu()
        option = input("Escolha uma opcao: ")

        if option == "1":
            show_summary()
        elif option == "2":
            show_best_day()
        elif option == "3":
            show_channel_ranking()
        elif option == "4":
            export_report()
        elif option == "5":
            print("Programa encerrado.")
        else:
            print("Opcao invalida.")


if __name__ == "__main__":
    run_dashboard()
