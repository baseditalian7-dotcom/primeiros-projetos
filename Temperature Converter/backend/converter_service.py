def celsius_to_fahrenheit(celsius):
    return (celsius * 9 / 5) + 32


def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5 / 9


def convert_temperature(value, conversion_type):
    if conversion_type == "celsiusToFahrenheit":
        return round(celsius_to_fahrenheit(value), 2)
    elif conversion_type == "fahrenheitToCelsius":
        return round(fahrenheit_to_celsius(value), 2)
    else:
        return 0
