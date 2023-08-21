class Dictionary {
    constructor(foreignLang, translationLang, dict){
        this.foreignWord = foreignLang;
        this.translation = translationLang;
        this.dict = dict;
    }
}



var du_rusDictionary = new Dictionary('German', 'Russian');
du_rusDictionary.dict = [
    ['die Großeltern', 'дедушка с бабушкой (старшие родители)'],
    ['der Großvater', 'дедушка'],
    ['die Großmutter', 'бабушка'],
    ['die Eltern', 'родители'],
    ['der Vater', 'отец'],
    ['die Mutter', 'мама'],
    ['der Bruder', 'брат'],
    ['die Schwester', 'сестра'],
    ['die Geschwester', 'братья и сестры'],
    ['der Onkel', 'дядя'],
    ['die Tante', 'тетя'],
    ['der Sohn', 'сын'],
    ['die Tochter', 'дочь'],
    ['die Enkelin', 'внучка'],
    ['die Nichte', 'племянница'],
    ['das Kind', 'ребенок'],
    ['das Mädchen', 'девочка'],
    ['die Cousine', 'двоюродная сестра'],
    ['der Enkel', 'внук'],
    ['der Neffer', 'племянник'],
    ['der Jung', 'парень, юноша'],
    ['das Baby', 'младенец'],
    ['der Cousin', 'двоюродный брат'],

    //  ['was', 'что'],
    // ['wo', 'где'],
    // ['wohin', 'куда'],
    // ['wann', 'когда'],
    // ['woher', 'откуда'],
    // ['wie', 'как'],
    // ['wer', 'кто'],
    // ['wen', 'кого'],
    // ['wem', 'кому'],
    // ['weshalb', 'для чего'],
    // ['womit', 'с чем, с чьей стороны'],
    // ['warum', 'почему (1)'],
    // ['wieso', 'почему (2)'],
    // ['wie viel', 'сколько'],
    // ['was für', 'какого типа'],
    // ['welche', 'какой который'],

    // ['kommen', 'приходить', 0],
    // ['gehen', 'идти', 0],
    // ['fahren', 'ехать', 0],
    // ['lesen', 'читать', 0],
    // ['trinken', 'пить', 0],
    // ['schlafen', 'спать' ,0],
    // ['schreiben', 'писать', 0],
    // ['sprechen', 'говорить', 0],
    // ['lernen', 'учиться', 0],
    // ['weinen', 'плакать', 0],
    // ['sehen', 'видеть', 0],
    // ['lachen', 'смеяться', 0],
    // ['fragen', 'спрашивать', 0],
    // ['denken', 'думать', 0],
    // ['essen', 'кушать', 0],
    // ['tansen', 'танцевать', 0],
    // ['slagen', 'петь', 0],
    // ['arbeiten', 'работать', 0],
    // ['machen', 'делать', 0],
    // ['löschen', 'стирать (ластиком)', 0],
    // ['sitzen', 'сидеть', 0],
    // ['hören', 'слышать', 0],
    // ['brauchen', 'нуждаться', 0],
    // ['rauchen', 'курить', 0],
    // ['kochen', 'готовить', 0],
    // ['waschen', 'мыть', 0],
    // ['braten', 'жарить', 0],
    // ['backen', 'запекать', 0],
    // ['entschuldigen', 'извиняться', 0],
    // ['danken', 'благодарить', 0],
    // ['schneiden', 'резать', 0],
    // ['öffnen', 'открыть', 0],
    // ['schleißen', 'закрыть', 0],
    // ['geöffnet', 'быть открытым', 0],
    // ['geschlassen', 'быть закрытым', 0],
    // ['buchstabieren', 'называть по буквам', 0],
    // ['geboren', 'быть родом', 0],
    // ['sagen', 'сказать', 0],
    // ['können', 'мочь, смочь'],
]

var index;
var maxScore = 0;

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
