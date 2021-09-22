const Subscriber = require("../../models/subscriberModel");

const createOne = async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

module.exports = createOne;