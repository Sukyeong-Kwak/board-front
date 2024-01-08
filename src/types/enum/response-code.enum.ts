enum ResponseCode {
    // HTTP Status 200
    SUCCESS = "SU",

    // HTTP Status 400
    VALLIDATION_FAILED = "VF",
    DUPLICATE_EMAIL = "DE",
    DUPLICATE_NICKNAME = "DN",
    DUPLICATE_TEL_NUMBER = "DT",
    NOT_EXISTED_USER = "NE",
    NOT_EXISTED_BOARD = "NB",

    // HTTP Status 401
    SIGN_IN_FAIL = "SF",
    AUTHRIZATION_FAILED = "AF",

    // HTTP Status 403
    NO_PERMISSION = "NP",

    // HTTP Status 500
    DATABASE_ERROR = "DBE",
}

export default ResponseCode;