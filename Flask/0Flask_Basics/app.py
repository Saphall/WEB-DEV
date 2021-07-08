# 1. Import Flask variable
from flask import Flask

# 2. Create flask app
app = Flask(__name__)

# 3. Set route


@app.route('/')
# 4. your controller function
def index():
    return 'Hello Flask.'


# 5. run main program
if __name__ == "__main__":
    app.run()
