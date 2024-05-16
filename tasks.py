""" from datetime import datetime

class TaskManager:
    def __init__(self):
        self.tasks = {}
        self.current_id = 1

    def get_all_tasks(self):
        return list(self.tasks.values())

    def add_task(self, title, description=''):
        task = {
            'id': self.current_id,
            'title': title,
            'description': description,
            'status': 'pending',
            'created_at': datetime.now().isoformat(),
            'updated_at': datetime.now().isoformat()
        }
        self.tasks[self.current_id] = task
        self.current_id += 1
        return task

    def update_task(self, task_id, data):
        task = self.tasks.get(task_id)
        if not task:
            return None
        task.update({
            'title': data.get('title', task['title']),
            'description': data.get('description', task['description']),
            'status': data.get('status', task['status']),
            'updated_at': datetime.now().isoformat()
        })
        return task

    def delete_task(self, task_id):
        if task_id in self.tasks:
            del self.tasks[task_id]
            return True
        return False
 """
# Store tasks in memory (e.g., a Python dictionary)
from datetime import datetime

class TaskManager:
    def __init__(self):
        self.tasks = {}
        self.current_id = 1

    def get_all_tasks(self):
        return list(self.tasks.values())

    def add_task(self, title, description=''):
        task = {
            'id': self.current_id,
            'title': title,
            'description': description,
            'status': 'pending',
            'created_at': datetime.now().isoformat(),
            'updated_at': datetime.now().isoformat()
        }
        self.tasks[self.current_id] = task
        self.current_id += 1
        return task

    def get_task(self, task_id):
        return self.tasks.get(task_id)

    def update_task(self, task_id, data):
        task = self.tasks.get(task_id)
        if not task:
            return None
        task.update({
            'title': data.get('title', task['title']),
            'description': data.get('description', task['description']),
            'status': data.get('status', task['status']),
            'updated_at': datetime.now().isoformat()
        })
        return task

    def delete_task(self, task_id):
        if task_id in self.tasks:
            del self.tasks[task_id]
            return True
        return False
