const fetch = require('node-fetch');
const { VKOnlineError, VKAPIError } = require('../src/error');

module.exports = class VKOnline {
    /**
     * 
     * @param {String} token - VK Token 
     */
    constructor(token) {
        this.token = token;
    };

    /**
     * Start endless online
     */
    async start() {
        if (!this.token) throw new VKOnlineError('Token');

        let response = await fetch(`https://api.vk.com/method/account.setOnline?access_token=${this.token}&v=5.95`);
        response = await response.json();

        if (typeof response.error !== 'undefined') throw new VKAPIError(response.error.error_code, response.error.error_msg);
        console.log('Online has been updated.')

        setTimeout(async() => {
            this.start();
        }, 300000);
    }
};