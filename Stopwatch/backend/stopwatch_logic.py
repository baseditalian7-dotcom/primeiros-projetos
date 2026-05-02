import time


def format_time(seconds):
    minutes = int(seconds // 60)
    remaining_seconds = int(seconds % 60)

    return f"{minutes:02d}:{remaining_seconds:02d}"


def get_elapsed_time(start_time, saved_time, running):
    if running:
        return saved_time + (time.time() - start_time)
    else:
        return saved_time


def show_laps(laps):
    if len(laps) == 0:
        print("Nenhuma volta registrada.")
    else:
        for index, lap in enumerate(laps):
            print(index + 1, "-", lap)
