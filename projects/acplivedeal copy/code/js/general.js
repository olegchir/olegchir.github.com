var MSG_TYPE_OK = 'OK';
var MSG_TYPE_ERROR = 'ERROR';

var MSG_TXT_MESSAGE = 'Message';
var MSG_TXT_ERROR = 'Error During Operation';

function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    
    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }
    
    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

function normalizeMessage(message) {
	var msg = "Unknown error";
	if(typeof(message) == "string") {
		msg = msg + ": " + message;
	}
	if(typeof(message) != "object") {
		message = {};
	}
	if(typeof(message.type) == "undefined") {
		message.type = MSG_TYPE_ERROR;
	}
	if((message.type == MSG_TYPE_ERROR) && (typeof(message.text) == "undefined")) {
		message.text = msg;
	}
	return message;
}

function showMessage(message) {
	switch(message.type){
		case MSG_TYPE_OK:
			$.pnotify({
				pnotify_title: MSG_TXT_MESSAGE,
				pnotify_text: message.text,
				pnotify_notice_icon: 'ui-icon ui-icon-mail-closed'
			});
		break;
		case MSG_TYPE_ERROR:
			$.pnotify({
				pnotify_title: MSG_TXT_ERROR,
				pnotify_text: message.text,
				pnotify_type: 'error',
				pnotify_error_icon: 'ui-icon ui-icon-signal-diag'
			});
		break;
		default:
			$.pnotify({
				pnotify_title: '',
				pnotify_text: message.text,
				pnotify_type: 'question',
				pnotify_notice_icon: 'ui-icon ui-icon-mail-closed'
			});
	}
}

function normalizeResponse(resp, base) {
	var r = (typeof(base)=='object'?base:{});
	if(typeof(resp) == 'object') {
		r = $.extend(r, resp);
	} else {
		r.message = resp;
	}

	if(typeof(r.message) == 'undefined') {
		r.message = "no message defined";
	}
	
	r.message = normalizeMessage(r.message);

	return r;
}

//post(url[, params], callback[, responseDefault])
function post(url, params, callback, responseDefault, needLoader) {
	var _url = url, _params, _callback, _responseDefault;
	if(typeof(needLoader) == 'undefined' || needLoader) {
		needLoader = true;
	} else {
		needLoader = false;
	}
	if(typeof(params) == 'function') {
		responseDefault = callback;
		callback = params;
		params = {};
	}
	_params = params;
	_callback = callback;
	_responseDefault = responseDefault || {};
	$.prettyLoader.show();
	$.post(url, params, function(resp) {
		$.prettyLoader.hide();
		resp = normalizeResponse(resp, _responseDefault);
		callback.call(this, resp.message, resp);
	}, 'json');
}

var Base64 = {

	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

}
