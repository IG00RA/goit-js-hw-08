import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
if (iframe) {
    const player = new Player(iframe);
    player.on('timeupdate', throttle(data => {
        localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000));
    player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')) || 0);
}
