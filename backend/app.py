from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai
from file_reader import read_text
import os

app = Flask(__name__)
CORS(app)

load_dotenv()

@app.route('/')
def index():
    return '<h1>Hello, World</h1>'

def validate_data(data, required_fields):

    '''To validate Data Input'''
    
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

        generated_response = generate_response(subject,lesson,duration, gradeLevel, gradeType)
        return jsonify({'lesson_plan': generated_response})

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
def generate_response(subject, lesson, duration, gradeLevel, gradeType):

    template = read_text(f'{gradeType}.txt')

    prompt = f'''
        You are an experienced educator specializing in the development of detailed and effective lesson plans. Your approach is professional, ensuring that each plan aligns with educational standards and addresses the unique needs of your students.
        Using the provided template, please create a comprehensive lesson plan for the subject {subject}. The focus of the lesson will be on {lesson}, and it will be taught over a total duration of {duration} (indicate either hours or minutes).
        The students in this class are in {gradeLevel}, which falls under the {gradeType} education level. Ensure that the lesson plan is engaging and includes:
            - Clear learning objectives
            - Appropriate activities
            - Assessments tailored for this grade level
            - A breakdown of how the total duration is divided among different parts of the lesson (e.g., introduction, direct instruction, guided practice, independent practice, closure, and assessment)
        IMPORTANT: Adhere strictly to the following lesson plan structure: {template}.
        IMPORTANT: Adhere strictly to the following lesson plan structure: {template}.
        IMPORTANT: Adhere strictly to the following lesson plan structure: {template}.
        
        NOTE: Please format the output as a markdown suitable for a DOCX or PDF file.'''
    
    generation_config = {
        'temperature': 0.5,
        'top_p': 0.95,
        'top_k': 40,
        'max_output_tokens': 8192,
        'response_mime_type':'text/plain'
    }

    API_KEY = os.getenv('GEMINI_API_KEY')

    genai.configure(api_key=API_KEY)

    model = genai.GenerativeModel(model_name='gemini-1.5-flash', generation_config=generation_config)

    response = model.generate_content(prompt)

    return response.text

if __name__ == '__main__':
    app.run(debug=True)