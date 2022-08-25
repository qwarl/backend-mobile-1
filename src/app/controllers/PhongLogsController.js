const PhongLog = require('../models/PhongLog')

class phongLogsController {

    //[GET] /phongLogs/getAll
    async getAll(req, res) {
        try {
            const phongLogs = await PhongLog.find({});
            res.status(200).json({ success: true, message: 'Get all phong log successfully', phongLogs });
            console.log('Get all phong log successfully');
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Get failed' })
        }
    }

    //[POST] /phongLogs/create
    async create(req, res) {
        try {
            const newPhongLog = new PhongLog(req.body);
            await newPhongLog.save();
            res.status(200).json({ success: true, message: 'Create new phongLog successfully', newPhongLog });
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Create failed' })
        }
    }

    //[POST] /phongLogs/update
    async update(req, res) {
        try {
            const updatePhongLog = await PhongLog.findByIdAndUpdate(req.params._id, req.body, { new: true });
            res.status(200).json({ success: true, message: 'Update phong log successfully', updatePhongLog });
            console.log('Update phong log successfully');
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Update failed' })
        }
    }

    //[GET] /phongLogs/search
    async search(req, res) {
        try {
            const { name, month, freight } = req.query;
            // console.log(pol, pod, type, month, continent);    

            //code sua

            if (name && month && freight) {
                const phongLogs = await PhongLog.find({ $and: [{ name: name }, { month: month }, { freight: freight }] });
                return res.status(200).json({ success: true, message: 'Search phong log successfully', phongLogs });
                console.log('Search phong log successfully')
            }

            //can sua gi thi lay doan cmt nay cho le

            // else {
            //     const phongLogs = await PhongLog.find({ $or: [{ name: name }, { month: month }, { freight: freight }] });
            //     return res.status(200).json({ success: true, message: 'Search phong log successfully', phongLogs });
            //     console.log('Search quotation successfully')
            // }

        } catch (error) {
            console.log(error)
            return res.status(400).json({ success: false, message: 'Search failed' })
        }
    }
}

module.exports = new phongLogsController