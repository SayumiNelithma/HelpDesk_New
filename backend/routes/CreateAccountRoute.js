import express from 'express';
import Account from '../models/CreateAccountModel.js';

const router = express.Router();

//route for save a new 
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.fullname ||
            !request.body.address ||
            !request.body.email ||
            !request.body.dob ||
            !request.body.gender ||
            !request.body.phonenumber ||
            !request.body.USERNAME ||
            !request.body.PASSWORD  
        ) {
            return response.status(400).send({
                message: 'Send all required fields: fullname, address, email, dob, gender, phonenumber, USERNAME, PASSWORD',
            });
        }
        const newAccount = {
            username: request.body.username,
            email: request.body.email,
            password: request.body.password,
        };

        const account = await Account.create(newAccount);
        response.status(201).send(account); // Don't forget to send a response.
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for get all from database
router.get('/', async (request, response) => {
    try {
        const account = await Account.find({}); // Use the Admin model, not the string 'Admin'

        return response.status(200).json({
            count: account.length,
            data: account
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

        const account= await Account.findById(id);

        return response.status(200).json({
            count: account.length,
            data: account
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
            !request.body.fullname ||
            !request.body.address ||
            !request.body.email ||
            !request.body.dob ||
            !request.body.gender ||
            !request.body.phonenumber ||
            !request.body.USERNAME ||
            !request.body.PASSWORD
        ) {
            return response.status(400).send({
                message: 'Send all required fields: fullname, address, email, dob, gender, phonenumber, USERNAME, PASSWORD',
            });
        }

        const { id } = request.params;

        const result = await Account.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Account not found' });
        }

        return response.status(200).json({ message: 'Account updated successfully' });



    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for deleting 
router.delete('/:id', async (request, response) => {
    try{
        const { id } = request.params;

        const result = await Account.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Account not found' });
        }

        return response.status(200).json({ message: 'Account deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;