const CryptoJS = require('crypto-js')


const encryptAES = (text, key) => {
    return CryptoJS.AES.encrypt(text, key).toString();
};


const decryptAES = (encryptedBase64, key) => {
    const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key);
    if (decrypted) {
        try {
            console.log(decrypted);
            const str = decrypted.toString(CryptoJS.enc.Utf8);
            if (str.length > 0) {
                return str;
            } else {
                return 'error 1';
            }
        } catch (e) {
            return 'error 2';
        }
    }
    return 'error 3';
};


const key = 'teste'

const value = 'ola mundo'

const encoded = encryptAES(value, key)
console.log({ encoded })
const valueDecoded = decryptAES(encoded, key)
console.log({ valueDecoded })