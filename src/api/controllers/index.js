const GETALL1 =(data) => {
    res.status.json({ message: 'Get goals' })
}

const GETALL2 = (data) => {
    res.status(201).json({ message: 'Get goals' })
}

const GETALL3 =(data) => {
    res.status(201).json({ message: 'set goals' })
}

const GETTALL4 = (data) => {
    res.status(201).json({ message: 'Update goal ${req.params.id}' })
}

const GETALL5 =(data) => {
    res.status(201).json({message:'get goals'})
}


module.exports ={

    getGolas,
}
