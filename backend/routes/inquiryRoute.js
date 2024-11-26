import express from 'express';
import Inquiry from '../models/inquiryModel.js';

const router = express.Router();

//route for save a new book
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.requestType ||
            !request.body.requestDate ||
            !request.body.priority ||
            !request.body.subject ||
            !request.body.description 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: requestType, requestDate, priority, subject, description',
            });
        }
        const newInquiry = {
            requestType: request.body.requestType,
            requestDate: request.body.requestDate,
            priority: request.body.priority,
            subject: request.body.subject,
            description: request.body.description,
        };

        const inquiry = await Inquiry.create(newInquiry);
        response.status(201).send(inquiry); // Don't forget to send a response.
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for get all books from database
router.get('/', async (request, response) => {
    try {
        const inquiry = await Inquiry.find({});

        return response.status(200).json({
            count: inquiry.length,
            data: inquiry
        }
            
        );
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for get one book from database
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const inquiry= await Inquiry.findById(id);

        return response.status(200).json({
            count: inquiry.length,
            data: inquiry
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
            !request.body.requestType ||
            !request.body.requestDate ||
            !request.body.priority ||
            !request.body.subject ||
            !request.body.description
        ) {
            return response.status(400).send({
                message: 'Send all required fields: requestType, requestDate, priority, subject, description',
            });
        }

        const { id } = request.params;

        const result = await Inquiry.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Inquiry not found' });
        }

        return response.status(200).json({ message: 'Inquiry updated successfully' });



    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for deleting a book
router.delete('/:id', async (request, response) => {
    try{
        const { id } = request.params;

        const result = await Inquiry.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Inquiry not found' });
        }

        return response.status(200).json({ message: 'Inquiry deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;