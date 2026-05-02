def add(first_number, second_number):
    return first_number + second_number


def subtract(first_number, second_number):
    return first_number - second_number


def multiply(first_number, second_number):
    return first_number * second_number


def divide(first_number, second_number):
    if second_number == 0:
        raise ValueError("Cannot divide by zero.")

    return first_number / second_number


def calculate(first_number, second_number, operation):
    if operation == "add":
        return add(first_number, second_number)

    if operation == "subtract":
        return subtract(first_number, second_number)

    if operation == "multiply":
        return multiply(first_number, second_number)

    if operation == "divide":
        return divide(first_number, second_number)

    raise ValueError("Invalid operation. Use add, subtract, multiply or divide.")
