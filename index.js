initializeContainer()

function initializeContainer() {
    document.getElementById('color-picker').value = '#E85E5E'
    getColorScheme('E85E5E', 'analogic')
}

document.getElementById('btn').addEventListener('click', () => {
    const color = document.getElementById('color-picker').value.replace('#', '')
    const mode = document.getElementById('mode').value
    
    getColorScheme(color, mode)
})

function getColorScheme(color, mode) {
    const output = document.getElementById('output')
    
    output.innerHTML = ''
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            data.colors.forEach(color => {
                output.innerHTML += `
                <div class="strip">
                    <div class="color" style="background-color: ${color.hex.value}"></div>
                    <div class="hex">${color.hex.value}</div>
                </div>`
            })
        })
}
