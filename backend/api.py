from datetime import datetime
from flask import Flask

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    format = '{%H:%M:%S}'
    return {'time': str(datetime.now().strftime(format))}
