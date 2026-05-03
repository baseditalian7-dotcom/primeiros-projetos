import random
import string


def get_characters(use_uppercase, use_lowercase, use_numbers, use_symbols):
    characters = []

    if use_uppercase:
        characters += list(string.ascii_uppercase)

    if use_lowercase:
        characters += list(string.ascii_lowercase)

    if use_numbers:
        characters += list(string.digits)

    if use_symbols:
        characters += list("!@#$%&*?")

    return characters


def generate_password(size, characters):
    password_items = []

    for item in range(size):
        character = random.choice(characters)
        password_items.append(character)

    return "".join(password_items)


def calculate_strength(size, use_uppercase, use_lowercase, use_numbers, use_symbols):
    score = 0

    if size >= 8:
        score += 1

    if size >= 14:
        score += 1

    if use_uppercase and use_lowercase:
        score += 1

    if use_numbers:
        score += 1

    if use_symbols:
        score += 1

    return score
