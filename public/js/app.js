window.onload = () => {
    const weatherForm = document.querySelector("form")
    const search = document.querySelector('input')
    const messageOne = document.querySelector('#message-1')
    const locationHtml = document.querySelector('#location')

    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const location = search.value

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error){
                console.log(data.error)
            }else {
                locationHtml.textContent = data.location
                messageOne.textContent = data.forecast 
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})
}

// fetch('http://localhost:3000/weather?address=Karachi').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })
