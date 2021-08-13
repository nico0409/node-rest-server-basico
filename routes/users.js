const {Router}=require('express');
const { userGet, userPost, userPut,userDelete,userPatch } = require('../controllers/user');

const router=Router();

module.exports =router;



    router.get('/',userGet);

    router.post('/', userPost );

    router.put('/:id', userPut);
    router.put('/', userPut);

    router.patch('/',userPatch);

    router.delete('/',userDelete);
