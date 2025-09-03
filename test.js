const fs = require('fs')
const rawData = fs.readFileSync('data.json', 'utf8');
const jsonData = JSON.parse(rawData);
console.log("jsonData : ", jsonData)
console.log("jsonData['icp'] : ", jsonData["icp"])