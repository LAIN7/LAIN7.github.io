var array =[ "burlington_northern_caboose.jpg" , "burlington_northern_caboose_interior.jpg" , "new_023.jpg", "new_033.jpg", "pumpcar.jpg", "rr_restoration_of_4523_005.jpg", "RR_restoration_of_4524_002.jpg", "scale_frisco_locomotive.jpg", "track_motorcar.jpg"]
function swapImg() {
   ads = document.getElementById('ads');
    if (Math.floor(Math.random() * 10) <= 1) {
        ads.innerHTML = "<img class='swap-img' src='images\\" + array[0]+"'>";
    } else if (Math.floor(Math.random() * 10 ) <= 2) {
       ads.innerHTML = "<img class='swap-img' src='images\\" + array[1]+"'>";
    } else if (Math.floor(Math.random() * 10) <= 3) {
        ads.innerHTML = "<img class='swap-img' src='images\\" + array[2]+"'>";
    } else if (Math.floor(Math.random() * 10) <= 4) {
        ads.innerHTML = "<img class='swap-img' src='images\\" + array[3]+"'>";
    } else if (Math.floor(Math.random() * 10) <= 5) {
        ads.innerHTML = "<img class='swap-img' src='images\\" + array[4]+"'>";
    } else if (Math.floor(Math.random() * 10) <= 6) {
        ads.innerHTML = "<img class='swap-img' src='images\\" + array[5]+"'>";
    } else if (Math.floor(Math.random() * 10) <= 7) {
        ads.innerHTML = "<img class='swap-img' src='images\\" + array[6]+"'>";
    }else if (Math.floor(Math.random() * 10) <= 8) {
        ads.innerHTML = "<img class='swap-img' src='images\\" + array[7]+"'>";
    }else if (Math.floor(Math.random() * 10) <= 9) {
        ads.innerHTML = "<img class='swap-img' src='images\\" + array[8]+"'>";
    }
}


