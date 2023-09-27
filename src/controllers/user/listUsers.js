import user from '../../models/userModel.js'

const listUsers = async (req, res)=>{   
    try {
        const [rows, fields] = await user.list()
        if (rows.length === 0) {
            res.status(404).json({error: 'Users not found'})
        } else {
            res.json(rows)
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Server error'})
    }
}

export default listUsers