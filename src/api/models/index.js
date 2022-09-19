
// pour define any resourse
const mongose = require('mongose')
const Schematask = mongoose.Schema({
    text: {
        type : String ,
        required :[true,'please add a text value'],
    },
},
{
    timestamps:true,
}
)
module.expports = mongose.model('task',Schematask)


