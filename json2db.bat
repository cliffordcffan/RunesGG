echo off
title json2db
::Commenting
::cd /d C:\Program Files\MongoDB\Server\3.6\bin
mongoimport --host clusterthefirst-shard-00-00-ym3yd.mongodb.net:27017 --db LOL --collection runesReforged --type json --file C:\Users\Clifford\Downloads\runesReforged.json --jsonArray --authenticationDatabase admin --ssl --username ReadWrite --password readingwriting123
echo json uploaded
