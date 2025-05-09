const axios = require('axios');

const baseUrl = process.env.LIBRETRANSLATE_API_URL || 'http://ASK-ME-FOR-THIS:5000';

async function translateText(sourceLang, targetLang, text) {
    try {
        const response = await axios.post(`${baseUrl}/translate`, {
            q: text,
            source: sourceLang,
            target: targetLang,
            format: 'text'
        });
        let translation = response.data.translatedText;

        // You probably want to add something right here!!!!!!!!!!!

        console.error('Translated text:');
        console.log(translation);
        return translation;
    } catch (error) {
        console.error('Translation error:', error.response ? error.response.data : error.message);
    }
}

// Example usage
const sourceLang = process.argv[2];  // e.g., 'en' (English)
const targetLang = process.argv[3];  // e.g., 'es' (Spanish)
const text = process.argv[4];        // e.g., 'Hello, world!'

if (sourceLang && targetLang && text) {
    translateText(sourceLang, targetLang, text);
} else {
    console.log('Usage: node app.js <sourceLang> <targetLang> "<text>"\nLanguage codes are:\nsq -> Albanian\nar -> Arabic\naz -> Azerbaijani\neu -> Basque\nbn -> Bengali\nbg -> Bulgarian\nca -> Catalan\nzh-Hans -> Chinese\nzh-Hant -> Chinese (traditional)\ncs -> Czech\nda -> Danish\nnl -> Dutch\nen -> English\neo -> Esperanto\net -> Estonian\nfi -> Finnish\nfr -> French\ngl -> Galician\nde -> German\nel -> Greek\nhe -> Hebrew\nhi -> Hindi\nhu -> Hungarian\nid -> Indonesian\nga -> Irish\nit -> Italian\nja -> Japanese\nko -> Korean\nlv -> Latvian\nlt -> Lithuanian\nms -> Malay\nnb -> Norwegian\nfa -> Persian\npl -> Polish\npt -> Portuguese\npt-BR -> Portuguese (Brazil)\nro -> Romanian\nru -> Russian\nsk -> Slovak\nsl -> Slovenian\nes -> Spanish\nsv -> Swedish\ntl -> Tagalog\nth -> Thai\ntr -> Turkish\nuk -> Ukrainian\nur -> Urdu');
}
