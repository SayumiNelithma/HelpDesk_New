import express from 'express';
import Admin from '../models/AdminLoginModel.js';

const router = express.Router();

//route for save a new 
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.username ||
            !request.body.email ||
            !request.body.password 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: username, email, password',
            });
        }
        const newAdmin = {
            username: request.body.username,
            email: request.body.email,
            password: request.body.password,
        };

        const admin = await Admin.create(newAdmin);
        response.status(201).send(admin); // Don't forget to send a response.
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for get all from database
router.get('/', async (request, response) => {
    try {
        const admin = await Admin.find({}); // Use the Admin model, not the string 'Admin'

        return response.status(200).json({
            count: admin.length,
            data: admin
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for get one book from database
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const admin= await Admin.findById(id);

        return response.status(200).json({
            count: admin.length,
            data: admin
        }
            
        );
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for update a book
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.username ||
            !request.body.email ||
            !request.body.password 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: username, email, password',
            });
        }

        const { id } = request.params;

        const result = await Admin.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Admin not found' });
        }

        return response.status(200).json({ message: 'Admin updated successfully' });



    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for deleting 
router.delete('/:id', async (request, response) => {
    try{
        const { id } = request.params;

        const result = await Admin.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Admin not found' });
        }

        return response.status(200).json({ message: 'Admin deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;