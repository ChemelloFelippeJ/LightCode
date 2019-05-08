curl -X POST -u "apikey:8w_K02s9oDd-TH3DxPRSxxuwRFHn4ldhOvNWsnvOWtFq" \
--header "Content-Type: application/json" \
--data "{\"text\":\"Maçã, colchão, caça\"}" \
--output export.ogg \
"https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/synthesize?voice=pt-BR_IsabelaVoice"
