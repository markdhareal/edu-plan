from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return '<h1>Hello, World</h1>'

def validate_data(data, required_fields):

    '''Tovalidate Data Input'''
    
    for field in required_fields:
        if field not in data or not data.get(field):
            return False, f'Missing Field: {field}'
        
    return True, None


@app.route('/send-data', methods=['POST'])
def send_data():
    try:
        data = request.json

        '''Validation'''
        required_fields = ['subject', 'lesson', 'duration', 'gradeLevel', 'gradeType']
        is_valid, error_messsage = validate_data(data, required_fields)
        if not is_valid:
            return jsonify({'error': error_messsage}), 400
            
        subject = data.get('subject')
        lesson = data.get('lesson')
        duration = data.get('duration')
        gradeLevel = data.get('gradeLevel')
        gradeType = data.get('gradeType')

        return jsonify({
            'subject': subject,
            'lesson': lesson,
            'duration': duration,
            'gradeLevel': gradeLevel,
            'gradeType': gradeType,
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)