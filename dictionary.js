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
    ['weinen', 'понимать'],
    ['sehen', 'видеть'],
    ['lachen', 'гулять'],
    ['fragen', 'спрашивать'],
    ['denken', 'думать'],
    ['essen', 'кушать'],
    ['tansen', 'танцевать'],
    ['slagen', 'петь'],
    ['arbeiten', 'работать'],
    ['machen', 'делать'],
    ['löschen', 'удалить'],
    ['sitzen', 'сидеть'],
    ['hören', 'слышать'],
    ['brauchen', 'нуждаться'],
    ['rauchen', 'курить'],
    ['kochen', 'готовить'],
    ['waschen', 'стирать'],
    ['braten', 'жарить'],
    ['backen', 'запекать'],
    ['entschuldigen', 'извиняться'],
    ['danken', 'благодарить'],
    ['schneiden', 'резать'],
    ['öffnen', 'открыть'],
    ['schleißen', 'закрыть'],
    ['geöffnet', 'быть закрытым'],
    ['geschlassen', 'быть открытым'],
    ['buchstabieren', 'называть по буквам'],
    ['geboren', 'быть родом'],
]

var index;

function chouseNewWord(){
    var length = du_rusDictionary.dict.length;
    index = Math.floor(Math.random() * length);
    // console.log(index);
    let askedWord = document.getElementById('foreign-word');
    // console.log(du_rusDictionary.dict[index][0]);
    askedWord.innerText = du_rusDictionary.dict[index][1];
    let inputElement = document.getElementById('input-field');
    inputElement.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        //   event.preventDefault();
          document.getElementById("submit-btn").click();
        }
    });
}

chouseNewWord();

function submitAnswer(){
    let inputElement = document.getElementById('input-field');
    let inputAnswer = inputElement.value;
    checkAnswer(inputAnswer, index);
    // return inputAnswer;
}

function checkAnswer(answer, inndex){
    if(answer === du_rusDictionary.dict[inndex][0]){
        let inputElement = document.getElementById('input-field');
        inputElement.value = '';
        inputElement.placeholder = 'write answer';
        chouseNewWord();
        
    }
    else{
        let inputElement = document.getElementById('input-field');
        inputElement.style.backgroundColor = 'pink';
        inputElement.placeholder = 'try again';
        inputElement.value = '';
        // inputElement.classList.add('placeholder-color-change');
        inputElement.style.animation = 'horizontal-shaking 0.3s 1';
        setInterval(function(){
            inputElement.style.animation = 'recover 2s 1';
            // inputElement.style.animation = 'passive';
            inputElement.style.backgroundColor = '#97DECE';
            // inputElement.classList.remove('placeholder-color-change');
        }, 500);
    }
}

// submitButton.addEventListener('click', function() {
//   console.log('Значение input:', inputAnswer);
// });

function help(){
    let inputElement = document.getElementById('input-field');
    inputElement.value = du_rusDictionary.dict[index][0];
}
