const deleteOne = async (req, res) => {
    try {
        await res.subscriber.remove();
        res.status(200).json({message: 'Subscriber Deleted!'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = deleteOne;