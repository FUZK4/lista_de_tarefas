
class buttons {
    constructor(app, tarefas) {
        this.app = app;
        this.tarefas = tarefas;
    }

    init() {
        this.app.get('/adicionar', (req, res) => {
            const novaTarefa = req.query.tarefa;
            console.log(novaTarefa);
            this.tarefas.push(novaTarefa);
            res.redirect('/');
    });

        this.app.get('/remover', (req, res) => {
            const index = req.query.index;
            this.tarefas.splice(index, 1);
            res.redirect('/');
        });
    }
}

module.exports = buttons;