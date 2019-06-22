"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConductorController_1 = __importDefault(require("../controllers/ConductorController"));
class ConductorRouter {
    constructor() {
        this.router = express_1.Router();
        this.setConfig();
    }
    setConfig() {
        // Obtiene un listado de todos los contactos
        this.router.get('/', ConductorController_1.default.list);
        // Obtiene un solo contacto, con base en la placa
        this.router.get('/:placa', ConductorController_1.default.get);
        // Crea:inserta un nuevo contacto en la tabla
        this.router.post('/', ConductorController_1.default.create);
        // Actualiza la información de un contacto existente
        this.router.put('/:placa', ConductorController_1.default.update);
        // Elimina un contacto existente
        this.router.delete('/:placa', ConductorController_1.default.delete);
    }
}
const conductorRouter = new ConductorRouter();
exports.default = conductorRouter.router;
