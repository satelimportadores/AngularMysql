"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    list(req, res) {
        res.json({ text: 'Listando games' });
    }
    listOne(req, res) {
        res.json({ text: 'Listando game' + req.params.id });
    }
    create(req, res) {
        res.json({ text: 'Creating game' });
    }
    delete(req, res) {
        res.json({ text: 'Borrando game' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'Actualizando game' + req.params.id });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
