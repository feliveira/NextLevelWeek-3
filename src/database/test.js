const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then( async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.5908081",
        lng: "-46.7330952",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"943458532",
        images: [
            "https://images.unsplash.com/photo-1580673786010-4cde024ea5b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1554312879-371d7377dea0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato, pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    /*//deletar dado da tabela
    console.log(await db.run("DELETE FROM orphanages WHERE id='4'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id='5'"))*/
})