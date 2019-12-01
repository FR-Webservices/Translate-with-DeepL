#!/usr/bin/env sh

version=$(cat manifest.json | jq -r '.version')

zip "Translate_with_DeepL_$version.zip" icons/* background.js manifest.json
