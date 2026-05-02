import json
from http.server import BaseHTTPRequestHandler, HTTPServer

from calculator import calculate


HOST = "localhost"
PORT = 8000


class CalculatorHandler(BaseHTTPRequestHandler):
    def _send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode("utf-8"))

    def do_OPTIONS(self):
        self._send_json(200, {"message": "OK"})

    def do_GET(self):
        self._send_json(200, {
            "project": "Basic Calculator",
            "message": "Use POST /calculate to add, subtract, multiply or divide numbers."
        })

    def do_POST(self):
        if self.path != "/calculate":
            self._send_json(404, {"error": "Route not found."})
            return

        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)

        try:
            data = json.loads(body)
            first_number = float(data["firstNumber"])
            second_number = float(data["secondNumber"])
            operation = data["operation"]

            result = calculate(first_number, second_number, operation)

            self._send_json(200, {
                "firstNumber": first_number,
                "secondNumber": second_number,
                "operation": operation,
                "result": result
            })
        except KeyError:
            self._send_json(400, {"error": "Missing number or operation."})
        except ValueError as error:
            self._send_json(400, {"error": str(error)})


def run_server():
    server = HTTPServer((HOST, PORT), CalculatorHandler)
    print(f"Backend running at http://{HOST}:{PORT}")
    server.serve_forever()


if __name__ == "__main__":
    run_server()
