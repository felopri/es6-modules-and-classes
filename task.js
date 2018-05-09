class Task {
    showId() {
        console.log('99');
    }
}
let task = new Task();
console.log(task.showId === Task.prototype.showId);
//true