/**
 * Created by korman on 14.04.17.
 */

class Config
{
    constructor() {
        this._baseUrl = 'http://dev.kankan/app_dev.php/';
    }

    get baseUrl() {
        return this._baseUrl;
    }
}

export default Config;