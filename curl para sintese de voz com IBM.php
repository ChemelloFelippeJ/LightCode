curl -X POST -u "apikey:APIKEY" \
--header "Content-Type: application/json" \
--data "{\"text\":\"Maçã, colchão, caça\"}" \
--output export.ogg \
"https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/synthesize?voice=pt-BR_IsabelaVoice"
