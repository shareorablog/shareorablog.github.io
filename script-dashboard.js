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

  // Al-Fatihah Test 1
    document.getElementById("test1Card").innerHTML =
        `<h4>Understanding the words - Al-Fatihah</h4>
        ${progress.test1 === 100 ? '✅ Passed' : '❌ Not Passed'}
        <br><button onclick='window.location="test1.html"'>Start</button>`;
// Al-Fatihah Test 2
    document.getElementById("test2Card").innerHTML =
        `<h4>Memorising the words - Al-Fatihah</h4>
        ${progress.test2 === 100 ? '✅ Passed' : progress.test1 === 100 ? '❌ Not Passed' : '🔒 Locked'}
        <br><button ${progress.test1 === 100 ? '' : 'disabled'} onclick='window.location="test2.html"'>Start</button>`;
// Al-Fatihah Test 3
    document.getElementById("test3Card").innerHTML =
        `<h4>Test - Al-Fatihah</h4>
        ${progress.test3 === 100 ? '✅ Passed' : progress.test2 === 100 ? '❌ Not Passed' : '🔒 Locked'}
        <br><button ${progress.test2 === 100 ? '' : 'disabled'} onclick='window.location="test3.html"'>Start</button>`;
// Al-Baqarah Test 4
    document.getElementById("test4Card").innerHTML =
        `<h4>Understanding the words - Al-Baqarah</h4>
        ${progress.test4 === 100 ? '✅ Passed' : progress.test3 === 100 ? '❌ Not Passed' : '🔒 Locked'}
        <br><button ${progress.test3 === 100 ? '' : 'disabled'} onclick='window.location="test4.html"'>Start</button>`;
// Al-Baqarah Test 5
    document.getElementById("test5Card").innerHTML =
        `<h4>Memorising the words - Al-Baqarah</h4>
        ${progress.test5 === 100 ? '✅ Passed' : progress.test4 === 100 ? '❌ Not Passed' : '🔒 Locked'}
        <br><button ${progress.test4 === 100 ? '' : 'disabled'} onclick='window.location="test5.html"'>Start</button>`;
// Al-Baqarah Test 6
    document.getElementById("test6Card").innerHTML =
        `<h4>Test - Al-Baqarah</h4>
        ${progress.test6 === 100 ? '✅ Passed' : progress.test5 === 100 ? '❌ Not Passed' : '🔒 Locked'}
        <br><button ${progress.test5 === 100 ? '' : 'disabled'} onclick='window.location="test6.html"'>Start</button>`;
}
