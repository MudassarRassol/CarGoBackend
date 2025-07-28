export const successResponse = (
    res,
    data = {},
    status = 200,
    message = 'sucess'
)=>{
    return res.status(status).json({
        status,
        message,
        data
    })
}

export const errorResponse = (
    res,
    error,
    status = 500,
)=>{
    console.log('error',error )
    const message = typeof error === 'string' ? error : error.message || 'something went wrong'
    return res.status(status).json({
        status,
        message
    })
}