import user from '../../models/userModel.js'

const getUser = async (req, res)=>{   
    try {
        const [rows, fields] = await user.get(req.body.id)
        if (rows.length === 0) {
            res.status(404).json({error: 'User not found'})
        } else {
            // deletar o pass
            delete rows[0].pass
            res.json(rows[0])
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Server error'})
    }
}

export default getUser
