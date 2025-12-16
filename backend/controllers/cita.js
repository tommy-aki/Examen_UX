const {cita} = require('../models')

const createNewCita = async (request, response) => {
    try{
        const data = request.body;
        if (!data || Object.keys(data).length === 0) {
            return response.status(400).json({
                status: "Error",
                message: "Request body cannot be empty"
            });
        }
        const check = await cita.findOne({
            where: {fecha_disponible: data.fecha_disponible}
        });
        if (!check){
            const newCita = await cita.create(data);
            response.status(201).json({
                status: "Success",
                data: newCita
            })
        }
        else {
            response.status(409).json({
                status: "Fecha Conflict",
                message: "Fecha already exists, please use another email"
            })
        }
    } catch (error) {
        response.status(500).json({
                status: "Error",
                message: error.message
            })
    }

};

const getAllCita = async (request, response) => {
    try{
        const data = await cita.findAll();

        if (!data || data.length == 0) {
            return response.status(404).json({
                status: "Empty Response",
                message: "No citas found"
            })
        } else {
            return response.status(200).json({
                status: "Success",
                data: data
            })
        }
    } catch (error) {
        response.status(500).json({
                status: "Error",
                message: error.message
            })
    }
}

module.exports = {
    createNewCita,
    getAllCita,
    
}