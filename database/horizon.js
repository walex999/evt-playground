db = db.getSiblingDB('horizon');

db.security_identity_providers.insert({
    enabled: true,
    type: "Local",
    name: "Local",
    enabledOnUI: true
});

db.security_local_identities.insert({
    identifier: 'administrator',
    hash: '$6$HGHXzE6FSS8TyNbz$JjJND42uRZOlJFEncFAPZZ3Cw3TV.oFUmmCg7Ju.e1mrBMYOFhHc4hy12nT8qKzp1nasqI13JH64UMxsLK92U1',
    name: 'Horizon Administrator'
});

db.security_principals.insert({
    identifier: "administrator",
    permissions: [
        {value: "configuration:*"},
        {value: "lifecycle:*"}
    ],
    roles: []
});

db.security_local_identities.insert({
    identifier: 'horizon-cli',
    hash: '$6$HGHXzE6FSS8TyNbz$JjJND42uRZOlJFEncFAPZZ3Cw3TV.oFUmmCg7Ju.e1mrBMYOFhHc4hy12nT8qKzp1nasqI13JH64UMxsLK92U1',
    name: 'Horizon Client'
});

db.security_principals.insert({
    identifier: "horizon-cli",
    permissions: [
        {value: "lifecycle:*"},
        {value: "discovery:*"},
    ],
    roles: []
});

db.pki_connectors.insert({
    name: 'Integrated',
    type: 'integrated',
    certType: 'serverclient',
    signAlg: 'SHA256',
    crtLifetime: '365 days',
    checkPop: true
});

db.pki_connectors.insert({
    name: 'Stream',
    type: 'stream',
    endPoint: 'http://stream:9000',
    template: 'TLS_Server',
    ca: 'Demo_Root_CA',
    timeout: '10 seconds',
    login: 'horizon',
    password: {
        horizonKey: '649b09933400003c00f88b02',
        vaultKey: 'OWuhMcEbKCP29CRiOV1oYg=='
    }
});

db.profiles.insert({
    module: 'webra',
    name: 'TLS_Server_Stream',
    enabled: true,
    pkiConnector: 'Stream',
    authorizationLevels: {
        revoke: {accessLevel: 'authorized'},
        requestRevoke: {accessLevel: 'authorized'},
        approveRevoke: {accessLevel: 'authorized'},
        search: {accessLevel: 'authorized'},
        update: {accessLevel: 'authorized'},
        requestUpdate: {accessLevel: 'authorized'},
        approveUpdate: {accessLevel: 'authorized'},
        enroll: {accessLevel: 'authorized'},
        enrollApi: {accessLevel: 'authorized'},
        requestEnroll: {accessLevel: 'authorized'},
        approveEnroll: {accessLevel: 'authorized'},
        recover: {accessLevel: 'authorized'},
        recoverApi: {accessLevel: 'authorized'},
        requestRecover: {accessLevel: 'authorized'},
        approveRecover: {accessLevel: 'authorized'},
        migrate: {accessLevel: 'authorized'},
        requestMigrate: {accessLevel: 'authorized'},
        approveMigrate: {accessLevel: 'authorized'},
        renew: {accessLevel: 'authorized'},
        renewApi: {accessLevel: 'authorized'},
        requestRenew: {accessLevel: 'authorized'},
        approveRenew: {accessLevel: 'authorized'},
        auditRequest: {accessLevel: 'authorized'}
    },
    requestsPolicy: {
        enroll: '7 days',
        revoke: '7 days',
        update: '7 days',
        migrate: '7 days',
        renew: '7 days'
    },
    cryptoPolicy: {
        centralized: true,
        decentralized: true,
        escrow: false,
        defaultKeyType: 'rsa-2048',
        preferredEnrollmentMode: 'decentralized',
        p12passwordMode: 'random',
        p12storeEncryptionType: 'DES_AVERAGE',
        showP12PasswordOnEnroll: false,
        showP12OnEnroll: false,
        showP12PasswordOnRecover: false,
        showP12OnRecover: false
    },
    selfPermissions: {
        selfUpdate: false,
        selfRevoke: false,
        selfRenew: false,
        selfPopRenew: false,
        selfPopRevoke: false,
        selfPopUpdate: false,
        selfRecover: false
    },
    displayName: [],
    description: [],
    csrDataMapping: {},
    triggers: {onEnroll: [], onRevoke: [], onRenew: []},
    certificateTemplate: {
        subject: [
            {
                type: 'CN',
                mandatory: true,
                editableByRequester: true,
                editableByApprover: false
            },
            {
                type: 'O',
                mandatory: true,
                value: 'Demo Org',
                editableByRequester: true,
                editableByApprover: false
            },
            {
                type: 'C',
                mandatory: true,
                value: 'FR',
                editableByRequester: false,
                editableByApprover: false
            }
        ],
        sans: [
            {
                type: 'DNSNAME',
                editableByRequester: true,
                editableByApprover: false
            }
        ],
        ownerPolicy: {
            editableByRequester: false,
            editableByApprover: false,
            mandatory: false
        },
        teamPolicy: {
            editableByRequester: false,
            editableByApprover: false,
            mandatory: false
        },
        contactEmailPolicy: {
            mandatory: false,
            editableByRequester: true,
            editableByApprover: false
        }
    }
});

