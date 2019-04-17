const discord = require('discord.js');
const ytdl = require('ytdl-core');
const tools = require('./functions.js')
const YouTube = require('simple-youtube-api')
const GOOGLE_API_KEY = "AIzaSyB_pIjmxyiGkgdRRSVt1yJBlKzF_9_aQ7s"
const prefix = "*";
TOKEN = "NTYxMjgwNTQyNzc2MjI5OTE4.XLVhiA.YRlTeygMim5-5qMPy8YOtZ-oTPI";
const ytdlDiscord = require('ytdl-core-discord');
const { readdirSync } = require('fs');
const { join } = require('path');

const { Collection } = require('discord.js');


require('dotenv').config();


const MusicClient = require('./struct/Client');

const client = new MusicClient({ token: process.env.DISCORD_TOKEN, prefix: process.env.DISCORD_PREFIX });

const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(join(__dirname, 'commands', `${file}`));
    client.commands.set(command.name, command);
}

client.on('warn', console.warn);
const youtube = new YouTube(GOOGLE_API_KEY);

client.on('error', console.error);

const PREFIX= "*";


client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));



const queue = new Map();

client.on("ready", () => {
    console.log("ready");

    client.user.setActivity("espiandolos a todos");

    answered = true;
    cAnswer = "";
    userAnswer = "";
    


});
    
const fs = require("fs");
client.msgs = require("./msgs.json");
client.on("guildMemberAdd", memeber => {

    var role = memeber.guild.role.find("name", "invitado");
    member.addRole(role);

});

client.on("guildMemberRemove", member => {


})


ownerID = "331262808539004939";






