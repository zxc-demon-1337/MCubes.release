
scrambleText = document.getElementById('scramble-text')


//------------------ ScrambleFormula
function generate2x2Scramble() {
  const moves = {
    x: ['R', 'L'],
    y: ['U', 'D'],
    z: ['F', 'B']
  };

  const modifiers = ['', "'", '2'];
  const axes = ['x', 'y', 'z'];

  const scramble = [];
  let lastAxis = null;

  for (let i = 0; i < 9; i++) {
    const availableAxes = axes.filter(axis => axis !== lastAxis);
    const axis = availableAxes[Math.floor(Math.random() * availableAxes.length)];

    const face = moves[axis][Math.floor(Math.random() * 2)];

    const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];

    scramble.push(face + modifier);
    lastAxis = axis;
  }

  return scramble.join(' ');
    // return("F' U' R D2 R' D' L2 F2 L'")
}
//------------------ ScrambleFormula



//------------------ ScrambleByForm

//------------------ RenderCube
function RenderCube(Scramble){
    function scrambleByForm(Scramble){
        let ScrambleForm = Scramble.split(" ")
        function U2(){U();U()}
        function D2(){D();D()}
        function F2(){F();F()}
        function B2(){B();B()}
        function R2(){R();R()}
        function L2(){L();L()}

        actionsMod = {
            "U" : U,
            "U2" : U2,
            "U'" : Ui,

            "D" : D,
            "D2" : D2,
            "D'" : Di,

            "F" : F,
            "F2" : F2,
            "F'" : Fi,

            "B" : B,
            "B2" : B2,
            "B'" : Bi,

            "R" : R,
            "R2" : R2,
            "R'" : Ri,

            "L" : L,
            "L2" : L2,
            "L'" : Li,
        }

        for (const move of ScrambleForm) {
            if (move && actionsMod[move]) {
                actionsMod[move]();
            }
        }}
    //------------------ ScrambleByForm

    //------------------Actions
    const root = [
        [" ", " "],
        [" ", " "],
    ];
    const up = [
        ["Y", "Y"],
        ["Y", "Y"],
    ];
    const down = [
        ["W", "W"],
        ["W", "W"],
    ];
    const front = [
        ["G", "G"],
        ["G", "G"],
    ];
    const back = [
        ["B", "B"],
        ["B", "B"],
    ];
    const right = [
        ["O", "O"],
        ["O", "O"],
    ];
    const left = [
        ["R", "R"],
        ["R", "R"],
    ];

    let boof = null
    let boof1 = null
    let boof2 = null

    function R(){
        boof = right[0][0]
        right[0][0] = right[1][0]
        right[1][0] = right[1][1]
        right[1][1] = right[0][1]
        right[0][1] = boof

        boof1 = front[0][1]
        boof2 = front[1][1]
        front[0][1] = down[0][1]
        front[1][1] = down[1][1]
        down[0][1] = back[1][0]
        down[1][1] = back[0][0]
        back[1][0] = up[0][1]
        back[0][0] = up[1][1]
        up[0][1] = boof1
        up[1][1] = boof2
    }
    function Ri(){
        boof = right[0][0]
        right[0][0] = right[0][1]
        right[0][1] = right[1][1]
        right[1][1] = right[1][0]
        right[1][0] = boof

        boof1 = front[0][1]
        boof2 = front[1][1]
        front[0][1] = up[0][1]
        front[1][1] = up[1][1]
        up[0][1] = back[1][0]
        up[1][1] = back[0][0]
        back[1][0] = down[0][1]
        back[0][0] = down[1][1]
        down[0][1] = boof1
        down[1][1] = boof2
    }
    function Ui(){
        boof = up[0][0]
        up[0][0] = up[0][1]
        up[0][1] = up[1][1]
        up[1][1] = up[1][0]
        up[1][0] = boof

        boof1 = front[0][0]
        boof2 = front[0][1]
        front[0][0] = left[0][0]
        front[0][1] = left[0][1]
        left[0][0] = back[0][0]
        left[0][1] = back[0][1]
        back[0][0] = right[0][0]
        back[0][1] = right[0][1]
        right[0][0] = boof1
        right[0][1] = boof2
    }
    function U(){
        boof = up[0][0]
        up[0][0] = up[1][0]
        up[1][0] = up[1][1]
        up[1][1] = up[0][1]
        up[0][1] = boof

        boof1 = front[0][0]
        boof2 = front[0][1]
        front[0][0] = right[0][0]
        front[0][1] = right[0][1]
        right[0][0] = back[0][0]
        right[0][1] = back[0][1]
        back[0][0] = left[0][1]
        back[0][1] = left[0][0]
        left[0][0] = boof1
        left[0][1] = boof2
    }
    function L(){
        boof = left[0][0]
        left[0][0] = left[0][1]
        left[0][1] = left[1][1]
        left[1][1] = left[1][0]
        left[1][0] = boof

        boof1 = front[0][0]
        boof2 = front[1][0]
        front[0][0] = up[0][0]
        front[1][0] = up[1][0]
        up[0][0] = back[1][1]
        up[1][0] = back[0][1]
        back[1][1] = down[0][0]
        back[0][1] = down[1][0]
        down[1][0] = boof2
        down[0][0] = boof1
    }
    function Li(){
        boof = left[0][0]
        left[0][0] = left[0][1]
        left[0][1] = left[1][1]
        left[1][1] = left[1][0]
        left[1][0] = boof

        boof1 = front[0][0]
        boof2 = front[1][0]
        front[0][0] = down[0][0]
        front[1][0] = down[1][0]
        down[0][0] = back[1][1]
        down[1][0] = back[0][1]
        back[1][1] = up[0][0]
        back[0][1] = up[1][0]
        up[0][0] = boof1
        up[1][0] = boof2
    }
    function D(){
        boof = down[0][0]
        down[0][0] = down[1][0]
        down[1][0] = down[1][1]
        down[1][1] = down[0][1]
        down[0][1] = boof

        boof1 = front[1][0]
        boof2 = front[1][1]
        front[1][0] = left[1][0]
        front[1][1] = left[1][1]
        left[1][0] = back[1][0]
        left[1][1] = back[1][1]
        back[1][0] = right[1][0]
        back[1][1] = right[1][1]
        right[1][0] = boof1
        right[1][1] = boof2
    }
    function Di(){
        boof = down[0][0]
        down[0][0] = down[0][1]
        down[0][1] = down[1][1]
        down[1][1] = down[1][0]
        down[1][0] = boof

        boof1 = front[1][0]
        boof2 = front[1][1]
        front[1][0] = right[1][0]
        front[1][1] = right[1][1]
        right[1][0] = back[1][0]
        right[1][1] = back[1][1]
        back[1][0] = left[1][0]
        back[1][1] = left[1][1]
        left[1][0] = boof1
        left[1][1] = boof2
    }
    function F(){
        boof = front[0][0]
        front[0][0] = front[1][0]
        front[1][0] = front[1][1]
        front[1][1] = front[0][1]
        front[0][1] = boof

        boof1 = up[1][0]
        boof2 = up[1][1]
        up[1][0] = left[1][1]
        up[1][1] = left[0][1]
        left[1][1] = down[0][1]
        left[0][1] = down[0][0]
        down[0][1] = right[0][0]
        down[0][0] = right[1][0]
        right[0][0] = boof1
        right[1][0] = boof2
    }
    function Fi(){
        boof = front[0][0]
        front[0][0] = front[0][1]
        front[0][1] = front[1][1]
        front[1][1] = front[1][0]
        front[1][0] = boof

        boof1 = up[1][0]
        boof2 = up[1][1]
        up[1][0] = right[0][0]
        up[1][1] = right[1][0]
        right[0][0] = down[0][1]
        right[1][0] = down[0][0]
        down[0][1] = left[1][1]
        down[0][0] = left[0][1]
        left[1][1] = boof1
        left[0][1] = boof2
    }

    function B(){
        boof = back[0][0]
        back[0][0] = back[1][0]
        back[1][0] = back[1][1]
        back[1][1] = back[0][1]
        back[0][1] = boof

        boof1 = up[0][0]
        boof2 = up[0][1]
        up[0][0] = right[0][1]
        up[0][1] = right[1][1]  
        right[0][1] = down[1][1]
        right[1][1] = down[1][0]
        down[1][1] = left[1][0]
        down[1][0] = left[0][0]
        left[1][0]= boof1
        left[0][0] = boof2
    }

    function Bi(){
        boof = back[0][0]
        back[0][0] = back[0][1]
        back[0][1] = back[1][1]
        back[1][1] = back[1][0]
        back[1][0] = boof

        boof1 = up[0][0]
        boof2 = up[0][1]
        up[0][0] = left[1][0]
        up[0][1] = left[0][0]
        left[1][0] = down[1][1]
        left[0][0] = down[1][0]
        down[1][1] = right[0][1]
        down[1][0] = right[1][1]
        right[0][1] = boof1
        right[1][1] = boof2

    }
    //------------------Actions------------------//


    //------------------Coloring------------------//

    Elements = [
    document.getElementById("y1"), //u1
    document.getElementById("y2"), //u2
    document.getElementById("y3"), //u3
    document.getElementById("y4"), //u4

    document.getElementById("r1"), //l1
    document.getElementById("r2"), //l2
    document.getElementById("r3"), //l3
    document.getElementById("r4"), //l4

    document.getElementById("g1"), //f1
    document.getElementById("g2"), //f2
    document.getElementById("g3"), //f3
    document.getElementById("g4"), //f4

    document.getElementById("o1"), //r18
    document.getElementById("o2"), //r2
    document.getElementById("o3"), //r3
    document.getElementById("o4"), //r4

    document.getElementById("w1"), //b1
    document.getElementById("w2"), //b2
    document.getElementById("w3"), //b3
    document.getElementById("w4"), //b4

    document.getElementById("b1"), //b1
    document.getElementById("b2"), //b2
    document.getElementById("b3"), //b3
    document.getElementById("b4"), //b4

    ]


    function getScramble() {
        let scrEnd = "";
        scrEnd += up.map(row => row.map(String).join("")).join("");
        scrEnd += left.map(row => row.map(String).join("")).join("");
        scrEnd += front.map(row => row.map(String).join("")).join("");
        scrEnd += right.map(row => row.map(String).join("")).join("");
        scrEnd += down.map(row => row.map(String).join("")).join("");
        scrEnd += back.map(row => row.map(String).join("")).join("");
        return scrEnd;
    }

    const colors = {
        "Y" : "yellow",
        "R" : "red",
        "G" : "green",
        "O" : "orange",
        "W" : "white",
        "B" : "blue",
    }


    scrambleByForm(Scramble)
    colorPosition = getScramble()
    scrambleText.textContent = Scramble;
    console.log("scramble:", Scramble)

    for (let i = 0; i < colorPosition.length; i ++){
        Elements[i].style.backgroundColor = colors[colorPosition[i]]
    }
}

