import InstituteModel from '../models/institute.model.js';
import { successResponse, errorResponse } from '../helpers/response-formatter.js';
import { HTTP_STATUS_CODES, INSTITUTE_TYPES, STATUS } from '../helpers/constants.js';


export const createInstitute = async (req, res) => {
    try {
        const { institute_name, institute_description, institute_type, institute_email } = req.body || {};
        if (!institute_name || !institute_type || !institute_email) {
            return errorResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'Missing required fields');
        }

        const instituteExists = await InstituteModel.findOne({ institute_name, institute_email, status: STATUS.ACTIVE });
        if (instituteExists) {
            return errorResponse(res, HTTP_STATUS_CODES.CONFLICT, 'Institute already exists with this name and email');
        }

        switch (institute_type.type) {
            case INSTITUTE_TYPES.SCHOOL:
                if (!institute_type.medium || !institute_type.class || !institute_type.standard || !institute_type.subjects) {
                    return errorResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'Missing required fields for institute type'); ``
                }
                break;
            case INSTITUTE_TYPES.COLLEGE:
                if (!institute_type.university || !institute_type.degree_type) {
                    return errorResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'Missing required fields for institute type'); ``
                }
                break;
            case INSTITUTE_TYPES.COMPETITIVE_EXAM_CENTER:
                if (!institute_type.exam_type) {
                    return errorResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'Missing required fields for institute type'); ``
                }
                break;
            default:
                break;
        }

        const new_institute = await InstituteModel.create({ institute_name, institute_description, institute_tye, institute_email, institute_status: STATUS.ACTIVE });
        console.log('new institute created : ', new_institute._id);

        return successResponse(res, HTTP_STATUS_CODES.CREATED, 'New Institute Created Successfully',)

    } catch (error) {
        console.log('err creating institute : ', error?.message || error);
        return errorResponse(res, error.statusCode || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, error.message, error);
    }
};

export const getInstitute = async (req, res) => {
    try {

        const { id } = req.params || {};
        if (!id) {
            return errorResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'Missing required field : id');
        }

        const institute = await InstituteModel.findById(id);
        if (!institute || institute.institute_status === STATUS.INACTIVE) {
            return errorResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'Institute not found');
        }

        return successResponse(res, HTTP_STATUS_CODES.SUCCESS, 'Institute found successfully', institute);

    } catch (error) {
        console.log('err fetching institute : ', error?.message || error);
        return errorResponse(res, error.statusCode || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, error.message, error);
    }
}