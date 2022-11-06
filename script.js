let score = 0;
        let cross = true;

        function Startgame() {
            let anidrag = document.querySelector('.movedragon')
            let button = document.querySelector('#btn')
            anidrag.style.animationPlayState = 'running';
            button.style.display = 'none';
        }

        document.onkeydown = function (a) {
            console.log(a.keyCode);
            if (a.keyCode == 38)                       //38 for up key
            {
                let play = document.querySelector('.player');
                play.classList.add('animatejump');
                setTimeout(() => {
                    play.classList.remove('animatejump');
                }, 700);
            }
            else if (a.keyCode == 39)              //39 for right
            {
                let play = document.querySelector('.player');
                console.log(play.left);
                let playleft = parseInt(window.getComputedStyle(play, null).getPropertyValue('left'));
                console.log(playleft);
                // parseInt(playleft);
                // play=playleft+5+"px";
                play.style.left = playleft + 160 + "px";;
                console.log(playleft);
            }
            else if (a.keyCode == 37)              //37 for left
            {
                let play = document.querySelector('.player');
                console.log(play.left);
                let playleft = parseInt(window.getComputedStyle(play, null).getPropertyValue('left'));
                console.log(playleft);
                // parseInt(playleft);
                // play=playleft+5+"px";
                play.style.left = playleft - 150 + "px";;
                console.log(playleft);
            }
        }

        function moveleft(a) {
            let aRect = a.getBoundingClientRect();
            console.log(aRect.left);
            aRect.left += 5;
            console.log(aRect.left);
        }

        let b = setInterval(() => {
            let Start = document.getElementById('btn')
            let player = document.querySelector('.player');
            let gameover = document.querySelector('.gameover');
            let dragon = document.querySelector('.dragon');
            let anidrag = document.querySelector('.movedragon')


            let ans = isCollide(player, dragon);
            console.log(ans);
            if (ans == true) {
                console.log("Ho gaya")
                gameover.style.display = 'block';
                anidrag.style.animationPlayState = 'paused';
                let gover = document.getElementById('gamekhatam');
                gover.play();
                player.classList.add('losted');
                gameover.innerHTML = "Game Over => Reload to play again";
                clearInterval(b);
            }
            else {
                if(cross)
                {

                
                if (Start.style.display == 'none') {
                    score += 1;
                    let sc = document.querySelector('.score');
                    sc.innerHTML = "Your Score : " + score;
                }
                cross=false;
                setTimeout(()=>{
                    cross=true;
                },3000)
            }
            }
        }, 100);

        function isCollide(a, b) {
            var aRect = a.getBoundingClientRect();
            var bRect = b.getBoundingClientRect();

            return !(
                ((aRect.top + aRect.height) < (bRect.top)) ||
                (aRect.top > (bRect.top + bRect.height)) ||
                ((aRect.left + aRect.width) < bRect.left) ||
                (aRect.left > (bRect.left + bRect.width))
            );
        }
