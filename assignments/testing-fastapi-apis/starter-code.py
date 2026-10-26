from fastapi import FastAPI, HTTPException

app = FastAPI(title="Task API")

tasks = {
    1: {"id": 1, "title": "Study FastAPI", "completed": False},
    2: {"id": 2, "title": "Write API tests", "completed": False},
}


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.get("/tasks/{task_id}")
def get_task(task_id: int):
    if task_id not in tasks:
        raise HTTPException(status_code=404, detail="Task not found")
    return tasks[task_id]
