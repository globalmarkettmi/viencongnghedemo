import * as CryptoJS from 'crypto-js';

const sceretKey = '212k@!#!@#DASDA@!#!@';

export function enCryptAES(data: string) {

  let encrypted = CryptoJS.AES.encrypt(data, sceretKey).toString();
  return encrypted;
}

export function deCryptAES(dataEnCrypted: string) {
  let bytes = CryptoJS.AES.decrypt(dataEnCrypted, sceretKey);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);

  return originalText;
}

