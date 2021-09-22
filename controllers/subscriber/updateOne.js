const updateOne = async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }
    try {
        const updatedSubscriber = await res.subscriber.save();
        res.status(200).json(updatedSubscriber);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

module.exports = updateOne;