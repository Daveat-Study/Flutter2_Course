import {ethers} from "ethers";
// import phone from "./phone.json";

export async function decrypt() {
    try {

        var phone = {"address":"c4d2f33328668ccf6c349a6522aed296a3ca1b59","id":"439f7f28-8d48-4e02-9677-611252a224c9","version":3,"crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"e6434e91fb4b938ac1b0f43b3b6b9236"},"ciphertext":"4c2020c0c9a420d36ab137330f10451385b5ba286d8cc2d88a60183bc5391f02","kdf":"scrypt","kdfparams":{"salt":"c8e28cc2dad21dd52f41a94500e7aab034b42260b59efbc6f6fc0fb3ebc91da7","n":131072,"dklen":32,"p":1,"r":8},"mac":"6d425a455028c268ac47b4a830e794d1a2806a5255bb339e3dacea57d45b0e67"},"x-ethers":{"client":"ethers.js","gethFilename":"UTC--2022-10-21T07-58-33.0Z--c4d2f33328668ccf6c349a6522aed296a3ca1b59","mnemonicCounter":"75ec783090d93cced1b3aadb14ed306f","mnemonicCiphertext":"d547a2a786d64dec4ae64d528541710c","path":"m/44'/60'/0'/0/0","locale":"en","version":"0.1"}};
        console.log("phone"+phone);
        //alert("phone"+phone);
        const wallet = await ethers.Wallet.fromEncryptedJson(JSON.stringify(phone), "123");
    
        //alert(wallet.mnemonic.phrase);
        console.log(wallet.mnemonic.phrase);
        return wallet.mnemonic.phrase;
    } catch (e){
        alert("Error"+e);
    }
}

decrypt();

export function myFunction(){
    alert("index.js");
}