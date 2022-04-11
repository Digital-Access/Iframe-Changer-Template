const config = {
    videos: [
        "https://fast.wistia.net/embed/iframe/gqpzyivli7?seo=false&videoFoam=true",
        "https://fast.wistia.net/embed/iframe/mbibneqh9f?seo=false&videoFoam=true",
        "https://fast.wistia.net/embed/iframe/rmv4no9y9d?seo=false&videoFoam=true",
        "https://fast.wistia.net/embed/iframe/9i2ybzrl5w?seo=false&videoFoam=true",
        "https://fast.wistia.net/embed/iframe/6dygkgtgfh?seo=false&videoFoam=true",
        "https://fast.wistia.net/embed/iframe/kvx4rlwmu3?seo=false&videoFoam=true"
    ],
    next_button: "Next Lesson",
    previous_button: "Previous Lesson"
}


const nxtBtn = document.getElementById('nxtBtn');
const prevBtn = document.getElementById('prevBtn');
const video = document.getElementById('video');
const progress = document.getElementById('progress');
const total = document.getElementById('total')

total.textContent = config.videos.length;
nxtBtn.textContent = config.next_button;
prevBtn.textContent = config.previous_button;
video.src = config.videos[0];

let i = 0;
progress.textContent = i + 1;

let max = config.videos.length;
const nextVideo = () => {
    if (i < max - 1) {
        i++
        video.src = config.videos[i];
    }
    progress.textContent = i + 1;
}

nxtBtn.addEventListener('click', nextVideo)


const prevVideo = () => {
    if (i != 0) {
        i--
        video.src = config.videos[i];
    }
    progress.textContent = i + 1;
}


prevBtn.addEventListener('click', prevVideo)