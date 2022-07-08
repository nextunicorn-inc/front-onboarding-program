export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Char: any;
  Date: any;
  DateTime: any;
  LocalDateTime: any;
  Long: any;
};

export type AddCompanyToCollectionInput = {
  collectionId: Scalars['String'];
  companyIds: Array<Scalars['String']>;
};

export enum AddressTypeEnum {
  /** 지번 주소 */
  J = 'J',
  /** 도로명 주소 */
  R = 'R',
}

/**  지원 분야 */
export enum AreaEnum {
  Co = 'CO',
  Cz = 'CZ',
  Ed = 'ED',
  En = 'EN',
  Fs = 'FS',
  La = 'LA',
  Mc = 'MC',
  Om = 'OM',
  Rd = 'RD',
}

export enum ArticleTypeEnum {
  /** MAIN_NEWS */
  Mn = 'MN',
  /** RELATED_NEWS */
  Rn = 'RN',
  /** TEAM_CULTURE */
  Tc = 'TC',
}

export enum CollectionType {
  /** 관심 기업 */
  Ic = 'IC',
  /** 마켓 리포트 */
  Mr = 'MR',
}

export enum CompanySizeTypeEnum {
  /** Fifty */
  F = 'F',
  /** Hundred */
  H = 'H',
  /** MoreThanHundred */
  Mh = 'MH',
  /** Ten */
  T = 'T',
}

export type CreateCollectionInput = {
  name: Scalars['String'];
  type: CollectionType;
};

export type CreateCompanyInput = {
  completionLevel: Scalars['Int'];
  completionPercentage: Scalars['Int'];
  investing: Scalars['Boolean'];
  investmentAmountVisibility: Scalars['Int'];
  investmentHistoryVisibility: Scalars['Int'];
  investmentPhaseVisibility: Scalars['Int'];
  lookingForInvestment: Scalars['Boolean'];
  memberVisibility: Scalars['Int'];
  name: Scalars['String'];
  organizing: Scalars['Boolean'];
  verified: Scalars['Boolean'];
  visible: Scalars['Boolean'];
};

export type DeleteCompanyFromCollectionInput = {
  collectionId: Scalars['String'];
  companyIds: Array<Scalars['String']>;
};

export enum ErrorDetail {
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  DeadlineExceeded = 'DEADLINE_EXCEEDED',
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  EnhanceYourCalm = 'ENHANCE_YOUR_CALM',
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  FieldNotFound = 'FIELD_NOT_FOUND',
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  InvalidArgument = 'INVALID_ARGUMENT',
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  InvalidCursor = 'INVALID_CURSOR',
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  MissingResource = 'MISSING_RESOURCE',
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  ServiceError = 'SERVICE_ERROR',
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TcpFailure = 'TCP_FAILURE',
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  ThrottledConcurrency = 'THROTTLED_CONCURRENCY',
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  ThrottledCpu = 'THROTTLED_CPU',
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  Unimplemented = 'UNIMPLEMENTED',
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Unknown = 'UNKNOWN',
}

export enum ErrorType {
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  BadRequest = 'BAD_REQUEST',
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  FailedPrecondition = 'FAILED_PRECONDITION',
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Internal = 'INTERNAL',
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NotFound = 'NOT_FOUND',
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  PermissionDenied = 'PERMISSION_DENIED',
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  Unauthenticated = 'UNAUTHENTICATED',
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  Unavailable = 'UNAVAILABLE',
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  Unknown = 'UNKNOWN',
}

export type InquiryInput = {
  companyName: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  phone: InputMaybe<Scalars['String']>;
  question: InputMaybe<Scalars['String']>;
  termAgreement: InputMaybe<Scalars['Boolean']>;
  title: InputMaybe<Scalars['String']>;
};

