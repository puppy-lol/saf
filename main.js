var images = ["grandpa.png", "dad.png", "mo,.png", "sis.png", "bro.png",];

var name = ["Family Book", "Billy", "Bob", "Billy-lina", "Bob-ilina", "Joe"];

var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 5
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }
    var updateImage = images[i];
    document.getElementById("family_member_image").src = updateImage;
    document.getElementById("family_member_name").innerHTML = name[i];
}