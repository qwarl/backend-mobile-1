const Air = require('../models/Air')

class AirController {

    //[GET] /air/getAll
    async getAll(req, res) {
        try {
            const air = await Air.find({});
            res.status(200).json({ success: true, message: 'Get all air successfully', air });
            console.log('Get all air successfully');
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Get failed' })
        }
    }

    //[POST] /air/create
    async create(req, res) {
        try {
            const newAir = new Air(req.body);
            await newAir.save();
            res.status(200).json({ success: true, message: 'Create new air successfully', newAir });
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Create failed' })
        }
    }

    //[POST] /air/update
    async update(req, res) {
        try {
            const updateAir = await Air.findByIdAndUpdate(req.params._id, req.body, { new: true });
            res.status(200).json({ success: true, message: 'Update air successfully', updateAir });
            console.log('Update air successfully');
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Update failed' })
        }
    }


    //[GET] /air/search
    async search(req, res) {
        try {
            const { aol, aod, month, continent } = req.query;

            if (aol && month && continent) {
                const airs = await Air.find({ $and: [{ aol: aol }, { month: month }, { continent: continent }] });
                return res.status(200).json({ success: true, message: 'Search air successfully', airs });
                console.log('Search air successfully')
            }
            if (aod && month && continent) {
                const airs = await Air.find({ $and: [{ aod: aod }, { month: month }, { continent: continent }] });
                return res.status(200).json({ success: true, message: 'Search air successfully', airs });
                console.log('Search air successfully')
            }

        } catch (error) {
            console.log(error)
            return res.status(400).json({ success: false, message: 'Search failed' })
        }
    }
}

module.exports = new AirController