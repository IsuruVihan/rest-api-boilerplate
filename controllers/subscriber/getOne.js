const getOne = (req, res) => {
    try {
        res.status(200).json(res.subscriber);
    } catch (err) {
        res.status(500).json({message: "Server error!"});
    }
}

module.exports = getOne;