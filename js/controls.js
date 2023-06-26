export default function Controls( {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
}) {

    function play() {        
        buttonPlay.classList.toggle('hide');
        buttonPause.classList.toggle('hide');
        buttonSet.classList.add('hide');
        buttonStop.classList.remove('hide');
    }

    function pause() {
        buttonPause.classList.toggle('hide');
        buttonPlay.classList.toggle('hide');
    }

    function reset() {
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
        buttonStop.classList.add('hide');
        buttonSet.classList.remove('hide');
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?');
        if (!newMinutes) {
            return false
        }
        return newMinutes;
    }

    return {
        play,
        pause,
        reset,
        getMinutes
    }
}
