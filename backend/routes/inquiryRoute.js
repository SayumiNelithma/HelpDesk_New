import express from 'express';
import Inquiry from '../models/inquiryModel.js';

const router = express.Router();

//route for save a new 
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.requestType ||
            !request.body.requestDate ||
            !request.body.priority ||
            !request.body.subject ||
            !request.body.description ||
            !request.body.status
        ) {
            return response.status(400).send({
                message: 'Send all required fields: requestType, requestDate, priority, subject, description, status',
            });
        }
        const newInquiry = {
            requestType: request.body.requestType,
            requestDate: request.body.requestDate,
            priority: request.body.priority,
            subject: request.body.subject,
            description: request.body.description,
            status: request.body.status,
            
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

//********** */
// Update inquiry status to Resolved
router.put('/:id/resolve', async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, { status: 'Resolved' }, { new: true });
        res.status(200).json(inquiry);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update status to Resolved' });
    }
});

// Update inquiry status to Rejected
router.put('/:id/reject', async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, { status: 'Rejected' }, { new: true });
        res.status(200).json(inquiry);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update status to Rejected' });
    }
});
//************ */

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.requestType ||
            !request.body.requestDate ||
            !request.body.priority ||
            !request.body.subject ||
            !request.body.description ||
            !request.body.status

        ) {
            return response.status(400).send({
                message: 'Send all required fields: requestType, requestDate, priority, subject, description, status',
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

//route for deleting an inquiry
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