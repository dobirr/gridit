import {setCookie, getCookie} from './cookie'

export function dsgvoVideos() {

    const getDsgvoVideoEl = document.querySelectorAll('.dsgvo_videos');

    init(getDsgvoVideoEl)

    /* set cookie on click */
    window.addEventListener('click', (e) => {
        if(e.target.closest('.dsgvo_play')) {
            setCookie('dsgvo_video', true, 30)
            init(getDsgvoVideoEl)
        }
    })


    function init(getDsgvoVideoEl) {
        for (const el of getDsgvoVideoEl) {
            const getDsgvoCoverEl = el.querySelector('.dsgvo_cover');
            const getDsgvoVideoEl = el.querySelector('.dsgvo_video');
            const getDsgvoVideoIdEl = el.querySelector('.dsgvo_video').getAttribute('data-video-id');
            const getDsgvoVideTypeoEl = el.querySelector('.dsgvo_video').getAttribute('data-video-type');


            getDsgvoCoverEl.innerHTML += `
                <button class="dsgvo_play" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: none; border: none; cursor: pointer;">
                    <img style="width: 50px; height: auto;" src="files/assets/images/fi_play.svg" alt="Play">
                </button>
                
                `



            Object.assign(getDsgvoCoverEl.style,{
                cursor: 'pointer',
                position: 'relative'
            });

            if(getCookie('dsgvo_video')) {
                getDsgvoCoverEl.style.display = "none"

                Object.assign(el.querySelector('.dsgvo_video').style,{
                    position: 'relative',
                    overflow: 'hidden',
                    width: 100 + '%',
                    paddingTop: 56.25 + '%'
                });

                getDsgvoVideoEl.style.display = "block"



            } else {
                getDsgvoVideoEl.style.display = "none"
            }

            // wenn Cookie gesetzt und type: youtube
            if(getDsgvoVideTypeoEl === "youtube" && getCookie('dsgvo_video')) {
                el.querySelector('.dsgvo_video').style.dispay = 'none';
                el.querySelector('.dsgvo_video').innerHTML = `<iframe style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%;" width="560" height="315" src="https://www.youtube-nocookie.com/embed/${getDsgvoVideoIdEl}"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>`;
            }

            // wenn Cookie gesetzt und type: vimeo
            if(getDsgvoVideTypeoEl === "vimeo" && getCookie('dsgvo_video')) {
                el.querySelector('.dsgvo_video').style.dispay = 'none';
                el.querySelector('.dsgvo_video').innerHTML = `<iframe style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%;" title="vimeo-player" src="https://player.vimeo.com/video/592202505?h=<?php echo $box->vimeoID; ?>" width="640" height="360" frameborder="0" allowfullscreen></iframe>`;
            }
        }
    }
}
