//corner buttons
const mode_button = document.getElementById('mode-selector'); //dark/light
const lang_button = document.getElementById('lang-selector'); //language selector

//mode CLASSES to change
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const headerbg = document.getElementsByClassName('header')[0]; //header background image
const headerimg = document.getElementsByClassName('header-image')[0]; //my face picture
const menu = document.getElementsByClassName('menu')[0]; //full menu
const menuIcon = document.getElementsByTagName('label')[0]; //hamburger traces
const menuText = document.getElementsByTagName('nav')[0]; //menu items
const h3 = document.getElementsByTagName('h3')[0]; //job positions
const h1 = document.getElementsByTagName('h1')[0]; //tarso galvao
const form_btn = document.getElementsByClassName('form-btn')[0]; //send buttons
const form_input = document.getElementsByClassName('form-input')[0]; //form name
const form_input2 = document.getElementsByClassName('form-input')[1]; //form email
const form_message = document.getElementsByClassName('form-message')[0]; //form body

//mode CLASS array
const classArray = [mode_button, lang_button, //buttons
                    body, footer, headerbg, headerimg, menu, menuIcon, menuText, h3, h1, //body 
                    form_btn, form_input,form_input2, form_message]; //email form
//text areas IDs
let language = 'en-us';
let mode = 'light';
const cv = document.getElementById('cv'); //menu curriculum
const ct = document.getElementById('ct'); //menu contact
const ht = document.getElementById('ht'); //header text
const card_0 = document.getElementById('card-0'); //languages
const card_1 = document.getElementById('card-1'); //github
const card_2 = document.getElementById('card-2'); //linkedin
// const card_3 = document.getElementById('card-3'); //urcade
const card_4 = document.getElementById('card-4'); //playground
const card_5 = document.getElementById('card-5'); //portfolio
const form_title = document.getElementById('form-title'); //form title (text lang)

//rocket
var rocket = document.getElementById('rocket');
var click_count = 0;

//animation to change texts on header
var text_active;  //set on changeBodyText()
var job = 0;

