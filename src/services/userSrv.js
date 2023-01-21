import httpCommon from '../httpCommon';

class userSrv{
    register(pageName, data) {
        return httpCommon.post(pageName, data);
    }
    login(pageName, data) {
        return httpCommon.post(pageName, data);
    }
}

export default new userSrv();