import { ExpressJoiError } from 'express-joi-validation';
import { NextFunction, Request, Response } from 'express';
import {Exception} from '../custom-exception/exception';
import  {GeneralHttpExceptions}  from '../custom-exception/general-exceptions.constants';
const HttpErrorMiddleware = (err:ExpressJoiError |any, req: Request, res: Response, next:NextFunction)=>{
    if(err && err.error && err.error.isJoi) {
        let validationError: Exception;
        validationError = new Exception(GeneralHttpExceptions.ValidationException, err.error.message, err.stack);
        HandleException(validationError, req, res);
    }
}
const HandleException = (error: any, request: Request, response: Response) => {

    const errorDetails: Exception =
    {
        message: error.detailedMessage || "Something went wrong",
        type: error.type,
        stackTrace: error.stack || error.stackTrace,
        name: error.name,
        smTraceId: error.smTraceId,
        detailedMessage: error.message,
        level: 'error',
        errorCode: error.errorCode,
        serviceCode: error.serviceCode,
        statusCode: error.statusCode
    };

    if (errorDetails.statusCode === 500) {
        const errorResponse = {
            status: false,
            message: errorDetails.message,
            smanshaErrorDetails: errorDetails.stackTrace,
            error: {
                type: errorDetails.type,
                smTraceId: errorDetails.smTraceId,
                message: errorDetails.detailedMessage,
                errorCode: errorDetails.errorCode,
                serviceCode: errorDetails.serviceCode
            }
        };

        response.status(errorDetails.statusCode).json(errorResponse);
    }
    else {
        const errorResponse = {
            status: false,
            message: errorDetails.message,
            smanshaErrorDetails: errorDetails.stackTrace,
            error: {
                type: errorDetails.type,
                message: errorDetails.detailedMessage,
                errorCode: errorDetails.errorCode,
                serviceCode: errorDetails.serviceCode
            }
        };

        response.status(errorDetails.statusCode).json(errorResponse);
    }
};
const GetRequestObjectDetails = (request: Request) => {
    return {
        headers: request.headers,
        url: request.url,
        originalUrl: request.originalUrl,
        params: request.params,
        queryParams: request.query,
        body: request.body,
        ip: request.ip,
        method: request.method
    };
};

export {HttpErrorMiddleware};