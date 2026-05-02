def celsius_to_fahrenheit(celsius):
    return (celsius * 9 / 5) + 32


def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5 / 9


def convert_temperature(value, conversion_type):
    if conversion_type == "celsiusToFahrenheit":
        return {
            "input": value,
            "inputUnit": "Celsius",
            "result": round(celsius_to_fahrenheit(value), 2),
            "resultUnit": "Fahrenheit"
        }

    if conversion_type == "fahrenheitToCelsius":
        return {
            "input": value,
            "inputUnit": "Fahrenheit",
            "result": round(fahrenheit_to_celsius(value), 2),
            "resultUnit": "Celsius"
        }

    raise ValueError("Invalid conversion type.")
