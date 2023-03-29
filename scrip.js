function calculerVMA() {
    var distance = parseFloat(document.getElementById("distance").value);
    var temps = parseFloat(document.getElementById("temps").value);
    var vitesse = distance / (temps / 60);
    var vma = vitesse * 1000 / 60;
    document.getElementById("vma").value = vma.toFixed(2) + " km/h";
  }
  
  var destinationUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  var clickCount = 0;
  var resetDelay = 10000;
  
  function buttonClicked() {
    clickCount++;
    if (clickCount == 5) {
      window.location.href = destinationUrl;
    }
  }
  
  document.getElementById("mon-bouton").addEventListener("click", buttonClicked);
  
  setInterval(function() {
    clickCount = 0;
  }, resetDelay);
class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  const phrases = [
    '3DPIE',
    'Cartron Jules',
    'Dev_\By',
  ]
  const el = document.querySelector('.text')
  const fx = new TextScramble(el)
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2500)
    })
    counter = (counter + 1) % phrases.length
  }
  next()
  