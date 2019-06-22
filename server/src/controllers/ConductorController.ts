import { Request, Response } from 'express';
import cnn from '../dbconfig/ConexionDB';

class ConductorController {

    // Obtiene un listado de todos los registros de la tabla
    public async list(req: Request, resp: Response) {

        try {
            const conductList = await cnn.query('SELECT * FROM conductores');
            resp.json(conductList);
        } catch (error) {
            console.error(error);
        }

    }

    // Obtiene un conductor de la tabla por su placa
    public async get(req: Request, resp: Response): Promise<any> {

        try {

            const { placa } = req.params;
            
            const conduct = await cnn.query('SELECT * FROM concuctores WHERE id = ?', [placa]);

            
            if (conduct.length > 0) {
                
                return resp.json(conduct[0]);
            }
            resp.status(404).json({ message: 'Conductor no encontrado' });

        } catch (error) {
            console.error(error);
            resp.status(404).json({ message: error });
        }
    }

    public async create(req: Request, resp: Response): Promise<void> {
        try {

            await cnn.query('INSERT INTO conductores set ?', [req.body]);

            resp.json({ message: 'Conductor almacenado' });

        } catch (error) {
            console.error(error);
            resp.status(404).json({ message: error });
        }
    }


    public async update(req: Request, resp: Response): Promise<void> {
        try {

            const { placa } = req.params;
            await cnn.query('UPDATE conductores SET ? WHERE placa = ?', [req.body, placa]);

            resp.json({ message: 'Conductor actualizado' });

        } catch (error) {
            console.log(error);
            resp.status(404).json({ message: error });
        }
    }

    public async delete(req: Request, resp: Response): Promise<void> {
        try {

            const { placa } = req.params;
            await cnn.query('DELETE FROM conductores WHERE placa = ?', [placa]);

            resp.json({ message: 'Conductor eliminado' });

        } catch (error) {
            console.log(error);
            resp.status(404).json({ message: error });
        }
    }

}

const conductorController = new ConductorController();
export default conductorController;