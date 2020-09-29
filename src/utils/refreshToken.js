export function refreshTokenFnc(cb, param) {
    var username = localStorage.getItem('af_username');
    var rToken = localStorage.getItem('af_refresh_token');
    fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/auth', {
        method: 'POST',
        body: JSON.stringify({ username: username, refresh_token: rToken, is_refresh: true })
    })
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log('refreshed');
        console.log(res);
        localStorage.setItem('af_token', res.token);
        if(param !== false) {
            cb(param);
        }
        else {
            cb();
        }
    });
}