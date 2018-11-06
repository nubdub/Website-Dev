// Initialize SpeechSynth API
const synth = window.speechSynthesis;

const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pithValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

let voices = [];

const getVoices = () => {

    voices = synth.getVoices();
    voices.forEach(voice => {
        const option = document.createElement('option');
        // Fill option with voice and language
        option.textContent = voice.name + '(' + voice.lang + ')';
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
};

// Speak
const speak = () => {
    if (synth.speaking) {
        console.error('Already speaking');
        return;
    }
    if (textInput.value !== '') {
        const speakText = new SpeechSynthesisUtterance(textInput.value);
        speakTest.onend = () => {
            console.log('Done speaking')
        };
        speakText.onerror = () => {
            console.log('Something went wrong');
        };

        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name')

        // Loop through voices
        voices.forEach(voice => {
            if (voice.name === selectedVoice) {
                speakText.voice = voice;

            }
        }
        };
    });
};

// Fix the problem of empty array
synth.onvoiceschanged = getVoices;