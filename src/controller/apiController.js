import os from 'os'

export default {
    self:(req,res) =>{
        try {
            return res
            .status(200)
            .json({
                success: false,
                message: 'Self-check',
                response: ""
            })
        } catch (error) {
            return res
            .status(500)
            .json({
                success: false,
                message: 'An error occurred',
                error: error.message
            })
        }
    },
    health: (req, res) => {
        try {
            return res
            .status(200)
            .json({
                success: true,
                message: 'Health check passed',
                response: {
                    cpuUsage: os.loadavg(),
                    totalMemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
                    freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`
                }
            });
        } catch (error) {
            return res
            .status(500)
            .json({
                success: false,
                message: 'An error occurred',
                error: error.message
            })
        }
    },
    register: (req, res) => {
        try {
            const { name , email, password } = req.body

            if(!email || !name || !password) {
                return res
               .status(400)
               .json({
                    success: false,
                    message: 'Missing required fields: name, email, password'
                });
            }
        
            // Perform database operations here

            return res
            .status(201)
            .json({
                success: true,
                message: 'User registered successfully'
            });
        } catch (error) {
            return res
            .status(500)
            .json({
                success: false,
                message: 'An error occurred',
                error: error.message
            })
        }
    },
    login: async (req,res) =>{
        try {
            return res
            .status(200)
            .json({
                success: false,
                message: 'Self-check',
                response: ""
            })
        } catch (error) {
            return res
            .status(500)
            .json({
                success: false,
                message: 'An error occurred',
                error: error.message
            })
        }
    },
}