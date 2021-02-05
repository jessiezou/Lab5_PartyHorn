// main.js

// TODO
document.getElementById('honk-btn').addEventListener('click', function (event) {

        event.preventDefault();

        if (document.getElementById('radio-car-horn').checked) {
                document.getElementById('horn-sound').setAttribute('src', './assets/media/audio/car-horn.mp3')
                document.getElementById('horn-sound').play()
        } else if (document.getElementById('radio-air-horn').checked) {
                document.getElementById('horn-sound').setAttribute('src', './assets/media/audio/air-horn.mp3')
                document.getElementById('horn-sound').play()
        } else if (document.getElementById('radio-party-horn').checked) {
                document.getElementById('horn-sound').setAttribute('src', './assets/media/audio/party-horn.mp3')
                document.getElementById('horn-sound').play()
        }
})

document.getElementById('volume-number').addEventListener('change', function () {
        document.getElementById('volume-slider').value = document.getElementById('volume-number').value;
        let volNum = document.getElementById('volume-number').value
        document.getElementById("honk-btn").disabled = false;

        if (volNum >= 67) {
                document.getElementById('volume-image').setAttribute('src', './assets/media/icons/volume-level-3.svg')
        } else if (volNum >= 34) {
                document.getElementById('volume-image').setAttribute('src', './assets/media/icons/volume-level-2.svg')
        } else if (volNum >= 1 && volNum <= 33) {
                document.getElementById('volume-image').setAttribute('src', './assets/media/icons/volume-level-1.svg')
        } else if (volNum == 0) {
                document.getElementById('volume-image').setAttribute('src', './assets/media/icons/volume-level-0.svg')
                document.getElementById("honk-btn").disabled = true;
        } else {
                document.getElementById('volume-image').setAttribute('src', './assets/media/icons/volume-level-0.svg')
                document.getElementById("honk-btn").disabled = true;
        }

        document.getElementById('horn-sound').volume = volNum * .01;
})

document.getElementById('radio-party-horn').addEventListener('click', function () {
        document.getElementById('sound-image').setAttribute('src', './assets/media/images/party-horn.svg')
})


document.getElementById('radio-car-horn').addEventListener('click', function () {
        document.getElementById('sound-image').setAttribute('src', './assets/media/images/car.svg')
})

document.getElementById('radio-air-horn').addEventListener('click', function () {
        document.getElementById('sound-image').setAttribute('src', './assets/media/images/air-horn.svg')
})


document.getElementById('volume-slider').addEventListener('change', function () {
        document.getElementById('volume-number').value = document.getElementById('volume-slider').value
        let volNum = document.getElementById('volume-slider').value
        document.getElementById("honk-btn").disabled = false;
        if (volNum >= 67) {
                document.getElementById('volume-image').setAttribute('src', './assets/media/icons/volume-level-3.svg')
        } else if (volNum >= 34) {
                document.getElementById('volume-image').setAttribute('src', './assets/media/icons/volume-level-2.svg')
        } else if (volNum >= 1 && volNum <= 33) {
                document.getElementById('volume-image').setAttribute('src', './assets/media/icons/volume-level-1.svg')
        } else if (volNum == 0) {
                document.getElementById('volume-image').setAttribute('src', './assets/media/icons/volume-level-0.svg')
                document.getElementById("honk-btn").disabled = true;
        } else {
                document.getElementById('volume-image').setAttribute('src', './assets/media/icons/volume-level-0.svg')
                document.getElementById("honk-btn").disabled = true;
        }

        document.getElementById('horn-sound').volume = volNum * .01
})

