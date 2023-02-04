function answer(num){
    tags = document.querySelectorAll(".active");
    for (tag of tags) {
        tag.classList.remove("active");
    }
    
    for(tag of tags) {
        if(tag.classList.contains(num))
            return
    }

    tags = document.getElementsByClassName(num);
    for(tag of tags) {
        tag.classList.add("active");
    }
}