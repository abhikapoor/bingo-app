const axios = require('axios')
const acc_token = 'czZ5SFh5aHR5QzNMRHgxSDpOQW5qUHRuUHRtTGhidWZNUklkMXo5ZWJFN25HZUJGR1R0N1FkcFBDbGhrWXFWb2NRdlo3MHpDOUJiZEx3bWJs'





axios.post('https://try.access.worldpay.com/tokens', {
    token: acc_token
}).
then((res) => {
    console.log('response from the api is', res);
})