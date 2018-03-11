var npm = require("npm")
var myConfigObject = {}
npm.load(myConfigObject, function (er) {
    if (er) return handleError(er)
    console.log(npm.get('prefix'));
})