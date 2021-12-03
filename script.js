let slider= document.getElementById("slider");

slider.addEventListener("click", diapo);

function diapo(event) {
    console.log("oui");
    let image = document.getElementById("image");
    let a = event.target.getAttribute("src");
    console.log(a);
    let b = imagesSrc.indexOf(a);
    console.log(imagesSrc[b+1]);
    console.log(b+1);
    console.log(imagesSrc.length);
    if(b+1<imagesSrc.length){
        image.setAttribute("src", imagesSrc[b+1])
    }
    else{
        image.setAttribute("src", imagesSrc[0])
    }


}

let imagesSrc=[
    "photos/a (1).PNG",
    "photos/a (1).JPG",
    "photos/a (3).JPG",
    "photos/a (4).JPG",
    "photos/a (5).JPG",
    "photos/a (6).JPG",
    "photos/a (7).JPG",
    "photos/a (8).jpg",
    "photos/a (9).jpg",
    "photos/a (10).jpg",
    "photos/a (11).jpg",
    "photos/a (13).jpg",
    "photos/a (15).jpg",
    "photos/a (17).JPG",
    "photos/a (19).JPG",
    "photos/a (21).JPG",
    "photos/a (23).JPG",
    "photos/a (25).JPG",
    "photos/a (27).JPG",
    "photos/a (29).JPG",
    "photos/a (31).JPG",
    "photos/a (33).JPG",
    "photos/a (35).JPG",
    "photos/a (37).JPG",
    "photos/a (39).JPG",
    "photos/a (41).JPG",
    "photos/a (43).JPG",
    "photos/a (45).JPG",
    "photos/a (47).JPG",
    "photos/a (49).JPG",
    "photos/a (51).JPG",
    "photos/a (53).JPG",
    "photos/a (2).PNG",
    "photos/a (3).PNG",
    "photos/a (4).PNG",
    "photos/a (5).PNG",
    "photos/a (6).PNG",
    "photos/a (7).PNG",
    "photos/a (8).PNG",
    "photos/a (10).jpg",
    "photos/a (12).jpg",
    "photos/a (14).jpg",
    "photos/a (16).JPG",
    "photos/a (18).JPG",
    "photos/a (20).JPG",
    "photos/a (22).JPG",
    "photos/a (24).JPG",
    "photos/a (26).JPG",
    "photos/a (28).JPG",
    "photos/a (30).JPG",
    "photos/a (32).JPG",
    "photos/a (34).JPG",
    "photos/a (36).JPG",
    "photos/a (38).JPG",
    "photos/a (40).JPG",
    "photos/a (42).JPG",
    "photos/a (44).JPG",
    "photos/a (46).JPG",
    "photos/a (48).JPG",
    "photos/a (50).JPG",
    "photos/a (52).JPG",
    "photos/a (54).JPG",

];
