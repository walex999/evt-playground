db = db.getSiblingDB('stream');

db.security_accounts.insert({
    type: 'local',
    identifier: 'administrator',
    name: 'Stream Administrator',
    secret: '$6$HGHXzE6FSS8TyNbz$JjJND42uRZOlJFEncFAPZZ3Cw3TV.oFUmmCg7Ju.e1mrBMYOFhHc4hy12nT8qKzp1nasqI13JH64UMxsLK92U1',
    permissions: [ { value: 'configuration:*' }, { value: 'lifecycle:*' } ]
});

db.security_accounts.insert({
    type: 'local',
    identifier: 'horizon',
    secret: '$6$HGHXzE6FSS8TyNbz$JjJND42uRZOlJFEncFAPZZ3Cw3TV.oFUmmCg7Ju.e1mrBMYOFhHc4hy12nT8qKzp1nasqI13JH64UMxsLK92U1',
    permissions: [ { value: 'lifecycle:*' } ]
});

db.keystores.insert({
    type: 'software',
    name: 'Default',
    description: 'Default software keystore'
});

db.software_keys.insert({
    name: 'Demo_Root_CA',
    keystore: 'Default',
    description: { type: 'suiteb', keyType: 'rsa', keySize: 4096 },
    key: {
        secure: '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'
    }
});

db.cas.insert({
    type: 'managed',
    name: 'Demo_Root_CA',
    trustedForClientAuthentication: false,
    trustedForServerAuthentication: false,
    enroll: true,
    privateKey: { keystore: 'Default', name: 'Demo_Root_CA' },
    hashAlgorithm: 'SHA256',
    enforceKeyUnicity: false,
    certificate: '-----BEGIN CERTIFICATE-----\n' +
        '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\n' +
        'yQibblm9HFhXY+ZVSCt/op70Xn5barsi57FbIw==\n' +
        '-----END CERTIFICATE-----'
});

db.templates.insert({
    name: 'TLS_Server',
    crldpsFromCA: false,
    aiaFromCA: true,
    policyFromCA: false,
    enabled: true,
    ku: {
        critical: true,
        values: [
            'digitalSignature',
            'nonRepudiation',
            'keyEncipherment',
            'keyAgreement'
        ]
    },
    eku: {
        critical: false,
        values: [
            { name: 'serverAuth', oid: '1.3.6.1.5.5.7.3.1', custom: false }
        ]
    },
    aia: { certificate: [], ocsp: [] },
    lifetime: '365 days',
    checkPoP: true
});

db.templates.insert({
    name: 'TLS_Client',
    crldpsFromCA: false,
    aiaFromCA: true,
    policyFromCA: false,
    enabled: true,
    ku: {
        critical: false,
        values: [
            'digitalSignature',
            'keyEncipherment',
            'dataEncipherment',
            'keyAgreement'
        ]
    },
    eku: {
        critical: false,
        values: [
            { name: 'clientAuth', oid: '1.3.6.1.5.5.7.3.2', custom: false }
        ]
    },
    aia: { certificate: [], ocsp: [] },
    lifetime: '365 days',
    checkPoP: true
});