db.certificate_authorities.insert({
    name: 'Demo Root CA',
    certificate: '-----BEGIN CERTIFICATE-----\n' +
        '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\n' +
        'yQibblm9HFhXY+ZVSCt/op70Xn5barsi57FbIw==\n' +
        '-----END CERTIFICATE-----',
    trustedForClientAuthentication: false,
    trustedForServerAuthentication: false,
    outdatedRevocationStatusPolicy: 'revoked',
    public: true,
    subjectKeyIdentifier: '23a878026ffb2cd59c266b5313a509858c22a72b',
    refresh: '10 minutes',
    timeout: '10 seconds'
});

db.profiles.insert({
    module: 'est',
    name: 'EST_TLS_Server_Stream',
    ca: 'Demo Root CA',
    pkiConnector: 'Stream',
    authorizationMode: 'authorized',
    dnWhitelist: false,
    authorizationLevels: {
        revoke: { accessLevel: 'authorized' },
        requestRevoke: { accessLevel: 'authorized' },
        approveRevoke: { accessLevel: 'authorized' },
        search: { accessLevel: 'authorized' },
        update: { accessLevel: 'authorized' },
        requestUpdate: { accessLevel: 'authorized' },
        approveUpdate: { accessLevel: 'authorized' },
        enroll: { accessLevel: 'authorized' },
        requestEnroll: { accessLevel: 'authorized' },
        approveEnroll: { accessLevel: 'authorized' },
        recover: { accessLevel: 'authorized' },
        recoverApi: { accessLevel: 'authorized' },
        requestRecover: { accessLevel: 'authorized' },
        approveRecover: { accessLevel: 'authorized' },
        migrate: { accessLevel: 'authorized' },
        requestMigrate: { accessLevel: 'authorized' },
        approveMigrate: { accessLevel: 'authorized' },
        auditRequest: { accessLevel: 'authorized' }
    },
    requestsPolicy: { revoke: '7 days', update: '7 days', migrate: '7 days' },
    enabled: true,
    selfPermissions: {
        selfUpdate: false,
        selfRevoke: false,
        selfRenew: false,
        selfPopRenew: false,
        selfPopRevoke: false,
        selfPopUpdate: false,
        selfRecover: false
    },
    cryptoPolicy: {
        centralized: false,
        decentralized: true,
        escrow: false,
        p12passwordMode: 'manual',
        p12storeEncryptionType: 'DES_AVERAGE',
        showP12PasswordOnRecover: false,
        showP12OnRecover: false
    },
    displayName: [],
    description: [],
    constraints: {},
    csrDataMapping: {},
    triggers: {},
    certificateTemplate: {
        subject: [
            {
                type: 'CN',
                mandatory: true,
                editableByRequester: true,
                editableByApprover: false
            },
            {
                type: 'O',
                mandatory: false,
                editableByRequester: true,
                editableByApprover: false
            },
            {
                type: 'C',
                mandatory: false,
                editableByRequester: true,
                editableByApprover: false
            }
        ],
        sans: [
            {
                type: 'DNSNAME',
                editableByRequester: true,
                editableByApprover: false
            }
        ],
        ownerPolicy: {
            editableByRequester: false,
            editableByApprover: false,
            mandatory: false
        },
        teamPolicy: {
            editableByRequester: false,
            editableByApprover: false,
            mandatory: false
        },
        contactEmailPolicy: {
            mandatory: false,
            editableByRequester: true,
            editableByApprover: false
        }
    }
});

db.automation_policies.insert({
    name: 'Demo_Server',
    profile: 'EST_TLS_Server_Stream',
    compliancePolicy: {}
});