const { SerialPort } = require('serialport');

const port = new SerialPort({
    path: '/dev/ttyACM0',
    baudRate: 9600
});

let outVal = 0;
function writeAndUpdate() {
    port.write(outVal.toString());
    if (outVal == 0)
        outVal = 1;
    else
        outVal = 0;
    setTimeout(writeAndUpdate, Math.random() * (5000 - 1000) + 1000);
}

writeAndUpdate();

port.on('error', (err) => {
    console.error('Serial port error:', err.message);
});
