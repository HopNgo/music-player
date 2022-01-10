const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const songs = [
    {
        name: "Tình Đẹp Đến Mấy Cũng Tàn Thôi",
        singer: "Như Việt",
        path: "https://vnso-zn-15-tf-mp3-s1-zmp3.zadn.vn/54a93e461f01f65faf10/1176338179174070267?authen=exp=1638350715~acl=/54a93e461f01f65faf10/*~hmac=d3caa7821c202c44334cef00adf299d8&amp;fs=MTYzODE3NzkxNTQ4M3x3ZWJWNnwwfDEdUngNTQdUngMjE2LjEyMg",
        image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/7/3/2/5/73257d3f2cb6b1c16719bebc443980f9.jpg",
    },
    {
        name: "Hơn Cả Yêu",
        singer: "Đức Phúc",
        path: "https://vnso-zn-15-tf-mp3-s1-zmp3.zadn.vn/a63b11400c07e559bc16/6706952041522412104?authen=exp=1638351011~acl=/a63b11400c07e559bc16/*~hmac=b3110442bbffb93794f674e2a21fef6e&amp;fs=MTYzODE3ODIxMTmUsICzN3x3ZWJWNnwxMDmUsIC4NzM5NzA3fDExNS43NC45Ny4x",
        image:
            "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/a/9/e/d/a9ed142c215560ab45f6b2b433907f90.jpg",
    },
    {
        name: "Cứ Ngỡ Là Anh",
        singer: "Đinh Tùng Huy",
        path: "https://vnso-zn-10-tf-mp3-s1-zmp3.zadn.vn/086a057d193af064a92b/7005370822568069825?authen=exp=1638351068~acl=/086a057d193af064a92b/*~hmac=0db952b8a0004481d5f766e5cea5c1dd&amp;fs=MTYzODE3ODI2ODEyMHx3ZWJWNnwwfDE3MS4yMzEdUngNzkdUngMTMz",
        image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/3/8/2/5/382563b06858cc9c5b7397a81ed62761.jpg",
    },
    {
        name: "Đánh Mất Em",
        singer: "Quang Đăng Trần",
        path: "https://vnso-zn-5-tf-mp3-s1-zmp3.zadn.vn/10dbaa50e2170b495206/5778850278162108473?authen=exp=1638350785~acl=/10dbaa50e2170b495206/*~hmac=530048e29332f121162f6cfb8298811f&amp;fs=MTYzODE3Nzk4NTUzNnx3ZWJWNnwwfDEyNS4yMzUdUngMjM0LjIzMQ",
        image:
            "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/8/3/6/9/83690ac46c2ba7cf46b153e6226c974d.jpg",
    },
    {
        name: "Anh Từng Cố Gắng",
        singer: "Nhật Phong",
        path: "https://mp3-s1-zmp3.zadn.vn/d0e04cf5feb217ec4ea3/7334509728721487332?authen=exp=1638351131~acl=/d0e04cf5feb217ec4ea3/*~hmac=2bcfe42b3f005958efaf75645d79607a&amp;fs=MTYzODE3ODMzMTkzOXx3ZWJWNnwwfDExNi4xMDgdUngOTYdUngMTE0",
        image:
            "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/7/7/1/9/771952620070edb088442430b60ea681.jpg",
    },
    {
        name: "Răng Khôn",
        singer: "Phí Phương Anh, RIN9",
        path: "https://mp3-s1-zmp3.zadn.vn/a2e92a371e71f72fae60/1885276178088752158?authen=exp=1638365820~acl=/a2e92a371e71f72fae60/*~hmac=422cb558927898cd1ed0b6c401433ef4&amp;fs=MTYzODE5MzAyMDI3NXx3ZWJWNnwxMDU5OTkxNzM1fDExNi4xMDmUsICdUngMTgxLjI1",
        image:
            "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/b/7/b/5/b7b5b99e4aa374702ce8ee64858a9bbb.jpg",
    },
    {
        name: "Khi Em Lớn",
        singer: "Orange, Hoàng Dũng",
        path: "https://mp3-s1-zmp3.zadn.vn/21518188bace53900adf/1536582395499953959?authen=exp=1638366144~acl=/21518188bace53900adf/*~hmac=db0aa8f7353e2f949a7e916ea9552b56&amp;fs=MTYzODE5MzM0NDE1MXx3ZWJWNnwwfDExMy4yMy4xNy4zNw",
        image:
            "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/c/4/3/a/c43a3f7cc98ee9c62401edb8fb999b74.jpg",
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