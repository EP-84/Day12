function myNes() {

    var myStorage = {

        "car" : {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }


        }

    };

myStorage.car["inside"]["glove box"]

var gloveBoxContents = myStorage.car["inside"]["glove box"]
return gloveBoxContents;

}
console.log(myNes());
module.exports = myNes;