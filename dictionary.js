class Dictionary {
    constructor(foreignLang, translationLang, dict){
        this.foreignWord = foreignLang;
        this.translation = translationLang;
        this.dict = dict;
    }
}

var du_rusDictionary = new Dictionary('German', 'Russian');
du_rusDictionary.dict = [
    ['kommen', 'приходить'],
    ['gehen', 'идти'],
    ['fahren', 'ехать'],
    ['lesen', 'читать'],
    ['trinken', 'пить'],
    ['schlafen', 'спать'],
    ['schreiben', 'писать'],
    ['sprechen', 'говорить'],
    ['lernen', 'учиться'],
    ['weinen', 'плакать'],
    ['sehen', 'видеть'],
    ['lachen', 'гулять'],
    ['fragen', 'спрашивать'],
    ['denken', 'думать'],
    ['essen', 'кушать'],
    ['tansen', 'танцевать'],
    ['slagen', 'петь'],
    ['arbeiten', 'работать'],
    ['machen', 'делать'],
    ['löschen', 'стирать (ластиком)'],
    ['sitzen', 'сидеть'],
    ['hören', 'слышать'],
    ['brauchen', 'нуждаться'],
    ['rauchen', 'курить'],
    ['kochen', 'готовить'],
    ['waschen', 'мыть'],
    ['braten', 'жарить'],
    ['backen', 'запекать'],
    ['entschuldigen', 'извиняться'],
    ['danken', 'благодарить'],
    ['schneiden', 'резать'],
    ['öffnen', 'открыть'],
    ['schleißen', 'закрыть'],
    ['geöffnet', 'быть открытым'],
    ['geschlassen', 'быть закрытым'],
    ['buchstabieren', 'называть по буквам'],
    ['geboren', 'быть родом'],
]

var index;

function checkEnter(event){
    if (event.key === "Enter") {
        submitAnswer();
    }
    else {
        let inputElement = document.getElementById('input-field');
        inputElement.addEventListener("keypress", checkEnter, {once: true});
    }
}

function chouseNewWord(){
    var length = du_rusDictionary.dict.length;
    index = Math.floor(Math.random() * length);
    let askedWord = document.getElementById('foreign-word');
    askedWord.innerText = du_rusDictionary.dict[index][1];
    let inputElement = document.getElementById('input-field');
    inputElement.addEventListener("keypress", checkEnter, {once: true});
    // inputElement.addEventListener("keyup", function(){
    //     inputElement.addEventListener("keypress", checkEnter);
    // })
}

chouseNewWord();


function submitAnswer(){
    let inputElement = document.getElementById('input-field');
    // inputElement.removeEventListener("keypress", checkEnter);

    console.log(inputElement.value);
    let inputAnswer = inputElement.value;
    // inputElement.addEventListener("keyup", checkAnswer, );
    checkAnswer(inputAnswer, index);
    // return inputAnswer;
}

function checkAnswer(answer, inndex){
    if(answer === du_rusDictionary.dict[inndex][0]){
        let sound = new Audio('win_sound.m4a');
        sound.play();
        let inputElement = document.getElementById('input-field');
        inputElement.value = '';
        inputElement.placeholder = 'write answer';
        chouseNewWord();
        
    }
    else{
        let sound = new Audio('lose_sound.m4a');
        sound.play();
        let inputElement = document.getElementById('input-field');
        inputElement.style.backgroundColor = 'pink';
        inputElement.placeholder = 'try again';
        inputElement.value = '';
        // inputElement.classList.add('placeholder-color-change');
        inputElement.style.animation = 'horizontal-shaking 0.3s 1';
        setInterval(function(){
            inputElement.style.animation = 'recover 1s 1';
            inputElement.style.backgroundColor = '#97DECE';
            // inputElement.classList.remove('placeholder-color-change');
        }, 100);
        inputElement.addEventListener("keypress", checkEnter, {once: true});
        // inputElement.style.animation = 'passive';
    }
}

// submitButton.addEventListener('click', function() {
//   console.log('Значение input:', inputAnswer);
// });

function help(){
    let inputElement = document.getElementById('input-field');
    inputElement.value = du_rusDictionary.dict[index][0];
}
