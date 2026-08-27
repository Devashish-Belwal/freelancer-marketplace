export type ApiErrorCode =
    | "INTERNAL_SERVER_ERROR"
    | "INVALID_REQUEST"
    | "UNAUTHORIZED"
    | "FORBIDDEN"
    | "INVALID_CREDENTIALS"
    | "EMAIL_ALREADY_EXISTS"
    | "PROJECT_NOT_FOUND"
    | "PROJECT_NOT_OPEN"
    | "PROPOSAL_ALREADY_EXISTS"
    | "PROPOSAL_NOT_FOUND"
    | "PROPOSAL_ALREADY_PROCESSED";

export class ApiError extends Error {
    constructor(
        public readonly code: ApiErrorCode,
        message: string,
        public readonly status: number,
    ) {
        super(message);

        this.name = "ApiError";
    }
}