//----------------------------------------------------------------------------PAGE TEXT:
//toggle body text language (including active mode button)
function changeBodyText(language){
    switch(language){
        case 'en-us':
            //active button
            if(mode == 'dark'){mode_button.innerHTML = "Light Years";}
            if(mode == 'light'){mode_button.innerHTML = "Dark Mode";}
            lang_button.innerHTML = "pt-BR";
            //menu
            cv.innerHTML = 'Curriculum';
            cv.href = "pdf/Tarso Galvao CV 2022 EN-US.pdf"
            ct.innerHTML = 'Contact';
            //head
            text_active = ["Full-Stack Developer", "Game Developer", "Linux Administrator", "Digital Artist"];
            ht.innerHTML = text_active[job];
            //cards
            card_0.innerHTML = "I have taught myself to program for many years now and use these languages for personal projects and to teach myself how they work, because they are fun and interesting to me. The graph is a relation to the number of public repositories I have on Github.";
            card_1.innerHTML = "On Github you will find most of my projects and studies. Not only can you find and download software here, but you are also able to contribute to the code if you know how! From Web Design to Game Engines, here is where I'll keep them, feel free to snoop around!";
            card_2.innerHTML = "On LinkedIn, you will find my certifications for courses and bootcamps I completed. I completed these courses and bootcamps because I wanted to improve my career prospects. I believe that my certifications ensure that I have the skills and knowledge needed to pursue a successful career.";
            // card_3.innerHTML = "URCade is an operating system that turns your Raspberry Pi into a retro gaming system. The system was initially created as an exercise on dealing with Raspberry Pi and its Raspbian OS. As it grew, tools were written to help with its development. A project was born and URCade became a framework for building ready-to-use Pi images.";
            card_4.innerHTML = "The Playground contains mini-games I developed for my toddler to play. They are simple games and clones I developed just to exercise and learn. The games will all be played in your browser, using JavaScript, HTML5 and CSS3 - no extra applications necessary! In this page, you'll find all the latest updates to the playground (new levels, new features) as well as information about the project."
            card_5.innerHTML = "Here you can find a collection of my projects organized in a friendly Wordpress presentation format. If you want to see more of my work's source code, you can check out my Github page.";
            form_input.placeholder = "   name"
            form_input2.placeholder = "   e-mail"
            form_message.placeholder = " type your message"
            form_btn.innerHTML = "Send"
            break;
        
        case 'pt-br':
            //active button
            if(mode == 'dark'){mode_button.innerHTML = "Plasma";}
            if(mode == 'light'){mode_button.innerHTML = "Sombra";}
            lang_button.innerHTML = "en-US";
            //menu
            cv.innerHTML = 'Curriculo';
            cv.href = "pdf/Tarso Galvao CV 2022 PT-BR.pdf"
            ct.innerHTML = 'Contato';
            //head
            text_active = ["Desenvolvedor Full-Stack", "Desenvolvedor de Jogos", "Administrador Linux", "Artista Digital"];
            ht.innerHTML = text_active[job];
            //cards
            card_0.innerHTML = "Eu me ensinei a programar por muitos anos e uso essas linguagens para projetos pessoais, para me ensinar como elas funcionam e porque são divertidas e interessantes para mim. O gráfico é a relação de repositórios públicos que eu tenho no Github.";
            card_1.innerHTML = "No Github você encontra a maioria dos meus projetos e estudos. Você não apenas pode encontrar e baixar software aqui, mas também pode contribuir com o código se souber como! De Web Design a Game Engines, aqui é onde vou mantê-los, fique à vontade para bisbilhotar!";
            card_2.innerHTML = "No LinkedIn, você encontra minhas certificações para cursos e bootcamps que realizei. Eu completei esses cursos e bootcamps porque queria melhorar minhas perspectivas de carreira. Acredito que minhas certificações garantem que eu tenha as habilidades e conhecimentos necessários para seguir uma carreira de sucesso.";
            // card_3.innerHTML = "URCade é uma plataforma que transforma seu Raspberry Pi em um multi video-game retrô. O sistema foi inicialmente criado como um exercício para lidar com o Raspberry Pi e seu sistema operacional. Com o tempo o exercício cresceu e várias ferramentas foram desenvolvidas durante o processo, até que nasceu o Projeto URCade como um framework para sistemas embarcados.";
            card_4.innerHTML = "O Playground contém minijogos que desenvolvi para o meu filho brincar. São jogos simples e clones que desenvolvi apenas para exercitar e aprender. Os jogos serão todos jogados em seu navegador, usando JavaScript, HTML5 e CSS3 - sem necessidade de aplicativos extras! Nesta página, você encontrará todas as atualizações mais recentes do playground (novos níveis, novos recursos), bem como informações sobre o projeto.";
            card_5.innerHTML = "Aqui você encontra a coleção dos meus projetos organizados em um formato Wordpress amigável. Se você quiser ver mais do meu código fonte, você pode verificar na minha página do Github.";
            form_input.placeholder = "   nome"
            form_input2.placeholder = "   e-mail"
            form_message.placeholder = " deixe sua mensagem"
            form_btn.innerHTML = "Enviar"
            break;
    }
}

//-----------------------------------------------------------------------EVENT LISTENERS:
//toggle hidden game link on rocket
rocket.addEventListener('mouseup', function(){
    click_count++;
    if(click_count == 7){
        //insert link to outter html (creates a new element/object)
        rocket.outerHTML = '<a id="rocket" href="https://tarsogalvao.ddns.net/games/bullethell"><img src="./img/rocket2.webp" id="Rocket"></a>';
        setTimeout(function(){
            //get new reference of element (to the changed one above)
            var rocket = document.getElementById('rocket');
            rocket.outerHTML = '<a id="rocket"><img src="./img/rocket.webp" id="Rocket"></a>';
            click_count = 0;
        }, 4000);  //4 seconds = 1 full spin
    }
})

//toggle dark/light mode button
mode_button.addEventListener('click', function(){
    for (i = 0; i < classArray.length; i++) {
        classArray[i].classList.toggle('dark-mode');
    }
    if(body.classList.contains('dark-mode')) {
        mode = 'dark';
    } else mode = 'light';
    changeBodyText(language); 
});

//toggle language button
lang_button.addEventListener('click', function(){
    if (language == 'en-us') language = 'pt-br';
    else language = 'en-us';
    changeBodyText(language);
});


//-------------------------------------------------------------------------PAGE START:
//set language to page on load
if(window.navigator.language == 'pt-BR' || 
    window.navigator.language == 'pt-br' || 
        window.navigator.language == 'pt'){ changeBodyText('pt-br'); } 
else changeBodyText('en-us');

//start header text animation
setInterval(function () {
    ht.innerHTML = text_active[job];
    job++;
    if (job >= text_active.length) {
      job = 0;
    }
}, 1500); //1.5 seconds