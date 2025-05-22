export const successResponse = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        status: "success",
        message,
        data
    });
}

export const errorResponse = (res, statusCode, message, error) => {
    return res.status(statusCode).json({
        status: "error",
        message: message || 'Internal server error',
        error: error || nulls
    });
}