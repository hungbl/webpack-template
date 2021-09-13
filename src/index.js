import './styles/main.scss'

const heading = document.createElement('h1')
heading.textContent = 'Webpack Tutorial by hungbui'

const app = document.querySelector('#root')
if (app) {
    app.append(heading)
}