class List {
    private tasks: Task[] = [];

    public addByName(name: string) : void {
        this.tasks.push(new Task(name));
    }
}