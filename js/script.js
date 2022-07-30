
$(window).on("load", function () {
    $(".loader-container").fadeOut(500, function () {
        $(this).remove()
    })
})
let myAudio = new Audio(`./audio/audio2.mp3`)
myAudio.loop = true;

$("#volumeControl").click(function () {
    $(this).toggleClass("fa-volume-up").toggleClass("fa-volume-xmark");
    let openVol = $("#volumeControl").hasClass("fa-volume-up");
    let closeVol = $("#volumeControl").hasClass("fa-volume-xmark");
    if (openVol) {
        myAudio.play()
    } else if (closeVol) {
        myAudio.pause();
    }

});

$(".aa1").click(function () {
    $("#playerLoop").html(
        `
                <div class="playerRock">
                    <input type="radio" class="btn-check aa1"  value="1"  id="aa1">
                    <div class="btn btn-danger rounded-circle  p-4">
                        <label class="btn btn-light rounded-circle p-5 " for="aa1">
                            <img src="./images/icon-rock.svg" alt="">
                        </label>
                    </div>  
                </div>
                `
    )
});
$(".aa2").click(function () {
    $("#playerLoop").html(
        `
                <div class="playerPaper">
                    <input type="radio" class="btn-check aa2" value="2" id="aa2" >
                    <div class="btn btn-info rounded-circle  p-4">
                        <label class="btn btn-light rounded-circle p-5"  for="aa2">
                            <img src="./images/icon-paper.svg" alt="">
                        </label>
                    </div>
                </div>
                `
    )
});
$(".aa3").click(function () {
    $("#playerLoop").html(
        `
                <div class="playerScissors">
                    <input type="radio" class="btn-check aa3" value="3" id="aa3" >
                    <div class="btn btn-warning rounded-circle  p-4">
                        <label class="btn btn-light rounded-circle p-5"  for="aa3">
                            <img src="./images/icon-scissors.svg" alt="">
                        </label>
                    </div>
                </div>
                `
    )
});

let Pickaa1 = Number($(".aa1").val());
let Pickaa2 = Number($(".aa2").val());
let Pickaa3 = Number($(".aa3").val());

$("#fadeInTraingle").hide()
pScore = 0;
$("#result").click(function () {

    $("#fadeOutTraingle").delay(1000).hide()
    $("#result").delay(1000).hide()
    $("#fadeInTraingle").delay(1000).show()
    $(".my-link").delay(1000).hide()
    $("#volumeControl").delay(1000).hide()

    switch (Math.floor(Math.random() * 3) + 1) {
        case Pickaa1:
            $("#computerLoop").html(`
                <div class="comRock">
                    <input type="radio" class="btn-check aa1"  value="1"  id="aa1">
                    <div class="btn btn-danger rounded-circle  p-4">
                            <label class="btn btn-light rounded-circle p-5 " for="aa1">
                                <img src="./images/icon-rock.svg" alt="">
                            </label>
                    </div>
                </div>
                `)
            break;
        case Pickaa2:
            $("#computerLoop").html(`
                <div class="comPaper">
                    <input type="radio" class="btn-check aa2" value="2" id="aa2" >
                    <div class="btn btn-info rounded-circle  p-4">
                        <label class="btn btn-light rounded-circle p-5"  for="aa2">
                            <img src="./images/icon-paper.svg" alt="">
                        </label>
                    </div>
                </div>
                `)
            break;
        case Pickaa3:
            $("#computerLoop").html(`
                <div class="comScissors">
                    <input type="radio" class="btn-check aa3" value="3" id="aa3" >
                    <div class="btn btn-warning rounded-circle  p-4">
                        <label class="btn btn-light rounded-circle p-5"  for="aa3">
                            <img src="./images/icon-scissors.svg" alt="">
                        </label>
                    </div>
                </div>
                `)
            break;
    }
    let playerRock = $("#playerLoop").children(".playerRock").hasClass("playerRock");
    let playerPaper = $("#playerLoop").children(".playerPaper").hasClass("playerPaper");
    let playerScissors = $("#playerLoop").children(".playerScissors").hasClass("playerScissors");

    let comRock = $("#computerLoop").children(".comRock").hasClass("comRock");
    let comPaper = $("#computerLoop").children(".comPaper").hasClass("comPaper");
    let comScissors = $("#computerLoop").children(".comScissors").hasClass("comScissors");

    const newScore = () => {
        let score = document.getElementById("scoreText")
        score.textContent = pScore
    }

    if (playerRock && comRock) {
        $("#textMatch").text("It is the same rock")
    } else if (playerPaper && comPaper) {
        $("#textMatch").text("It is the same paper")
    } else if (playerScissors && comScissors) {
        $("#textMatch").text("It is the same scissors")
    } else if (playerRock && comPaper) {
        $("#textMatch").text("You Lose")
        pScore--;
        newScore();
    } else if (playerRock && comScissors) {
        $("#textMatch").text("You Win")
        pScore++;
        newScore();

    } else if (playerPaper && comRock) {
        $("#textMatch").text("You Win")
        pScore++;
        newScore();
    } else if (playerPaper && comScissors) {
        $("#textMatch").text("You Lose")
        pScore--;
        newScore();
    } else if (playerScissors && comRock) {
        $("#textMatch").text("You Lose")
        pScore--;
        newScore();
    } else if (playerScissors && comPaper) {
        $("#textMatch").text("You Win")
        pScore++;
        newScore();
    } else {
        $("#textMatch").text("Something went wrong! Please choice your option")

    }
});

$("#playAgain").click(function () {
    $("#fadeInTraingle").delay(1000).hide()
    $("#fadeOutTraingle").delay(500).show()
    $("#result").delay(500).show()
    $(".my-link").delay(500).show()
    $("#volumeControl").delay(500).show()
});


