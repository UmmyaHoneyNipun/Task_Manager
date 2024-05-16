""" from flask import Flask, request, jsonify, g
from tasks import TaskManager
from config import get_db, init_db, app

# Use get_db to interact with the database
@app.route('/tasks', methods=['GET'])
def get_tasks():
    cursor = get_db().cursor()
    cursor.execute("SELECT * FROM tasks")
    tasks = cursor.fetchall()
    return jsonify(tasks)

# Similar changes will be needed for other routes to interact with the database

if __name__ == '__main__':
    app.run(debug=True) """


from flask import Flask, request, jsonify
from tasks import TaskManager

app = Flask(__name__)
task_manager = TaskManager()

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(task_manager.get_all_tasks())

@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.json
    if not data or 'title' not in data:
        return jsonify({'error': 'Title is required'}), 400
    task = task_manager.add_task(data['title'], data.get('description', ''))
    return jsonify(task), 201

@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = task_manager.get_task(task_id)
    if not task:
        return jsonify({'error': 'Task not found'}), 404
    return jsonify(task)

@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    data = request.json
    task = task_manager.update_task(task_id, data)
    if task is None:
        return jsonify({'error': 'Task not found'}), 404
    return jsonify(task)

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    result = task_manager.delete_task(task_id)
    if not result:
        return jsonify({'error': 'Task not found'}), 404
    return jsonify({'result': 'Task deleted'})

if __name__ == '__main__':
    app.run(debug=True)
