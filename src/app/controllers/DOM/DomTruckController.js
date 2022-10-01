const DomTruck = require('../../models/DOM/DomTruck')

class DomTruckController {

    //[GET] /truck/getAll
    async getAll(req, res) {
        try {
            const truck = await DomTruck.find({});
            res.status(200).json({ success: true, message: 'Get all dom truck successfully', truck });
            // console.log('Get all dom truck successfully');
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Get failed' })
        }
    }

    //[POST] /truck/create
    async create(req, res) {
        try {
            const newTruck = new DomTruck(req.body);

            let newCode = await DomTruck.findOne().sort({ _id: -1 }).limit(1)
            // console.log(newCode.code);
            let counter
            if (!newCode) {
                counter = 0
            } else {
                counter = newCode.code.toString().slice(-3)
            }
            console.log((+counter + 1).toString().length);
            let getDate = new Date()
            let month = getDate.getMonth() + 1
            month = month.toString().padStart(2, '0')
            let year = getDate.getFullYear().toString().slice(-2)
            let subCode = 'BGDOM' + month + year
            var code
            let check = month

            if (check = month) {
                counter++
                // if(counter)
                let ait = counter.toString().padStart(3, '0')// ati =auto increment code
                code = subCode + ait                        // if ati>1000, it will become ati=001 again, solve this by change padStart(3,'0') to padStart(4,'0')
            }
            else {
                check = month
                counter = 0
                counter++
                let ati = number.toString().padStart(3, '0')
                code = subCode + ati
            }
            console.log(code)
            newTruck.code = code
            console.log(newTruck);
            await newTruck.save();
            res.status(200).json({ success: true, message: 'Create new truck successfully', newTruck });
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Create failed' })
        }
    }

    //[POST] /air/update
    async update(req, res) {
        try {
            const updateTruck = await DomTruck.findByIdAndUpdate(req.params._id, req.body, { new: true });
            res.status(200).json({ success: true, message: 'Update truck successfully', updateTruck });
            console.log('Update truck successfully');
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false, message: 'Update failed' })
        }
    }


    //[GET] /air/search
    async search(req, res) {
        try {
            const { addressdelivery, addressreceive, month, continent } = req.query;

            if (addressdelivery && month && continent) {
                const trucks = await DomTruck.find({ $and: [{ addressdelivery: addressdelivery }, { month: month }, { continent: continent }] });
                return res.status(200).json({ success: true, message: 'Search truck successfully', trucks });
                console.log('Search truck successfully')
            }
            if (addressreceive && month && continent) {
                const trucks = await DomTruck.find({ $and: [{ addressreceive: addressreceive }, { month: month }, { continent: continent }] });
                return res.status(200).json({ success: true, message: 'Search truck successfully', trucks });
                console.log('Search truck successfully')
            }

        } catch (error) {
            console.log(error)
            return res.status(400).json({ success: false, message: 'Search failed' })
        }
    }
}

module.exports = new DomTruckController