//create map
const map = L.map('mapid').setView([-23.5908081,-46.7230952], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;


//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

// add photo field
function addPhotoField() {
    //pegar o container de fotos
    const container = document.querySelector('#images')

    //pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if(input.value == "") {
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deletePhotoField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo 
    span.parentNode.remove()
    
}

//selecionar o sim ou não
function toggleSelect(event) {
    //retirar da class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'))
   
    //colocar a class .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //alterar valor do input hidden
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

}

function validate(event) {
    
    const lat = document.querySelector('[name=lat]').value
    const lng = document.querySelector('[name=lng]').value
    //validar se lat e lng estão preenchidos
    
    if(!(lat && lng) )
    {
        alert("Selecione um ponto no mapa")
        event.preventDefault()
    }
}