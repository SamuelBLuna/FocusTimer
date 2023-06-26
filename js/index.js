import Controls from './controls.js';
import Timer from './timer.js';
import { elemets } from './elements.js';
import Sounds from './sound.js';

const {
    buttonPlay,
    buttonStop,
    buttonPause,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondsDisplay,
} = elemets;

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sounds();

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.toggle('hide');
    buttonSoundOff.classList.toggle('hide');
    sound.bgAudio.pause();
})

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.toggle('hide');
    buttonSoundOff.classList.add('hide');
    sound.bgAudio.play();
})

buttonPlay.addEventListener('click', () => {
    controls.play();
    timer.countDown();
    sound.pressButton();
})

buttonPause.addEventListener('click', () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
})

buttonStop.addEventListener('click', () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
})

buttonSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
        timer.reset()
        return
    }
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes)
})