/* ---------------- TIMER LOGIC ---------------- */

let state = 'idle';
let startTime = 0;
let timerInterval = null;
let inspectionInterval = null;
let inspectionTime = 15;
let times = [];

const timer = document.getElementById('timer');
const timeEl = document.getElementById('time');
const timesEl = document.getElementById('times');

document.addEventListener('keydown', e => {
    if (e.code !== 'Space') return;
    e.preventDefault();

    if (state === 'idle') {
        startInspection();
    } 
    else if (state === 'running') {
        stopTimer();
    }
});

document.addEventListener('keyup', e => {
    if (e.code !== 'Space') return;
    e.preventDefault();

    if (state === 'ready') {
        startTimer();
    }
});


function startInspection() {
    state = 'inspection';
    timer.className = 'timer inspection';
    let t = inspectionTime;
    timeEl.textContent = t.toFixed(2);

    inspectionInterval = setInterval(() => {
        t -= 0.01;
        timeEl.textContent = t.toFixed(2);
        if (t <= 0) {
            clearInterval(inspectionInterval);
            timer.className = 'timer ready';
            timeEl.textContent = '0.00';
            state = 'ready';
        }
    }, 10);
}

function startTimer() {
    state = 'running';
    timer.className = 'timer running';
    startTime = Date.now();

    timerInterval = setInterval(() => {
        timeEl.textContent = ((Date.now() - startTime) / 1000).toFixed(2);
    }, 10);
}

