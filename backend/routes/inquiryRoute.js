import express from 'express';
import Inquiry from '../models/inquiryModel.js';

const router = express.Router();

// Route to save a new inquiry
router.post('/', async (request, response) => {
    try {
        const { requestType, requestDate, priority, subject, description, status } = request.body;

        if (!requestType || !requestDate || !priority || !subject || !description || !status) {
            return response.status(400).send({
                message: 'Send all required fields: requestType, requestDate, priority, subject, description, status',
            });
        }

        const newInquiry = { requestType, requestDate, priority, subject, description, status };
        const inquiry = await Inquiry.create(newInquiry);

        return response.status(201).send(inquiry);
    } catch (error) {
        console.error(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// Route to get all inquiries (with optional status filter)
router.get('/', async (req, res) => {
    try {
        const filter = {};
        if (req.query.status) {
            filter.status = req.query.status;
        }

        const inquiries = await Inquiry.find(filter);
        return res.status(200).json({ count: inquiries.length, data: inquiries });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Route to get a single inquiry by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const inquiry = await Inquiry.findById(id);

        if (!inquiry) {
            return response.status(404).send({ message: 'Inquiry not found' });
        }

        return response.status(200).json(inquiry);
    } catch (error) {
        console.error(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// Route to approve an inquiry
router.put('/:id/approve', async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(
            req.params.id,
            { status: 'Approved' },
            { new: true }
        );

        if (!inquiry) {
            return res.status(404).json({ message: 'Inquiry not found' });
        }

        return res.status(200).json(inquiry);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Failed to update status to Approved' });
    }
});

// Route to reject an inquiry
router.put('/:id/reject', async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(
            req.params.id,
            { status: 'Rejected' },
            { new: true }
        );

        if (!inquiry) {
            return res.status(404).json({ message: 'Inquiry not found' });
        }

        return res.status(200).json(inquiry);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Failed to update status to Rejected' });
    }
});

// Route to delete an inquiry by ID
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Inquiry.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Inquiry not found' });
        }

        return response.status(200).json({ message: 'Inquiry deleted successfully' });
    } catch (error) {
        console.error(error.message);
        return response.status(500).send({ message: error.message });
    }
});

export default router;
