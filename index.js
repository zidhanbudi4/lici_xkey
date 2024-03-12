const genId1 = require('dpyy_xid');
const genId2 = require('ttui_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|1Kp5n1YK6l|' + genId2()).digest('base64');
}


module.exports = generateKey;
