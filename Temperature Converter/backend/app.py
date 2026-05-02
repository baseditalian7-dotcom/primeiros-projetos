import json
from http.server import BaseHTTPRequestHandler, HTTPServer

from converter_service import convert_temperature


HOST = "localhost"
PORT = 8000


class TemperatureHandler(BaseHTTPRequestHandler):
    def _send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode("utf-8"))

    def do_OPTIONS(self):
        self._send_json(200, {"message": "OK"})

    def do_GET(self):
        self._send_json(200, {
            "project": "Temperature Converter",
            "routes": ["POST /convert"]
        })

    def do_POST(self):
        if self.path != "/convert":
            self._send_json(404, {"error": "Route not found."})
            return

        try:
            data = self._read_body()
            value = float(data["value"])
            conversion_type = data["conversionType"]
            result = convert_temperature(value, conversion_type)

            self._send_json(200, result)
        except KeyError:
            self._send_json(400, {"error": "Missing value or conversionType."})
        except ValueError as error:
            self._send_json(400, {"error": str(error)})
        except json.JSONDecodeError:
            self._send_json(400, {"error": "Invalid JSON."})

    def _read_body(self):
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)
        return json.loads(body)


def run_server():
    server = HTTPServer((HOST, PORT), TemperatureHandler)
    print(f"Backend running at http://{HOST}:{PORT}")
    server.serve_forever()


if __name__ == "__main__":
    run_server()
