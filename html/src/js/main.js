fetch('./src/data/links.json')
    .then(response => response.json())
    .then(data => {
        if (!Array.isArray(data)) {
            console.error('O JSON não contém um array válido.')
        }

        const container = document.querySelector('.list')
        if (!container) {
            console.error('Elemento .list não encontrado.')
            return
        }

        data.forEach(link => {
            const card = document.createElement('div')
            card.className = `card ${link.cardColor || 'orange'}`

            const anchor = document.createElement('a')
            anchor.href = link.link
            anchor.target = "_blank"
            anchor.rel = "noopener noreferrer"

            const info = document.createElement('div')
            info.className = 'info'

            const icon = document.createElement('i')
            icon.className = `fa-solid fa-${link.icon}`

            const title = document.createElement('h2')
            title.textContent = link.nome || 'Sem título'

            const type = document.createElement('div')
            type.className = 'type'
            type.textContent = link.type || ''

            info.appendChild(icon)
            info.appendChild(title)
            anchor.appendChild(info)
            anchor.appendChild(type)
            card.appendChild(anchor)
            container.appendChild(card)
        })
    })
    .catch(error => console.error('Erro ao carregar os links:', error))