export type NuProStartupCompanyFilterType = {
  /** 벤치마크점수 : 지정된 범위 */
  benchmarkScore: InputMaybe<NumberRangeFilterType>;
  /** 활용기술 */
  biz: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 대표자의 성별 */
  ceoGender: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 대표자의 학력: 최종학력 -> 최대 다섯 */
  ceoGraduateSchool: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 스타트업 인증 */
  companyCertification: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 업력: 범위 */
  companyHistory: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 팀원수 */
  companySize: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 기업가치 : 지정된 범위 */
  companyValuation: InputMaybe<NumberRangeFilterType>;
  /** 법인구분 : 범위 */
  corporationType: InputMaybe<Scalars['Int']>;
  /** 휴폐업여부 */
  isClosing: InputMaybe<Scalars['Boolean']>;
  /** 최근투자유치금액 : 지정된 범위(gte, lte) */
  lastInvestingAmount: InputMaybe<NumberRangeFilterType>;
  /** 최근투자유치일자 : 직접입력 */
  lastInvestingDateRange: InputMaybe<StringRangeFilterType>;
  /** 최근투자유치일자 : 지정된 범위 */
  lastInvestingDateType: InputMaybe<Scalars['String']>;
  /** 최근투자단계 : 범위 */
  lastInvestmentPhase: InputMaybe<Scalars['Int']>;
  /** 지역: 범위 */
  location: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
  /** 영업이익 : 지정된 범위 */
  operatingIncome: InputMaybe<NumberRangeFilterType>;
  pageable: InputMaybe<PageableFilterType>;
  /** 참여투자기관 : 불러온 값 선택 => 최대 다섯 */
  participateInvestmentCompany: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** 매출액 : 지정된 범위 */
  salesRevenue: InputMaybe<NumberRangeFilterType>;
  /**  sort 받아올 형태 수정 필요 */
  sort: InputMaybe<Scalars['Int']>;
  /** 비즈니스분야: depth 2까지 */
  tech: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 총투자유치금액 : 지정된 범위(gte, lte) */
  totalInvestingAmount: InputMaybe<NumberRangeFilterType>;
};

export type NumberRangeFilterType = {
  max: InputMaybe<Scalars['Long']>;
  min: InputMaybe<Scalars['Long']>;
};

export type PageableFilterType = {
  page: InputMaybe<Scalars['Int']>;
  size: InputMaybe<Scalars['Int']>;
};

export type RegisterUserInput = {
  activated: Scalars['Boolean'];
  email: Scalars['String'];
  introduction: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phoneVerified: Scalars['Boolean'];
};

export type StringRangeFilterType = {
  max: InputMaybe<Scalars['String']>;
  min: InputMaybe<Scalars['String']>;
};

/**  지원프로그램 타입 */
export enum SupportProgramTypeEnum {
  /**  외부 신청 */
  Sl = 'SL',
  /**  간편 신청 */
  Snl = 'SNL',
  /**  일반 신청 */
  Snlp = 'SNLP',
}

export type SupportProgramsFilterType = {
  areas: InputMaybe<Array<AreaEnum>>;
  hosts: InputMaybe<Array<Scalars['String']>>;
  page: InputMaybe<Scalars['Int']>;
  targetCompanyAges: InputMaybe<Array<TargetCompanyAgeEnum>>;
  type: InputMaybe<SupportProgramTypeEnum>;
};

/**  창업 기간 */
export enum TargetCompanyAgeEnum {
  M8 = 'M8',
  Nm = 'NM',
  Ps = 'PS',
  U3 = 'U3',
  U7 = 'U7',
}

export type UpdateCollectionInput = {
  collectionId: Scalars['String'];
  name: Scalars['String'];
  type: CollectionType;
};

export type SupportProgramBannersQueryVariables = Exact<{ [key: string]: never }>;

export type SupportProgramBannersQuery = {
  supportProgramBanners: Array<{
    amplitudeEvent: string | null;
    backgroundColor: string | null;
    desktopImageUrl: string | null;
    link: string | null;
    mobileImageUrl: string | null;
    subTitle: string | null;
    subTitleColor: string | null;
    title: string | null;
    titleColor: string | null;
  } | null> | null;
};

export type TechnologiesQueryVariables = Exact<{ [key: string]: never }>;

export type TechnologiesQuery = {
  technologies: Array<{
    createdAt: any | null;
    depth: number | null;
    id: number | null;
    name: string | null;
    parentId: number | null;
    priority: number | null;
    count: number | null;
  } | null> | null;
};
