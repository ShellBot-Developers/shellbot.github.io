const nounou = ['location', 'href', 'querySelector', 'https://discord.com/oauth2/authorize?client_id=773790799715762188&scope=bot&permissions=8', '© ShellBot Developers 2020', 'createTextNode', 'button.s-m-btn', 'createElement', 'footer', 'onclick', 'button.hero-btn', 'appendChild'];
(function (Nounou, nOunou) {
    const NOunou = function (nOUnou) {
        while (--nOUnou) {
            Nounou['push'](Nounou['shift']());
        }
    };
    NOunou(++nOunou);
}(nounou, 0xfd));
const Nounou = function (nOunou, NOunou) {
    nOunou = nOunou - 0x0;
    let noUnou = nounou[nOunou];
    return noUnou;
};
document[Nounou('0x1')](Nounou('0x9'))[Nounou('0x8')] = nOunou => window[Nounou('0xb')][Nounou('0x0')] = Nounou('0x2');
document[Nounou('0x1')](Nounou('0x5'))[Nounou('0x8')] = NOunou => window[Nounou('0xb')][Nounou('0x0')] = 'https://discord.com/oauth2/authorize?client_id=773790799715762188&scope=bot&permissions=8';
let footer = document[Nounou('0x6')](Nounou('0x7'));
let text = document[Nounou('0x4')](Nounou('0x3'));
footer[Nounou('0xa')](text);
document['body'][Nounou('0xa')](footer);

fetch('https://shellbotpy.raidtheweb.repl.co/servers')
    .then(response => response.text())
    .then(data => {
      document.getElementById('guilds-info').innerText = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

fetch('https://shellbotpy.raidtheweb.repl.co/users')
    .then(response => response.text())
    .then(data => {
      document.getElementById('users-info').innerText = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

fetch('https://shellbotpy.raidtheweb.repl.co/popularcmd')
    .then(response => response.text())
    .then(data => {
      data = JSON.parse(data);
      data = Object.entries(data);
      document.getElementById('command-info').innerText = `Name: ${data[0][0]}, Times called: ${data[0][1]}`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

setInterval(() => {

    fetch('https://shellbotpy.raidtheweb.repl.co/servers')
    .then(response => response.text())
    .then(data => {
      document.getElementById('guilds-info').innerText = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    fetch('https://shellbotpy.raidtheweb.repl.co/users')
    .then(response => response.text())
    .then(data => {
      document.getElementById('users-info').innerText = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
    fetch('https://shellbotpy.raidtheweb.repl.co/popularcmd')
    .then(response => response.text())
    .then(data => {
      data = JSON.parse(data);
      data = Object.entries(data);
      document.getElementById('command-info').innerText = `Name: ${data[0][0]}, Times called: ${data[0][1]}`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}, 10000);