function renderTimes() {
    timesEl.innerHTML = '';
    times.forEach(t => {
        const d = document.createElement('div');
        d.textContent = t.toFixed(2);
        timesEl.appendChild(d);
    });
}

function stopTimer() {
    clearInterval(timerInterval);
    state = 'idle';
    timer.className = 'timer idle';

    const finalTime = parseFloat(timeEl.textContent);

    times.unshift(finalTime);
    if (times.length > 5) times.pop();

    renderTimes();
    calculateAo5();
    saveSolve(finalTime);
    scramble = generate2x2Scramble();
    RenderCube(scramble);

}


function calculateAo5() {
    if (times.length < 5) {
        document.getElementById('avg').textContent = '-';
        return;
    }

    const sorted = [...times].sort((a, b) => a - b);
    const trimmed = sorted.slice(1, 4); // убрали лучший и худший
    const avg = trimmed.reduce((a, b) => a + b, 0) / 3;

    document.getElementById('avg').textContent = avg.toFixed(2);
}


/* ---------------- SAVE TO DJANGO ---------------- */

function saveSolve(time) {
    const form = document.getElementById('solve-form');
    const csrfToken = form.querySelector('[name=csrfmiddlewaretoken]').value;

    fetch(form.action, {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            cube_type: '2x2',
            scramble: scrambleText.textContent,
            solve_time: time,
        }),
    });
}

scramble = generate2x2Scramble();
console.log(scramble)
scrambleText.textContent = scramble;
RenderCube(scramble);