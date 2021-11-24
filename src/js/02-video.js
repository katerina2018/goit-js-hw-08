import Player from '@vimeo/player';
import { throttle } from 'lodash';

const player = new Player('vimeo-player', {
    width: 640,
});

player.on(
    'timeupdate',
    throttle(function(data) {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
    }, 1000),
);
window.addEventListener('DOMContentLoaded', () => {
    let seconds = localStorage.getItem('videoplayer-current-time');
    player.setCurrentTime(seconds);
});