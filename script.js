//Código provisório para o menu (que não deu certo)
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav_links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

//TagDiscord

const btnDiscord = document.getElementById('btn-discord-copy');
const discordTag = 'yuraodopastel'; 

btnDiscord.addEventListener('click', () => {
  navigator.clipboard.writeText(discordTag).then(() => {
    alert('Discord copiado para a área de transferência!');
  }).catch(() => {
    alert('Erro ao copiar o Discord. Tente novamente.');
  });
});


