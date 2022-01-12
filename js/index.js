const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const songs = [
    {
        name: "Tình Đẹp Đến Mấy Cũng Tàn Thôi",
        singer: "Như Việt",
        path: "./music-player/assets/audios/tinhdepdenmaycungtanthoi.mp3",
        image: "./music-player/assets/images/tinhdepdenmaycungtanthoi.png",
    },
    {
        name: "Hơn Cả Yêu",
        singer: "Đức Phúc",
        path: "./music-player/assets/audios/honcayeu.mp3",
        image:
            "./music-player/assets/images/honcayeu.png",
    },
    {
        name: "Cứ Ngỡ Là Anh",
        singer: "Đinh Tùng Huy",
        path: "./music-player/assets/audios/cungolaanh.mp3",
        image: "./music-player/assets/images/cungolaanh.png",
    },
    {
        name: "Đánh Mất Em",
        singer: "Quang Đăng Trần",
        path: "./music-player/assets/audios/danhmatem.mp3",
        image:
            "./music-player/assets/images/danhmatem.png",
    },
    {
        name: "Anh Từng Cố Gắng",
        singer: "Nhật Phong",
        path: "./music-player/assets/audios/anhtungcogang.mp3",
        image:
            "./music-player/assets/images/anhtungcogang.png",
    },
    {
        name: "Răng Khôn",
        singer: "Phí Phương Anh, RIN9",
        path: "./music-player/assets/audios/rangkhon.mp3",
        image:
            "./music-player/assets/images/rangkhon.png",
    },
    {
        name: "Khi Em Lớn",
        singer: "Orange, Hoàng Dũng",
        path: "./music-player/assets/audios/khiemlon.mp3",
        image:
            "./music-player/assets/images/khiemlon.png",
    }
];

let currentItemPlaying = 0;
let isPlaying = true;
let isRandom = false;
let isRepeat = false;

function render() {
    const htmls = songs.map((song, index) => {
        return `
        <div class="item ${index === currentItemPlaying ? "active" : ""}" data-index = "${index}">
            <div class="img-song">
                <img src="${song.image}" alt="Photo Songs" />
            </div>
            <div class="infor-song">
                <h3 class="name-song">${song.name}</h3>
                <p class="author-song">${song.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
      </div>`
    });
    $('.playlist').innerHTML = htmls.join("");
}
render();

const cdWidth = $('.cd').offsetWidth;

document.onscroll = function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const newcdWidth = cdWidth - scrollTop;
    $('.cd').style.width = newcdWidth > 0 ? newcdWidth + 'px' : 0;
    $('.cd').style.opacity = newcdWidth / cdWidth;
}

function loadCurrentSongs() {
    $('.header h2').textContent = songs[currentItemPlaying].name;
    $('.cd img').setAttribute('src', songs[currentItemPlaying].image);
    $('#audio').src = songs[currentItemPlaying].path;
}

loadCurrentSongs();


const animateCD = $('.cd img').animate([{ transform: 'rotate(360deg)' }], { duration: 10000, iterations: Infinity })
animateCD.pause();

$('#audio').onplay = function () {
    animateCD.play();
    $('.player').classList.add('playing');
    isPlaying = false;
}
$('#audio').onpause = function () {
    isPlaying = true;
    animateCD.pause();
    $('.player').classList.remove('playing');
}
$('#audio').ontimeupdate = function (e) {
    if ($('#audio').duration) {
        let progressPercent = $('#audio').currentTime / $('#audio').duration * 100;
        $('#progress').value = progressPercent;
    }
}

$('#progress').onchange = function (e) {
    $('#audio').currentTime = e.target.value * $('#audio').duration / 100;
}

$('.btn-toggle-play').onclick = function () {
    if (isPlaying) {
        $('#audio').play();
    }
    else {
        $('#audio').pause();
    }
}

function nextSong() {
    currentItemPlaying++;
    if (currentItemPlaying >= songs.length) {
        currentItemPlaying = 0;
    }
    loadCurrentSongs();
}
function previousSong() {
    currentItemPlaying--;
    if (currentItemPlaying <= 0) {
        currentItemPlaying = songs.length - 1;
    }
    loadCurrentSongs();
}

function playRandomSongs() {
    let newIndex = 0;
    do {
        newIndex = Math.floor(Math.random() * songs.length);
    } while (currentItemPlaying === newIndex);
    currentItemPlaying = newIndex;
    loadCurrentSongs();
}
function playRepeatSongs() {
    loadCurrentSongs();
}

$('.btn-next').onclick = function () {
    if (isRandom) {
        playRandomSongs();
    }
    else {
        nextSong();
    }
    $('#audio').play();
    render();
}
$('.btn-previous').onclick = function () {
    if (isRandom) {
        playRandomSongs();
    }
    else {
        previousSong();
    }
    $('#audio').play();
    render();
}

$('.btn-random').onclick = function () {
    isRandom = !isRandom;
    $('.btn-random').classList.toggle('active');
}
$('.btn-repeat').onclick = function () {
    isRepeat = !isRepeat;
    $('.btn-repeat').classList.toggle('active');
}

$('#audio').onended = function () {
    if (isRandom) {
        playRandomSongs();
    }
    else if (isRepeat) {
        playRepeatSongs();
    }
    else {
        nextSong();
    }
    $('#audio').play();
    render();
}

$('.playlist').onclick = function (e) {
    const itemNode = e.target.closest('.item:not(.active)');
    if (itemNode && !e.target.closest('.option')) {
        currentItemPlaying = Number(itemNode.dataset.index);
        loadCurrentSongs();
        $('#audio').play();
        render();
    }

}