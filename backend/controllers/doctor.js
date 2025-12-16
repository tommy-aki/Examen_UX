const {doctor} = require('../models')

const getAllDoctors = async (request, response) => {
    try{
        const data = await doctor.findAll();

        if (!data || data.length == 0) {
            return response.status(404).json({
                status: "Empty Response",
                message: "No users found"
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
    getAllDoctors,
    
}