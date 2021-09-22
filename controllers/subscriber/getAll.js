const Subscriber = require('../../models/subscriberModel');

const getAll = async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = getAll;