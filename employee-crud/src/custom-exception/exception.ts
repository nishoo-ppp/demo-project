
class Exception extends Error {
    statusCode: number;
    type: string;
    stackTrace?: string;
    serviceCode?: number;
    errorCode: number;
    detailedMessage: string;
    smTraceId?: string;
    level?: string;
    smanshaErrorDetails?: string;
    constructor(exception,  message: string, stack?: string) {
        super(message);
        this.message = exception.message;
        this.detailedMessage = message || "Something went wrong";
        this.statusCode = exception.statusCode || 500;
        this.type = exception.type || "Internal Server Exception";
        this.stackTrace = stack || ' No Stack Trace';
        this.serviceCode = Number(process.env.SERVICE_CODE);
        this.errorCode = exception.errorCode;
    }
}
export {Exception};