client.on("message", async message => {

    message.content.toLowerCase;

   
    let ops = {
        ownerID: ownerID
    }

    if (message.author.bot) return;

    msg = message.content.toLowerCase();
  

    if (msg.startsWith(prefix + "hola")) {
        message.reply("hola mortal que pasa ");

       

    }
    if (message.content.startsWith(prefix + "historia")) {
        message.channel.send("Hace mucho tiempo, durante la guerra del Magistrado y los Paladines hubo una historia secreta desconocido por muchos reinos, que sin embargo es muy importante y para eso estoy yo aqui para embarcarte en ese relato.\n\nDurante un tiempo habia  paz entre los clanes pero todo cambio cuando la paz termino, durante las guerras los clanes se habian separado en tres grupos, los que apoyaban al Magistrado, los que no querian verse involucrados y los que se oponian al Magistrado, ya que les parecia una dictadura, cerca de 15 ciclos solares pasaron antes de que el Magistrado se diera cuenta de la importancia de los clanes, al principio fue encargo de la casa Aico barrer con los clanes que no eran aliados, despues de varios meses de guerras los clanes neutrales desaparecieron antes de que siquiera pudieran darse cuenta de su error.El clan Aico festejando por su victoria en las montañas del este, fueron atacados por 4 clanes, siendo asi su derrota, forzando al Magistrado a ir por una nueva alternativa llamando al mejor clan de todos los Black Fenix, al enterarse de esto la alianza de clanes mando llamar para tener lo que podria ser su ultima batalla, los representantes de los 4 clanes eran Snow lider de SAK conocida por su valentia, JB lider de ZWZ conocido por su perseverancia, Genesis miembro de los cazadores conocida por sus arriesgadas tacticas y Raeve miembro  de los dioses como cabras conocido por su perfecta maniobra con los cuchillos, una vez todos reunidos estaban consternados puesto que no les queda mas opcion que ir todos a la guerra en lo que consideraron seria la ultima batalla.Una vez en el campo de batalla se podia sentir el miedo puesto que la encargada de esta batalla era la lider Arte llamada asi por ser maestra en todo tipo de magia, estrategia, alquimia y aniquilacion de seres vivos.\n La batalla fue corta.\n Esa es la historia sin contar, mi mision es contar lo que pocos saben. Mi nombre es Yuima - Jojan, conocida como Dark y esto aun no acaba.");
    }
    if (message.content.startsWith(prefix + ":eyes:")) {
        message.channel.send(":eyes:");
    }

    if (message.content.startsWith(prefix + "ying")) {
        message.channel.send("osi osi ", { files: ["\ying.png"] });
    }

    if (msg.startsWith(prefix + "healying")) {
        message.channel.send("osi osi ", { files: ["\ying2.jpg"] });
    }
    if (msg.startsWith(prefix + "miv1")) {
        message.channel.send("hola gatito ", { files: ["\miv1.jpg"] });
    }

    if (msg.startsWith(prefix + "mainmiv")) {
        message.channel.send("como un carton 5 ", { files: ["\miv2.jpg"] });
    }

    if (msg.startsWith(prefix + "nummiv")) {
        message.channel.send("num num owo ", { files: ["\miv3.gif"] });
    }
    if (msg.startsWith(prefix + "ash1")) {
        message.channel.send("ni en tus sueños bb ", { files: ["\ash1.jpg"] });
    }
    if (msg.startsWith(prefix + "darksmurf")) {
        message.channel.send("Este dark ", { files: ["\dark.jpg"] });
    }
    if (message.content.startsWith(prefix + "seris1")) {
        message.channel.send("Que dijiste mortal ", { files: ["\seris1.png"] });
    }

    if (message.content.startsWith(prefix + "roar")) {
        message.channel.send("roar ", { files: ["./roar.jpg"] });
    }


    
   if (message.content.startsWith(prefix + "fullbustergray")) {
        message.channel.send(" se acerca gray sama ", { files: ["./juvia.gif"] });
    }
    if (message.content.startsWith(prefix + "snowblack")) {
        message.channel.send("La lider suprema llego(ex lider) ", { files: ["./snowblack.gif"] });
    }
    if (message.content.startsWith(prefix + "jojan5")) {
        message.channel.send(" ... ", { files: ["./jojan5.gif"] });
    }
    if (message.content.startsWith(prefix + "arte")) {
        message.channel.send(" arte ", { files: ["./arte.gif"] });
    }
    if (message.content.startsWith(prefix + "hammy")) {
        message.channel.send(" hammy", { files: ["./hammy.gif"] });
    }
    if (message.content.startsWith(prefix + "genesis")) {
        message.channel.send(" roar ", { files: ["./genesis.gif"] });
    }
    if (message.content.startsWith(prefix + "ejep")) {
        message.channel.send(" lol ", { files: ["./ejep.gif"] });
    }
    if (message.content.startsWith(prefix + "santi")) {
        message.channel.send(":( ", { files: ["./santi.gif"] });
    }
    if (message.content.startsWith(prefix + "destructshiro")) {
        message.channel.send(":) ", { files: ["./shiro.gif"] });
    }
    meme1 = "\images/meme1.jpg"; meme2 = "\images/meme2.jpg"; meme3 = "\images/meme3.jpg"; meme4 = "\images/meme4.jpg"; meme5 = "\images/meme5.jpg"; meme6 = "\images/meme6.jpg"; meme7 = "\images/meme7.jpg";
    meme8 = "\images/meme8.jpg"; meme9 = "\images/meme9.jpg"; meme10 = "\images/meme10.jpg"; meme11 = "\images/meme11.jpg"; meme12 = "\images/meme12.jpg"; meme13 = "\images/meme13.jpg"; meme14 = "\images/meme14.jpg";

    meme15 = "\images/meme15.jpg"; meme16 = "\images/meme16.jpg"; meme17 = "\images/meme17.jpg"; meme18 = "\images/meme18.gif";
    meme19 = "\images/meme19.jpg"; meme20 = "\images/meme20.jpg"; meme21 = "\images/meme21.jpg"; meme22 = "\images/meme22.jpg";
    meme23 = "\images/meme23.jpg"; meme24 = "\images/meme24.jpg"; meme25 = "\images/meme25.jpg"; meme26 = "\images/meme26.jpg";
    meme27 = "\images/meme27.jpg"; meme28 = "\images/meme28.jpg"; meme29 = "\images/meme29.jpg"; meme30 = "\images/meme30.jpg";
    meme31 = "\images/31.jpg"; meme32 = "\images/32.jpg"; meme33 = "\images/meme33.jpg"; meme34 = "\images/meme34.jpg";
    meme35 = "\images/meme35.jpg"; meme36 = "\images/meme36.jpg"; meme37 = "\images/meme37.jpg"; meme38 = "\images/meme38.jpg";
    meme39 = "\images/meme39.jpg"; meme40 = "\images/me40.jpg"; meme41 = "\images/meme41.jpg"; meme42 = "\images/meme42.jpg";
    meme43 = "\images/meme43.jpg"; meme44 = "\images/meme44.jpg"; meme45 = "\images/meme45.jpg"; meme46 = "\images/meme46.jpg";
    meme47 = "\images/meme47.jpg"; meme48 = "\images/meme48.jpg"; meme49 = "\images/meme49.jpg"; meme50 = "\images/meme50.jpg";
    meme51 = "\images/meme51.jpg"; meme52 = "\images/meme52.jpg"; meme53 = "\images/meme53.jpg"; meme54 = "\images/meme54.jpg";
    meme55 = "\images/meme55.jpg"; meme56 = "\images/meme56.jpg"; meme57 = "\images/meme57.jpg"; meme54 = "\images/meme58.jpg";
    meme59 = "\images/meme59.jpg"; meme60 = "\images/meme60.jpg"; meme61 = "\images/meme61.jpg"; meme62 = "\images/meme62.jpg";

    if (msg.includes(prefix + "meme")) {
        number = 60;
        mention = message.mentions.users.first();
        var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        switch (random) {
            case 1: message.channel.send({ files: [meme1] }); break;
            case 2: message.channel.send({ files: [meme2] }); break;
            case 3: message.channel.send({ files: [meme3] }); break;
            case 4: message.channel.send({ files: [meme4] }); break;
            case 5: message.channel.send({ files: [meme5] }); break;
            case 6: message.channel.send({ files: [meme6] }); break;
            case 7: message.channel.send({ files: [meme7] }); break;
            case 8: message.channel.send({ files: [meme8] }); break;
            case 9: message.channel.send({ files: [meme9] }); break;
            case 10: message.channel.send({ files: [meme10] }); break;
            case 11: message.channel.send({ files: [meme11] }); break;
            case 12: message.channel.send({ files: [meme12] }); break;
            case 13: message.channel.send({ files: [meme13] }); break;
            case 14: message.channel.send({ files: [meme14] }); break;
            case 15: message.channel.send({ files: [meme15] }); break;
            case 16: message.channel.send({ files: [meme16] }); break;
            case 17: message.channel.send({ files: [meme17] }); break;
            case 18: message.channel.send({ files: [meme18] }); break;
            case 19: message.channel.send({ files: [meme19] }); break;
            case 20: message.channel.send({ files: [meme20] }); break;
            case 21: message.channel.send({ files: [meme21] }); break;
            case 22: message.channel.send({ files: [meme22] }); break;
            case 23: message.channel.send({ files: [meme23] }); break;
            case 24: message.channel.send({ files: [meme24] }); break;
            case 25: message.channel.send({ files: [meme25] }); break;
            case 26: message.channel.send({ files: [meme26] }); break;
            case 27: message.channel.send({ files: [meme27] }); break;
            case 28: message.channel.send({ files: [meme28] }); break;
            case 29: message.channel.send({ files: [meme29] }); break;
            case 30: message.channel.send({ files: [meme30] }); break;
            case 31: message.channel.send({ files: [meme31] }); break;
            case 32: message.channel.send({ files: [meme32] }); break;
            case 33: message.channel.send({ files: [meme33] }); break;
            case 34: message.channel.send({ files: [meme34] }); break;
            case 35: message.channel.send({ files: [meme35] }); break;
            case 36: message.channel.send({ files: [meme36] }); break;
            case 37: message.channel.send({ files: [meme37] }); break;
            case 38: message.channel.send({ files: [meme38] }); break;
            case 39: message.channel.send({ files: [meme39] }); break;
            case 40: message.channel.send({ files: [meme40] }); break;
            case 41: message.channel.send({ files: [meme41] }); break;
            case 42: message.channel.send({ files: [meme42] }); break;
            case 43: message.channel.send({ files: [meme43] }); break;
            case 44: message.channel.send({ files: [meme44] }); break;
            case 45: message.channel.send({ files: [meme45] }); break;
            case 46: message.channel.send({ files: [meme46] }); break;
            case 47: message.channel.send({ files: [meme47] }); break;
            case 48: message.channel.send({ files: [meme48] }); break;
            case 49: message.channel.send({ files: [meme49] }); break;
            case 50: message.channel.send({ files: [meme50] }); break;
            case 51: message.channel.send({ files: [meme51] }); break;
            case 52: message.channel.send({ files: [meme52] }); break;
            case 53: message.channel.send({ files: [meme53] }); break;
            case 54: message.channel.send({ files: [meme54] }); break;
            case 55: message.channel.send({ files: [meme55] }); break;
            case 56: message.channel.send({ files: [meme56] }); break;
            case 57: message.channel.send({ files: [meme57] }); break;
            case 58: message.channel.send({ files: [meme58] }); break;
            case 59: message.channel.send({ files: [meme59] }); break;
            case 60: message.channel.send({ files: [meme60] }); break;
            case 61: message.channel.send({ files: [meme61] }); break;
            case 62: message.channel.send({ files: [meme62] }); break;


        }

    }



    
    sad1 = "\sad/sad1.gif"; sad2 = "\sad/sad2.gif"; sad3 = "\sad/sad3.gif"; sad4 = "\sad/sad4.gif";

    if (msg.includes(prefix + "sad")) {
        mention = message.mentions.users.first();
        number = 4;

        var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        switch (random) {
            case 1: message.channel.send(message.author.username + " esta sad", { files: [sad1] }); break;
            case 2: message.channel.send(message.author.username + " esta sad", { files: [sad2] }); break;
            case 3: message.channel.send(message.author.username + " esta sad", { files: [sad3] }); break;
            case 4: message.channel.send(message.author.username + " esta sad", { files: [sad4] }); break;




        }
    }
    dace1 = "\dance/dace1.gif"; dace2 = "\dance/dace2.gif"; dace3 = "\dance/dace3.gif"; dace4 = "\dance/dace4.gif"; dace5 = "\dance/dace5.gif"; dace6 = "\dance/dace6.gif"; dace7 = "\dance/dace7.gif";
    dace8 = "\dance/dace8.gif"; dace9 = "\dance/dace9.gif"; dace10 = "\dance/dace10.gif"; dace11 = "\dance/dace11.gif"; dace12 = "\dance/dace12.gif"; dace13 = "\dance/dace13.gif"; dace14 = "\dance/dace14.gif";
    dace15 = "\dance/dace15.gif";
    if (msg.includes(prefix + "dance")) {
        number = 15;
        mention = message.mentions.users.first();
        var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        switch (random) {
            case 1: message.channel.send(message.author.username + " esta Bailando", { files: [dace1] }); break;
            case 2: message.channel.send(message.author.username + " esta Bailando", { files: [dace2] }); break;
            case 3: message.channel.send(message.author.username + " esta Bailando", { files: [dace3] }); break;
            case 4: message.channel.send(message.author.username + " esta Bailando", { files: [dace4] }); break;
            case 5: message.channel.send(message.author.username + " esta Bailando", { files: [dace5] }); break;
            case 6: message.channel.send(message.author.username + " esta Bailando", { files: [dace6] }); break;
            case 7: message.channel.send(message.author.username + " esta Bailando", { files: [dace7] }); break;
            case 8: message.channel.send(message.author.username + " esta Bailando", { files: [dace8] }); break;
            case 9: message.channel.send(message.author.username + " esta Bailando", { files: [dace9] }); break;
            case 10: message.channel.send(message.author.username + " esta Bailando", { files: [dace10] }); break;
            case 11: message.channel.send(message.author.username + " esta Bailando", { files: [dace11] }); break;
            case 12: message.channel.send(message.author.username + " esta Bailando", { files: [dace12] }); break;
            case 13: message.channel.send(message.author.username + " esta Bailando", { files: [dace13] }); break;
            case 14: message.channel.send(message.author.username + " esta Bailando", { files: [dace14] }); break;
            case 15: message.channel.send(message.author.username + " esta Bailando", { files: [dace15] }); break;



        }
    }

    cry1 = "\cry/tenor.gif"; cry2 = "\cry/cry2.gif"; cry3 = "\cry/cry3.gif"; cry4 = "\cry/cry4.gif"; cry5 = "\cry/cry5.gif"; cry6 = "\cry/cry6.gif";

    if (msg.includes(prefix + "cry")) {
        number = 6;
        mention = message.mentions.users.first();

        var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        switch (random) {
            case 1: message.channel.send(message.author.username + " esta llorando", { files: [cry1] }); break;
            case 2: message.channel.send(message.author.username + " esta llorando", { files: [cry2] }); break;
            case 3: message.channel.send(message.author.username + " esta llorando", { files: [cry3] }); break;
            case 4: message.channel.send(message.author.username + " esta llorando", { files: [cry4] }); break;
            case 5: message.channel.send(message.author.username + " esta llorando", { files: [cry5] }); break;
            case 6: message.channel.send(message.author.username + " esta llorando", { files: [cry6] }); break;




        }
    }

    hug1 = "\abrazo/hug1.gif"; hug2 = "\abrazo/hug2.gif"; hug3 = "\abrazo/hug3.gif"; hug4 = "\abrazo/hug4.gif"; hug5 = "\abrazo/hug5.gif"; hug6 = "\abrazo/hug6.gif";
    hug7 = "\abrazo/hug7.gif";

    if (msg.includes(prefix + "abrazo")) {
        number = 7;
        mention = message.mentions.users.first();
        var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;


        switch (random) {
            case 1: message.channel.send(message.author.username + " esta a abrazando a " + mention, { files: [hug1] }); break;
            case 2: message.channel.send(message.author.username + " esta a abrazando a " + mention, { files: [hug2] }); break;
            case 3: message.channel.send(message.author.username + " esta a abrazando a " + mention, { files: [hug3] }); break;
            case 4: message.channel.send(message.author.username + " esta a abrazando a " + mention, { files: [hug4] }); break;
            case 5: message.channel.send(message.author.username + " esta a abrazando a " + mention, { files: [hug5] }); break;
            case 6: message.channel.send(message.author.username + " esta a abrazando a " + mention, { files: [hug6] }); break;
            case 7: message.channel.send(message.author.username + " esta a abrazando a " + mention, { files: [hug7] }); break;




        }
    }


    if (msg.startsWith(prefix + "8dark")) {
        ballMessage = message.content.slice(6);

        number = 7;
        var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        switch (random) {
            case 1: message.channel.send('Yuima dice que dejes de preguntar tonterias como:"' + ballMessage + '"y mejor juegues paladins'); break;
            case 2: message.channel.send('Yuima dice que la respuesta a tu pregunta es:' + ballMessage + '"es talvez '); break;
            case 3: message.channel.send('Yuima dice que la respuesta a tu pregunta es :' + ballMessage + '"es no'); break;
            case 4: message.channel.send('Yuima dice que la respuesta a tu pregunta es:' + ballMessage + '"es lo dudo '); break;
            case 5: message.channel.send('Yuima dice que la respuesta a tu pregunta es:' + ballMessage + '"no importa lo importante es que no saldras de carton5 '); break;
            case 6: message.channel.send('Yuima dice que dejes de preguntar tonterias como:"' + ballMessage + '"y mejor juegues Creative destrucion'); break;
            case 7: message.channel.send('Yuima dice que la respuesta a tu pregunta es :"' + ballMessage + '"si'); break;




        }


    }

    if (answered == false) {
        userAnswer = msg;
        if (userAnswer == cAnswer) {
            message.reply("lo hiciste bien no estas lejos de ser el husbando o waifu ideales del reino");
        }
        else {
            message.reply("No solo estas equivocado si no que tambien eres un zhinmanos");
        }
        answered = true; cAnswer = ""; userAnswer = "";

    }

    if (msg.startsWith(prefix + "quiz")) {

        number = 10;
        var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        switch (random) {

            case 1: message.channel.send("Que campeon se cree que nacio de un incesto: \nA: Lian) \nB Maeve) \nC Ash) "); cAnswer = "a"; break;
            case 2: message.channel.send("Que campeon es hermana de seris?"); cAnswer = "furia"; break;
            case 3: message.channel.send("Quien es el novio de ying?"); cAnswer = "sha lin"; break;
            case 4: message.channel.send("Cual es la mejor loli de Paladins?"); cAnswer = "maeve"; cAnswer = "miv"; break;
            case 5: message.channel.send("Cual es la peor ob de todas?"); cAnswer = "ob64"; cAnswer = "64"; break;
            case 6: message.channel.send("A quien le pertenece el titulo de  maquina de guerra?"); cAnswer = "ash"; break;
            case 7: message.channel.send("Que campeon es conocido por su poca necesidad de apuntar?"); cAnswer = "lian"; break;
            case 8: message.channel.send("Que campeon pude viajer en el tiempo \nA Atlas) \nB lex)"); cAnswer = "a"; break;
            case 9: message.channel.send("Que campeon te roba las manos :v"); cAnswer = "zhin"; break;
            case 10: message.channel.send("Cual tanke si se cae no se levanta"); cAnswer = "makoa"; break;

        }
        answered = false;
}
if (msg.startsWith(prefix + "pat")) {
    number = 21;
    mention = message.mentions.users.first();
    imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
    message.channel.send(message.author.username + " esta haciendole piojito a   " + mention, { files: ["./pat/" + imageNumber + ".gif"] })
}
if (msg.startsWith(prefix + "sorry")) {
    number = 7;
    mention = message.mentions.users.first();
    imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
    message.channel.send(message.author.username + " esta arrepentido lo perdonas? " + mention, { files: ["./sorry/" + imageNumber + ".gif"] })
}
if (msg.startsWith(prefix + "nani")) {
    number = 21;
    mention = message.mentions.users.first();
    imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
    message.channel.send(message.author.username + " nani " + mention, { files: ["./nani/" + imageNumber + ".gif"] })
    }
    if (msg.startsWith(prefix + "grax")) {
        number = 7;
        mention = message.mentions.users.first();
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send(message.author.username + " esta agradecido con " + mention, { files: ["./gracias/" + imageNumber + ".gif"] })
    }

    if (msg.startsWith(prefix + "momazo")) {
        number = 39;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({ files: ["\momo/" + imageNumber + ".jpg"] })
    }

    if (msg.startsWith(prefix + "kick")) {
        number = 10;
        mention = message.mentions.users.first();
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send(message.author.username + " Lanzo una patada a " + mention, { files: ["\patadas/" + imageNumber + ".gif"] })
    }
    if (msg.startsWith(prefix + "run")) {
        number = 10;
        mention = message.mentions.users.first();
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send(message.author.username + " Esta huyendo de " + mention, { files: ["\correr/" + imageNumber + ".gif"] })
    }

    if (msg.startsWith(prefix + "kill")) {
        number = 10;
        mention = message.mentions.users.first();
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send(message.author.username + " Esta asesinando a  " + mention, { files: ["\kill/" + imageNumber + ".gif"] })
    }
    
    if (msg.startsWith(prefix + "buentrabajo")) {
        number = 11;
        mention = message.mentions.users.first();
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send(message.author.username + " dice hiciste un buen trabajo  " + mention, { files: ["\good/" + imageNumber + ".gif"] })
    }
    if (msg.startsWith(prefix + "rps")) {
        number = 3;
        mention = message.mentions.users.first();
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send(message.author.username + " esta reviviendo a " + mention, { files: ["./revivir/" + imageNumber + ".gif"] })
    }
    if (msg.startsWith(prefix + "slap")) {
        number = 11;
        mention = message.mentions.users.first();
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send(message.author.username + " esta abofeteando a  " + mention, { files: ["\slap/" + imageNumber + ".gif"] })
    }
    if (msg.startsWith(prefix + "fbi")) {
        number = 10;
        mention = message.mentions.users.first();
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send(message.author.username + " a llamado al fbi corre:  " + mention, { files: ["./fbi/" + imageNumber + ".gif"] })

    }
   });


