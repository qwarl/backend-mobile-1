const Quotation = require('../models/Quotation');

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

            // const quotations = await Quotation.find($or:[{region: "NA"},{sector:"Some Sector"}]);

            const query1 = [{ month: month }, { continent: continent }]
            const query2 = [{ month: month }, { continent: continent }, { type: type }]

            //code goc
            // const quotations = await Quotation.find({ $and: [{ month: month }, { continent: continent }] });
            // return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
            // console.log('Search quotation successfully')

            //code lam, sua, pha
            // const quotations = await Quotation.find({
            //     $or: [
            //         { pol: pol },
            //         { pod: pod },
            //         { month: month },
            //         { continent: continent },
            //         { type: type },
            //         { $and: [{ $and: [{ month: month }, { continent: continent }] }] },
            //         { $and: [{ month: month }, { continent: continent }, { type: type }] }
            //     ]
            // });

            if (month.length > 0 && continent.length > 0 && type.length > 0) {
                const quotations = await Quotation.find({ $and: [{ month: month }, { continent: continent }, { type: type }] });
                return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
                console.log('Search quotation successfully')
            }

            // const quotations = await Quotation.find({ $or: [{ pol: pol }, { pod: pod }, { type: type }, { month: month }, { continent: continent }] });
            // return res.status(200).json({ success: true, message: 'Search quotation successfully', quotations });
            // console.log('Search quotation successfully')

        } catch (error) {
            console.log(error)
            return res.status(400).json({ success: false, message: 'Search failed' })
        }
    }
}

module.exports = new quotationsController