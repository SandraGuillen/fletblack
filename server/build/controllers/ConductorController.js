"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConexionDB_1 = __importDefault(require("../dbconfig/ConexionDB"));
class ConductorController {
    // Obtiene un listado de todos los registros de la tabla
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conductList = yield ConexionDB_1.default.query('SELECT * FROM conductores');
                resp.json(conductList);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    // Obtiene un conductor de la tabla por su placa
    get(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { placa } = req.params;
                const conduct = yield ConexionDB_1.default.query('SELECT * FROM concuctores WHERE id = ?', [placa]);
                if (conduct.length > 0) {
                    return resp.json(conduct[0]);
                }
                resp.status(404).json({ message: 'Conductor no encontrado' });
            }
            catch (error) {
                console.error(error);
                resp.status(404).json({ message: error });
            }
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ConexionDB_1.default.query('INSERT INTO conductores set ?', [req.body]);
                resp.json({ message: 'Conductor almacenado' });
            }
            catch (error) {
                console.error(error);
                resp.status(404).json({ message: error });
            }
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { placa } = req.params;
                yield ConexionDB_1.default.query('UPDATE conductores SET ? WHERE placa = ?', [req.body, placa]);
                resp.json({ message: 'Conductor actualizado' });
            }
            catch (error) {
                console.log(error);
                resp.status(404).json({ message: error });
            }
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { placa } = req.params;
                yield ConexionDB_1.default.query('DELETE FROM conductores WHERE placa = ?', [placa]);
                resp.json({ message: 'Conductor eliminado' });
            }
            catch (error) {
                console.log(error);
                resp.status(404).json({ message: error });
            }
        });
    }
}
const conductorController = new ConductorController();
exports.default = conductorController;
