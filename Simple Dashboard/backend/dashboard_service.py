from datetime import datetime


def calculate_conversion(sales, visitors):
    if visitors == 0:
        return 0

    return round((sales / visitors) * 100, 2)


def calculate_average_ticket(revenue, sales):
    if sales == 0:
        return 0

    return round(revenue / sales, 2)


def find_metric_by_period(metrics, period):
    for metric in metrics:
        if metric["period"] == period:
            return metric

    return None


def get_best_day(daily_revenue):
    best_day = daily_revenue[0]

    for day in daily_revenue:
        if day["revenue"] > best_day["revenue"]:
            best_day = day

    return best_day


def get_channel_ranking(channels):
    return sorted(channels, key=lambda channel: channel["revenue"], reverse=True)


def build_summary(metric):
    conversion = calculate_conversion(metric["sales"], metric["visitors"])
    average_ticket = calculate_average_ticket(metric["revenue"], metric["sales"])

    return {
        "period": metric["period"],
        "revenue": metric["revenue"],
        "sales": metric["sales"],
        "visitors": metric["visitors"],
        "conversion": conversion,
        "average_ticket": average_ticket
    }


def build_report(metric, channels, daily_revenue):
    summary = build_summary(metric)
    best_day = get_best_day(daily_revenue)
    ranking = get_channel_ranking(channels)

    lines = [
        "Simple Dashboard Report",
        "Generated at: " + datetime.now().strftime("%d/%m/%Y %H:%M"),
        "",
        "Period: " + summary["period"],
        "Revenue: R$ " + str(summary["revenue"]),
        "Sales: " + str(summary["sales"]),
        "Visitors: " + str(summary["visitors"]),
        "Conversion: " + str(summary["conversion"]) + "%",
        "Average ticket: R$ " + str(summary["average_ticket"]),
        "",
        "Best day: " + best_day["day"] + " - R$ " + str(best_day["revenue"]),
        "",
        "Channel ranking:"
    ]

    for index, channel in enumerate(ranking):
        line = str(index + 1) + ". " + channel["name"] + " - R$ " + str(channel["revenue"])
        lines.append(line)

    return "\n".join(lines)


def save_report(report, file_name):
    with open(file_name, "w") as file:
        file.write(report)
