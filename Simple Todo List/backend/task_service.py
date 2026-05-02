tasks = []
next_id = 1


def list_tasks():
    return tasks


def create_task(title):
    global next_id

    task = {
        "id": next_id,
        "title": title,
        "done": False
    }

    tasks.append(task)
    next_id += 1

    return task


def delete_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            tasks.remove(task)
            return True

    return False


def toggle_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            task["done"] = not task["done"]
            return task

    return None
