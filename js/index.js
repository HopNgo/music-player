const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const songs = [
    {
        name: "Tình Đẹp Đến Mấy Cũng Tàn Thôi",
        singer: "Như Việt",
        path: "https://vnso-zn-15-tf-mp3-s1-zmp3.zadn.vn/54a93e461f01f65faf10/1176338179174070267?authen=exp=1642043635~acl=/54a93e461f01f65faf10/*~hmac=cc366560b4bb79bb6968d148526c6432&amp;fs=MTY0MTg3MDgzNTQzMXx3ZWJWNnwwfDE0LjE3NC4xMzEdUngMTE2",
        image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/7/3/2/5/73257d3f2cb6b1c16719bebc443980f9.jpg",
    },
    {
        name: "Hơn Cả Yêu",
        singer: "Đức Phúc",
        path: "https://vnso-zn-15-tf-mp3-s1-zmp3.zadn.vn/a63b11400c07e559bc16/6706952041522412104?authen=exp=1642044021~acl=/a63b11400c07e559bc16/*~hmac=79bfd4f5eef9d44fa9f674fbbc825755&amp;fs=MTY0MTg3MTIyMTmUsICwM3x3ZWJWNnwxMDMxNTg3NDEwfDI3LjmUsICxLjUyLjU",
        image:
            "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/a/9/e/d/a9ed142c215560ab45f6b2b433907f90.jpg",
    },
    {
        name: "Cứ Ngỡ Là Anh",
        singer: "Đinh Tùng Huy",
        path: "https://vnso-zn-10-tf-mp3-s1-zmp3.zadn.vn/086a057d193af064a92b/7005370822568069825?authen=exp=1642043909~acl=/086a057d193af064a92b/*~hmac=f2aa10203c9bf64f29957145cfd78296&amp;fs=MTY0MTg3MTEwOTU2NHx3ZWJWNnwxMDE0MTMxOTU3fDExNy4xLjE2Mi4yMTE",
        image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/3/8/2/5/382563b06858cc9c5b7397a81ed62761.jpg",
    },
    {
        name: "Đánh Mất Em",
        singer: "Quang Đăng Trần",
        path: "https://mp3-s1-zmp3.zadn.vn/10dbaa50e2170b495206/5778850278162108473?authen=exp=1642044315~acl=/10dbaa50e2170b495206/*~hmac=3ed2d2b6a2fb0c26ee2809f8f9f79def&amp;fs=MTY0MTg3MTUxNTA2OHx3ZWJWNnwxMDM0MTQ1NjA0fDExMy4xOTAdUngMjMzLjmUsICz",
        image:
            "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/8/3/6/9/83690ac46c2ba7cf46b153e6226c974d.jpg",
    },
    {
        name: "Anh Từng Cố Gắng",
        singer: "Nhật Phong",
        path: "https://vnso-zn-10-tf-mp3-s1-zmp3.zadn.vn/d0e04cf5feb217ec4ea3/7334509728721487332?authen=exp=1642044040~acl=/d0e04cf5feb217ec4ea3/*~hmac=4edc7ef54ea6ffa80bc1378189d8c7ae&amp;fs=MTY0MTg3MTI0MDQ2N3x3ZWJWNnwwfDQyLjExMi44OS4yNA",
        image:
            "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/7/7/1/9/771952620070edb088442430b60ea681.jpg",
    },
    {
        name: "Răng Khôn",
        singer: "Phí Phương Anh, RIN9",
        path: "https://vnso-zn-10-tf-mp3-s1-zmp3.zadn.vn/a2e92a371e71f72fae60/1885276178088752158?authen=exp=1642043944~acl=/a2e92a371e71f72fae60/*~hmac=a32d933587e7304e9d797a925f37d8e8&amp;fs=MTY0MTg3MTE0NDE5Mnx3ZWJWNnwwfDI3LjmUsIC5Ljk0LjIwMg",
        image:
            "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/b/7/b/5/b7b5b99e4aa374702ce8ee64858a9bbb.jpg",
    },
    {
        name: "Khi Em Lớn",
        singer: "Orange, Hoàng Dũng",
        path: "https://mp3-s1-zmp3.zadn.vn/21518188bace53900adf/1536582395499953959?authen=exp=1642044125~acl=/21518188bace53900adf/*~hmac=7b919cf7d761721aa282811024071abc&amp;fs=MTY0MTg3MTMyNTk2MXx3ZWJWNnwwfDEyMy4xNi4xMy4zNw",
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