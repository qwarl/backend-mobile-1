const Quotation=require('../models/Quotation');

class quotationsController{

    //[GET] /quotations/getAll
    async getAll(req, res) {
        try {
            const quotations = await Quotation.find({});
            res.status(200).json({ success: true, message: 'Get all quotation successfully', quotations});
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
            res.status(200).json({ success: true, message: 'Create new quotation successfully', newQuotation});
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Create failed' })
        }
    }

    //[POST] /quotations/update
    async update(req, res) {
        try {
                const updateQuotation = await Quotation.findByIdAndUpdate(req.params._id, req.body, { new: true });
            res.status(200).json({ success: true, message: 'Update quotation successfully', updateQuotation});
            console.log('Update quotation successfully');
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Update failed' })
        }
    }
}

module.exports=new quotationsController