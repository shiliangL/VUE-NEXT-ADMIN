
const JavaScript01 = {
  data: [
    { name: 'A', text: 'clap', key: 65, src: './sounds/clap.wav' },
    { name: 'S', text: 'hihat', key: 83, src: './sounds/hihat.wav' },
    { name: 'D', text: 'kick', key: 68, src: './sounds/kick.wav' },
    { name: 'F', text: 'openhat', key: 70, src: './sounds/openhat.wav' },
    { name: 'G', text: 'boom', key: 71, src: './sounds/boom.wav' },
    { name: 'H', text: 'ride', key: 72, src: './sounds/ride.wav' },
    { name: 'J', text: 'snare', key: 74, src: './sounds/snare.wav' },
    { name: 'K', text: 'tom', key: 75, src: './sounds/tom.wav' },
    { name: 'L', text: 'tink', key: 76, src: './sounds/tink.wav' }
  ],
  removeTransition: function(event) {
    if (event.propertyName !== 'transform') return // 过滤其中一种事件
    event.target.classList.remove('playing') // 移除高亮的样式
  },
  play: function(event) {
    const currentAudio = document.querySelector(`.audio${event.keyCode}`)
    if (!currentAudio) return
    const keyDiv = document.querySelector(`div[data-key="${event.keyCode}"]`)
    keyDiv.classList.add('playing')
    currentAudio.currentTime = 0
    currentAudio.play()
  },
  renderHtml: function() {
    let list = ''
    let audiolist = ''
    const keys = document.querySelector('.keys-wrap')
    const audios = document.querySelector('.audios')
    this.data.forEach(item => {
      list += `<div data-key="${item.key}" class="key">
          <kbd>${item.name}</kbd>
          <span class="sound">${item.text}</span>
        </div>`
      audiolist += `<audio class="audio${item.key}" data-key="${item.key}" src="${item.src}"></audio>`
    })

    keys.innerHTML = list
    audios.innerHTML = audiolist

    const keysList = Array.from(document.querySelectorAll('.key'))
    keysList.forEach(item => item.addEventListener('transitionend', this.removeTransition))
    window.addEventListener('keydown', this.play)
  },
  init: function() {
    this.renderHtml()
  }
}

JavaScript01.init()
