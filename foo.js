const CookieManager = {
  getAllCookie: function (name) {
    let returnObj = {};
    let tmpArray = document.cookie.split(";");
    for (let i = 0; i < tmpArray.length; i++) {
      if (tmpArray[i] != "") {
        let splitCookieString = tmpArray[i].split("=");
        try {
          returnObj[splitCookieString[0].trim()] = JSON.parse(
            splitCookieString[1]
          );
        } catch (e) {
          returnObj[splitCookieString[0].trim()] = splitCookieString[1];
        }
      }
    }
    return returnObj;
  },
  getCookie: function (name) {
    let returnObj = {};
    let tmpArray = document.cookie.split(";");
    for (let i = 0; i < tmpArray.length; i++) {
      if (tmpArray[i] != "") {
        if (tmpArray[i].includes(name + "=")) {
          let splitCookieString = tmpArray[i].split("=");
          try {
            returnObj[splitCookieString[0]] = JSON.parse(splitCookieString[1]);
          } catch (e) {
            returnObj[splitCookieString[0]] = splitCookieString[1];
          }
        }
      }
    }
    return returnObj;
  },
  setCookie: function (name, value) {},
  deleteAllCookies: function () {
    document.cookie = "";
  },
  deleteCookie: function (name) {
    //
  },
};
module.exports = CookieManager;
