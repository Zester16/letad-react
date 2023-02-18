/// if its prodcution then base url will be different, else for production it will be prod url
const env = process.env.NODE_ENV;
module.exports.baseUrl = "production" === env ? "https://letad-log.ue.r.appspot.com" : "http://localhost:8080"