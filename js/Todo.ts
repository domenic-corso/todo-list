class Todo {

    public static list: List = new List();

    public static readonly e = {
        inpInsertTask: document.getElementById('inp-insert-task') as HTMLInputElement,
        contIncompleteTasks: document.getElementById('cont-incomplete') as HTMLElement,
        contCompleteTasks: document.getElementById('cont-complete') as HTMLElement
    };

    public static start(): void {
        this.addEvents();
    }

    private static addEvents(): void {
        this.e.inpInsertTask.addEventListener('click', () => {
            const taskName = this.e.inpInsertTask.value;
        });
    }
}

Todo.start();