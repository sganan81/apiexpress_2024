const axios = require('axios');
const {request, response} = require('express');
const getEmpleados = (req = request, res = response) =>{

    axios.get('https://66c78f59732bf1b79fa6e8c7.mockapi.io/api/v1/empleados')
    .then( (response) => {
        const { data } = response;
        // handle success
        console.log(data);

        data.filter((item)=>{ item.lastname === 'Grant'

        })

        res.status(200).json({
            msg: 'Ok',
            data
        })
    })
    .catch( (error) => {
        // handle error
        console.log(error);
        res.status(400).json({
            msg: 'Error',
            error
        })
    })   
}

module.exports = {
    getEmpleados
}