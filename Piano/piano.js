const keys = document.querySelectorAll('.key');
const regulars = document.querySelectorAll('.key-white')
const sharps = document.querySelectorAll('.key-black')
const whites = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const blacks = ['w', 'e', 'r', 't', 'y']

keys.forEach(key => {
    key.addEventListener = ('click', () => playNote(key))
});

document.addEventListener('keydown', e =>{
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = whites.indexOf(key)
    const blackKeyIndex = blacks.indexOf(key)

    if(whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex])
    if(blackKeyIndex > -1) playNote(sharps[blackKeyIndex])
})

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () =>{
        key.classList.remove('active')
    })
}