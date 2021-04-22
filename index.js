const express = require('express')
const app = express()
const port = 3000

const spawn = require('child_process').spawn;

const createHLSVOD = spawn('bash', ['create-hls-vod.sh', 'uploads/sample-mp4-file.mp4', 'm3u8']);
createHLSVOD.stdout.on('data', d => console.log(`stdout info: ${d}`));
createHLSVOD.stderr.on('data', d => console.log(`stderr error: ${d}`));
createHLSVOD.on('error', d => console.log(`error: ${d}`));
createHLSVOD.on('close', code => console.log(`child process ended with code ${code}`));