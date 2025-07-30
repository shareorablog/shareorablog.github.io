function getStudentData() {
  return JSON.parse(localStorage.getItem('studentData'));
}

function saveStudentData(data) {
  localStorage.setItem('studentData', JSON.stringify(data));
}

function loadDashboard() {
  const student = getStudentData();
  if (!student) window.location.href = "index.html";
  document.getElementById('studentName').textContent = student.name;

  const progress = student.progress;

//Al-Fatihah Word 1
document.getElementById("word1Card").innerHTML =
    `<h4>Understanding the words - Al-Fatihah</h4>
    ${progress.word1 === 100 ? '✅ Completed' : '❌ Not Completed'}
    <br><button onclick='window.location="word1.html"'>Start</button>`;
//Al-Fatihah Memory 1
document.getElementById("memory1Card").innerHTML =
    `<h4>Memorising the words - Al-Fatihah</h4>
    ${progress.memory1 === 100 ? '✅ Completed' : progress.word1 === 100 ? '❌ Not Completed' : '🔒 Locked'}
    <br><button ${progress.word1 === 100 ? '' : 'disabled'} onclick='window.location="memory1.html"'>Start</button>`;
// Al-Fatihah Test 1
    document.getElementById("test1Card").innerHTML =
        `<h4>Test - Al-Fatihah</h4>
        ${progress.test1 === 100 ? '✅ Passed' : progress.memory1 === 100 ? '❌ Not Passed' : '🔒 Locked'}
        <br><button ${progress.memory1 === 100 ? '' : 'disabled'} onclick='window.location="test1.html"'>Start</button>`;

// Al-Baqarah Word 2
    document.getElementById("word2Card").innerHTML =
        `<h4>Understanding the words - Al-Baqarah</h4>
        ${progress.word2 === 100 ? '✅ Completed' : progress.test1 === 100 ? '❌ Not Completed' : '🔒 Locked'}
        <br><button ${progress.test1 === 100 ? '' : 'disabled'} onclick='window.location="word2.html"'>Start</button>`;
// Al-Baqarah Memory 2
    document.getElementById("memory2Card").innerHTML =
        `<h4>Memorising the words - Al-Baqarah</h4>
        ${progress.memory2 === 100 ? '✅ Completed' : progress.word2 === 100 ? '❌ Not Completed' : '🔒 Locked'}
        <br><button ${progress.word2 === 100 ? '' : 'disabled'} onclick='window.location="memory2.html"'>Start</button>`;
// Al-Baqarah Test 2
    document.getElementById("test2Card").innerHTML =
        `<h4>Test - Al-Baqarah</h4>
        ${progress.test2 === 100 ? '✅ Passed' : progress.memory2 === 100 ? '❌ Not Passed' : '🔒 Locked'}
        <br><button ${progress.memory2 === 100 ? '' : 'disabled'} onclick='window.location="test2.html"'>Start</button>`;

// Al-Imran Word 3
    document.getElementById("word3Card").innerHTML =
        `<h4>Understanding the words - Al-Imran</h4>
        ${progress.word3 === 100 ? '✅ Completed' : progress.test2 === 100 ? '❌ Not Completed' : '🔒 Locked'}
        <br><button ${progress.test2 === 100 ? '' : 'disabled'} onclick='window.location="word3.html"'>Start</button>`;
// Al-Imran Memory 3
    document.getElementById("memory3Card").innerHTML =
        `<h4>Memorising the words - Al-Imran</h4>
        ${progress.memory3 === 100 ? '✅ Completed' : progress.word3 === 100 ? '❌ Not Completed' : '🔒 Locked'}
        <br><button ${progress.word3 === 100 ? '' : 'disabled'} onclick='window.location="memory3.html"'>Start</button>`;
// Al-Imran Test 3
    document.getElementById("test3Card").innerHTML =
        `<h4>Test - Al-Imran</h4>
        ${progress.test3 === 100 ? '✅ Passed' : progress.memory3 === 100 ? '❌ Not Passed' : '🔒 Locked'}
        <br><button ${progress.memory3 === 100 ? '' : 'disabled'} onclick='window.location="test3.html"'>Start</button>`;


}
