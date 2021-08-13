const { response,request } = require('express')



const userGet = (req=request, res = response) => {


    const {q,nombre='',api,api_key,page=1,limit=10}=req.query
    res.json({

        message: 'get API controlador ',
        q,
        nombre
        ,api
        ,api_key
        ,page
        ,limit

    })
};

const userPost = (req, res) => {

    const { nombre, edad } = req.body;
    res.status(201).json({

        message: 'post API - controlador',
        nombre,
        edad

    })
};

const userPut = (req, res) => {

    const id=req.params.id
    res.json({
        message: 'put API controleer',
        id,
    })
};


const userPatch = (req, res) => {
    res.json({
        message: 'patch API controller'
    })
}
const userDelete = (req, res) => {
    res.json({

        message: 'delete API controller'

    })
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch,
}