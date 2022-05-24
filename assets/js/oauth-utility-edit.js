function getOAuthURL(trackingId, masterAddr, provider, callback) {
	var xhr, queryStr;
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			if (callback) {
				let oauthUrl = xhr.responseText;
				let requestId = xhr.getResponseHeader('X-FMS-Request-ID');
				callback(oauthUrl, requestId);
			}
		}
	};
	queryStr = 'trackingID=' + trackingId + '&provider=' + provider + '&address=' + masterAddr + '&X-FMS-OAuth-AuthType=2';
	xhr.open('GET', '/fmi/webd/oauthapi/getoauthurl?' + queryStr, true);
	xhr.setRequestHeader('X-FMS-Application-Type', '8');
	xhr.setRequestHeader('X-FMS-Return-URL', "https://" + masterAddr + '/fmi/webd/oauth-landing.html');
	xhr.send();
}

