const request = require('request')
const NodeCache = require('node-cache')
const Bing = {}
Bing.queryCache = new NodeCache()

const requestOptions = (text, uri) => ({
  uri,
  method: 'POST',
  headers: {
    'Ocp-Apim-Subscription-Key': process.env.BING_SUBSCRIPTION_KEY,
  },
  json: [{ 'Text': text }],
})

Bing.detectLanguage = (text, completionCallback) => {
  const options = requestOptions(text, process.env.BING_LANGUAGE_DETECTION_ROOT_URL)

  request(options, (error, response, body) => {
    if (body.error) {
      console.error('Bing detectLanguage error: ', body.error)
    } else {
      const srcLang = body[0].language
      completionCallback && completionCallback(srcLang)
    }
  })
}

Bing.translate = (srcLang, destLang, text, completionCallback) => {
  const uri = process.env.BING_TRANSLATION_ROOT_URL + '&from=' + srcLang + '&to=' + destLang
  const options = requestOptions(text, uri)

  request(options, (error, response, body) => {
    if (body.error) {
      console.error('Bing translate error: ', body.error)
    } else {
      const translatedText = body[0].translations[0].text
      Bing.queryCache.set((srcLang + destLang + text), translatedText)
      completionCallback && completionCallback(translatedText)
    }
  })
}

Bing.getLanguageCodes = (completionCallback, convertToJSON) => {
	const options = requestOptions(text, process.env.BING_LANGUAGES_ROOT_URL)
		
  request(options, (error, response, body) => {
		if (body.error) {
			console.error('Bing getLanguageCodes error: ', body.error)
		} else {
			if (convertToJSON) {
				Bing.queryCache.set('language_codes_json', JSON.stringify(body))
				completionCallback(JSON.stringify(body))
			} else {
				Bing.queryCache.set('language_codes', body)
				completionCallback(body)
			}
		}
  })
}

module.exports = Bing
