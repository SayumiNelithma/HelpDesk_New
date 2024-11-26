import express from 'express';
import User from '../models/UserLoginModel.js';

const router = express.Router();

//route for save a new user
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.u_username ||
            !request.body.u_password 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: u_username, u_password',
            });
        }
        const newUser = {
            u_username: request.body.u_username,
            u_password: request.body.u_password,
        };

        const user = await User.create(newUser);
        response.status(201).send(user); // Don't forget to send a response.
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for get all from database
router.get('/', async (request, response) => {
    try {
        const user = await User.find({}); // Use the Admin model, not the string 'Admin'

        return response.status(200).json({
            count: user.length,
            data: user
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for get one
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const user = await User.findById(id);

        return response.status(200).json({
            count: user.length,
            data: user
        }
            
        );
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for updating
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.u_username ||
            !request.body.u_password 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: u_username, u_password',
            });
        }

        const { id } = request.params;

        const result = await User.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'User not found' });
        }

        return response.status(200).json({ message: 'User updated successfully' });



    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for deleting 
router.delete('/:id', async (request, response) => {
    try{
        const { id } = request.params;

        const result = await User.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'USer not found' });
        }

        return response.status(200).json({ message: 'User deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;