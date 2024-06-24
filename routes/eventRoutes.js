const express = require('express');
const router = express.Router();
const { Event } = require('../database/db');

router.get('/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/events', async (req, res) => {
    const { date, name, notes, tag } = req.body;
    const event = new Event({ date, name, notes, tag });
    try {
        await event.save();
        res.status(201).send(event);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
