from converter_service import convert_temperature


def test_celsius_to_fahrenheit():
    result = convert_temperature(0, "celsiusToFahrenheit")
    assert result["result"] == 32


def test_fahrenheit_to_celsius():
    result = convert_temperature(32, "fahrenheitToCelsius")
    assert result["result"] == 0


if __name__ == "__main__":
    test_celsius_to_fahrenheit()
    test_fahrenheit_to_celsius()
    print("All converter tests passed.")
