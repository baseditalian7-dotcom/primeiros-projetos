import json
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse

from task_service import create_task, delete_task, list_tasks, toggle_task


HOST = "localhost"
PORT = 8000


class TodoHandler(BaseHTTPRequestHandler):
    def _send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode("utf-8"))

    def do_OPTIONS(self):
        self._send_json(200, {"message": "OK"})

    def do_GET(self):
        if self.path == "/tasks":
            self._send_json(200, {"tasks": list_tasks()})
            return

        self._send_json(200, {
            "project": "Simple Todo List",
            "routes": ["GET /tasks", "POST /tasks", "PATCH /tasks/{id}", "DELETE /tasks/{id}"]
        })

    def do_POST(self):
        if self.path != "/tasks":
            self._send_json(404, {"error": "Route not found."})
            return

        try:
            data = self._read_body()
            title = data["title"].strip()

            if title == "":
                self._send_json(400, {"error": "Task title cannot be empty."})
                return

            task = create_task(title)
            self._send_json(201, {"task": task})
        except KeyError:
            self._send_json(400, {"error": "Missing task title."})
        except json.JSONDecodeError:
            self._send_json(400, {"error": "Invalid JSON."})

    def do_PATCH(self):
        task_id = self._get_task_id()

        if task_id is None:
            self._send_json(404, {"error": "Route not found."})
            return

        task = toggle_task(task_id)

        if task is None:
            self._send_json(404, {"error": "Task not found."})
            return

        self._send_json(200, {"task": task})

    def do_DELETE(self):
        task_id = self._get_task_id()

        if task_id is None:
            self._send_json(404, {"error": "Route not found."})
            return

        deleted = delete_task(task_id)

        if not deleted:
            self._send_json(404, {"error": "Task not found."})
            return

        self._send_json(200, {"message": "Task deleted."})

    def _read_body(self):
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)
        return json.loads(body)

    def _get_task_id(self):
        path = urlparse(self.path).path
        parts = path.strip("/").split("/")

        if len(parts) != 2 or parts[0] != "tasks":
            return None

        try:
            return int(parts[1])
        except ValueError:
            return None


def run_server():
    server = HTTPServer((HOST, PORT), TodoHandler)
    print(f"Backend running at http://{HOST}:{PORT}")
    server.serve_forever()


if __name__ == "__main__":
    run_server()
