from http.server import HTTPServer, SimpleHTTPRequestHandler
from socketserver import ThreadingMixIn
import sys
import os

class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True

class CustomHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable caching-friendly headers and CORS if needed
        self.send_header('Cache-Control', 'no-cache, must-revalidate')
        super().end_headers()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = ThreadedHTTPServer(('127.0.0.1', port), CustomHandler)
    print(f"Serving HTTP on 127.0.0.1 port {port}...")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