const { Client, Util } = require('discord.js');


/*client.on('message', async msg => { // eslint-disable-line
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(PREFIX)) return undefined;

    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);

    let command = msg.content.toLowerCase().split(' ')[0];
    command = command.slice(PREFIX.length)

    if (command === 'play') {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
        }

        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the search results ranging from 1-10.
					`);
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('No or invalid value entered, cancelling video selection.');
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send('🆘 I could not obtain any search results.');
                }
            }
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (command === 'skip') {
        if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
        if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
        serverQueue.connection.dispatcher.end('Skip command has been used!');
        return undefined;
    } else if (command === 'stop') {
        if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
        if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Stop command has been used!');
        return undefined;
    } else if (command === 'volume') {
        if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
        if (!serverQueue) return msg.channel.send('There is nothing playing.');
        if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return msg.channel.send(`I set the volume to: **${args[1]}**`);
    } else if (command === 'np') {
        if (!serverQueue) return msg.channel.send('There is nothing playing.');
        return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
    } else if (command === 'queue') {
        if (!serverQueue) return msg.channel.send('There is nothing playing.');
        return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
    } else if (command === 'pause') {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.send('⏸ Paused the music for you!');
        }
        return msg.channel.send('There is nothing playing.');
    } else if (command === 'resume') {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send('▶ Resumed the music for you!');
        }
        return msg.channel.send('There is nothing playing.');
    }

    return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`I could not join the voice channel: ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
    }
    return undefined;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}
*/
client.on("message", async msg => {
    if (!msg.content.startsWith(prefix)) return undefined;
    if (msg.author.bot) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');

    console.log(searchString);

    const serverQueue = queue.get(msg.guild.id);


    if (msg.content.startsWith(prefix + 'play')) {
        const url = args[1] ? args[1].replace(/<.+>/, '$1') : '';
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send("mortal metete a un canal de voz.");
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.send('no me puedo conectar al canal de voz :]');
        }

        if (!permissions.has('SPEAK')) {
            return msg.channel.send('no me puedo conectar');
        }

        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();

            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel);
            }
            return msg.Channel.send('playlist:' + playlist.title + "la he agregado para tu diversion");
        }
        else {
            try {
                var video = await youtube.getVideo(url);

            } catch (error) {

                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0
                    msg.channel.send('  **cancion a  elegir **' + (videos.map(video2 => '****' + (++index) + video2.title).join('\n')) + '\nporfavor dame un numero de cancion 1-10');

                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });

                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('No me diste un valor valido pero te hare un favor pero no creas que lo ago por ti solo vuelve a ingresar, cancelado selecion');

                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                }
                catch (err) {
                    console.error(error);
                    return msg.channel.send("no pude obtener los resultados de busqueda");
                }
                return handleVideo(video, msg, voiceChannel, true);
            }




        }


    }
    else if (msg.content.startsWith(prefix + 'skip')) {
        if (!msg.member.voiceChannel) return msg.channel.send("no estas en un canal de voz");
        if (!serverQueue) return msg.channel.send("no hay nada tocando que pueda saltar");
        serverQueue.connection.dispatcher.end('saltar la cancion ha sido usado');
        return undefined;


    }
    else if (msg.content.startsWith(prefix + 'stop')) {
        if (!msg.member.voiceChannel) return msg.channel.send("no estas en un canal de voz");
        if (!serverQueue) return msg.channel.send("no hay nada tocando que pueda parar");
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('has sido usado el stop');
        return undefined;
    }
    else if (msg.content.startsWith(prefix + 'volumen')) {
        if (!serverQueue) return msg.channel.send("no hay nada tocando ");
        if (!args[1]) return msg.channel.send('el volomen de ahorita es :' + serverQueue.volume);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return msg.channel.send("cambie el volumen agradecemelo se encuentra en  :" + args[1]);
    }

    else if (msg.content.startsWith(prefix + 'np')) {
        if (!serverQueue) return msg.channel.send("no hay nada tocando ");
        return msg.channel.send("tocando ahora:" + serverQueue.songs[0].title);

    }
    else if (msg.content.startsWith(prefix + 'queue')) {
        if (!serverQueue) return msg.channel.send("no hay nada tocando ");
        return msg.channel.send('  **song queue **' + (serverQueue.songs.map(song => '**_**' + song.title).join('\n') + 'now playing' + serverQueue.songs[0].title));
    }

    else if (msg.content.startsWith(prefix + 'pausa')) {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.send("pause la musica no es que lo haga por ti hee");
        }
        return msg.channel.send("no hay nada tocando");
    }
    else if (msg.content.startsWith(prefix + 'resumir')) {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send("le di un replay no tienes que agradecerlo");

        }
        return msg.channel.send("no hay nada tocando");
    }
    return undefined;
});


async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id)
    console.log(video);
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),

        url: 'https://www.youtube.com/watch?v=' + video.id
    };


    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        }
        catch (error) {

            console.error('no me puedo unir al canal de voz${error}');
            queue.delete(msg.guild.id);
            return msg.channel.send('no me puedo unir al canal de voz: ${error}');
        }



    }
    else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        return msg.channel.send(song.title + ' he obligado a la cancion a ponerse en la fila')

    }

    return undefined;
}


function play(guild, song) {
    const serverQueue = queue.get(guild.id)

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;

    }

    console.log(serverQueue.songs);

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));

    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send('tocando ahora :' + song.title);
}

client.login(client.config.token);
client.login(TOKEN);