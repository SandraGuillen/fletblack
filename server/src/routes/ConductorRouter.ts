import { Router } from 'express';
import conductorController from '../controllers/ConductorController';

class ConductorRouter {

    router = Router();

    constructor() { 
        this.setConfig();
    }

    setConfig(): void {

        // Obtiene un listado de todos los contactos
        this.router.get('/', conductorController.list);

        // Obtiene un solo contacto, con base en la placa
        this.router.get('/:placa', conductorController.get);

        // Crea:inserta un nuevo contacto en la tabla
        this.router.post('/', conductorController.create);

        // Actualiza la información de un contacto existente
        this.router.put('/:placa', conductorController.update);
        
        // Elimina un contacto existente
        this.router.delete('/:placa', conductorController.delete);



    }

}

const conductorRouter = new ConductorRouter();
export default conductorRouter.router;