import threading


class Task:

    def __init__(self, task: callable, args: tuple = ()):
        self.task: callable = task
        self.args: tuple = args


class ThreadPool:

    def __init__(self, tasks: list[Task], num_threads: int = 10, announce: bool = False):
        self.threads: list[threading.Thread] = [threading.Thread(target=self._worker_task) for _ in range(num_threads)]
        self.tasks: list[Task] = tasks
        self.max_threads: int = num_threads
        self.active_threads: int = 0
        self.announce = announce

    def join(self):
        for thread in self.threads:
            thread.join()

    def start(self):
        for thread in self.threads:
            thread.start()
            self.active_threads += 1

    def _worker_task(self):
        while True:
            try:
                task = self.tasks.pop()
            except IndexError:
                self.active_threads -= 1
                return
            if self.announce:
                print(f'Starting task ({len(self.tasks)} remaining)')
            task.task(*task.args)
