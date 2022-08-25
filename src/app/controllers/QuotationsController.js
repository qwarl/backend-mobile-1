const Quotation = require('../models/QuotationLog');

class quotationsController {

    //[GET] /quotations/getAll
    async getAll(req, res) {
        try {
            const quotations = await Quotation.find({});
            res.status(200).json({ success: true, message: 'Get all quotation successfully', quotations });
            console.log('Get all quotation successfully');
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Get failed' })
        }
    }

    //[POST] /quotations/create
    async create(req, res) {
        try {
            const newQuotation = new Quotation(req.body);
            await newQuotation.save();
            res.status(200).json({ success: true, message: 'Create new quotation successfully', newQuotation });
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Create failed' })
        }
    }

    //[POST] /quotations/update
    async update(req, res) {
        try {
            const updateQuotation = await Quotation.findByIdAndUpdate(req.params._id, req.body, { new: true });
            res.status(200).json({ success: true, message: 'Update quotation successfully', updateQuotation });
            console.log('Update quotation successfully');
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Update failed' })
        }
    }

    //[GET] /quotations/search
    async search(req, res) {
        try {
            const { pol, pod, type, month, continent } = req.query;
            // console.log(pol, pod, type, month, continent);    

            //code sua

            if (month && continent && type) {
                const quotations = await Quotation.find({ $and: [{ month: month }, { continent: continent }, { type: type }] });
                return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
                console.log('Search quotation successfully')
            }
            if (month && continent && type) {
                const quotations = await Quotation.find({ $and: [{ month: month }, { continent: continent }, { type: type }] });
                return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
                console.log('Search quotation successfully')
            }
            if (month && continent) {
                const quotations = await Quotation.find({ $and: [{ month: month }, { continent: continent }] });
                return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
                console.log('Search quotation successfully')
            }
            if (month && type) {
                const quotations = await Quotation.find({ $and: [{ month: month }, { type: type }] });
                return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
                console.log('Search quotation successfully')
            }
            if (continent && type) {
                const quotations = await Quotation.find({ $and: [{ continent: continent }, { type: type }] });
                return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
                console.log('Search quotation successfully')
            }


            if (pol && pod && type) {
                const quotations = await Quotation.find({ $and: [{ pol: pol }, { pod: pod }, { type: type }] });
                return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
                console.log('Search quotation successfully')
            }
            if (pol && pod) {
                const quotations = await Quotation.find({ $and: [{ pol: pol }, { pod: pod }] });
                return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
                console.log('Search quotation successfully')
            }
            if (pol && type) {
                const quotations = await Quotation.find({ $and: [{ pol: pol }, { type: type }] });
                return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
                console.log('Search quotation successfully')
            }
            if (pod && type) {
                const quotations = await Quotation.find({ $and: [{ pod: pod }, { type: type }] });
                return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
                console.log('Search quotation successfully')
            }

            else {
                const quotations = await Quotation.find({ $or: [{ pol: pol }, { pod: pod }, { type: type }, { month: month }, { continent: continent }] });
                return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
                console.log('Search quotation successfully')
            }

        } catch (error) {
            console.log(error)
            return res.status(400).json({ success: false, message: 'Search failed' })
        }
    }
}

module.exports = new quotationsController