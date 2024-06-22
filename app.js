let randomMessages = [
    'HI BABY!!',
    'Hey munchkin!',
    'HI BABYYYY!!!!',
    'Hi my angel',
    'Hello my sweet girl :)',
    'Hi cupcake!',
    'Hi you cute, funny, hot, pretty, sexy, stunning, perfect, beautiful little queen <3',
    'Hey princess!',
    "Your're priceless darling <3",
    'I cant describe how much I love you,',
    "HEY!! YOU!! YES YOU!! THAT CUTIE OVER THER!!.....I have to tell you something: I'll look after you :)",
    'You make the sun shine in all the darkest places 💛',
    'I am so incredibly proud of you baby',
    'You and me are forever darling',
];

let eeps = [
    document.getElementById('e1'),
    document.getElementById('e2'),
    document.getElementById('e3'),
    document.getElementById('e4'),
];
// styling the eepy marks

let eepyness;
eepyness = localStorage.getItem('amount');
if(eepyness == null)
{
    eepyness = 30;
}
document.getElementById('fill').style.height = eepyness + '%';

document.getElementById('custom').value = eepyness;

// main update loop for the bar
function update()
{
    document.getElementById('curr').innerHTML = 'Current eepyness: ' + eepyness;
    eepyness = document.getElementById('custom').value;
    requestAnimationFrame(update);
}
update();

function save()
{
    localStorage.setItem('amount', eepyness);
}

function CreateMessage()
{
    let selectedMessage = randomMessages[Math.round(Math.random() * randomMessages.length) + 1];
    if(selectedMessage != undefined)
    {
        document.getElementById('mss').innerHTML = selectedMessage;
    } else 
    {
        document.getElementById('mss').innerHTML = "I can't believe I have such a perfect little girl in my life!";
    }   
}
CreateMessage();

// onclicks
document.getElementById('bar').onclick = () => {
    document.getElementById('window').style.display = 'block';
    CreateMessage();
}
document.getElementById('close').onclick = () => {
    document.getElementById('window').style.display = 'none';
    document.getElementById('fill').style.height = eepyness + '%';
    save();
}