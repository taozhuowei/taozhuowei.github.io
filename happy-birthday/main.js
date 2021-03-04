function QA() {
    this.question = document.getElementById("question");
    this.answer = document.getElementById("answer");
    this.num = 1;
}

var qa = new QA();

(function firstQuestion() {
    qa.question.innerText = '你叫什么鸭？';
})();

function confirm() {
    console.log(qa.num);

    switch (qa.num) {
        case 1: checkFirstQuestion();break;
        case 2: checkSecondQuestion();break;
        case 3: checkThirdQuestion();break;
    }
}

function secondQuestion() {
    alert('答对啦！！！');
    qa.answer.value = '';
    qa.question.innerText = '你最爱谁鸭？';
}

function thirdQuestion() {
    alert('答对啦！！！');
    qa.question.innerText = '和你爱的人在一起开心嘛？';
}

function checkFirstQuestion() {
    var answer = qa.answer.value;
    console.log(answer);

    if ("小笨圆大人" === answer) {
        qa.num++;
        secondQuestion();
    } else {
        alert('我叫你 ？？？？？');
        alert('答案是五个字');
    }
}

function checkSecondQuestion() {
    var answer = qa.answer.value;
    console.log(answer);

    if ("桃儿" === answer) {
        qa.num++;
        thirdQuestion();
    } else {
        alert('你叫我什么呢？');
    }
}

function checkThirdQuestion() {
    var answer = qa.answer.value;
    console.log(answer);

    if ("开心!" === answer || '开心！' === answer) {
        location.href = './final/final.html';
    } else {
        alert('看起来不够开心呢')
    }
}

