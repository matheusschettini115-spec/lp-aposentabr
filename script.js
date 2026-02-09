function nextQuestion(step) {
    // Hide all questions
    const questions = document.querySelectorAll('.question-step');
    questions.forEach(q => q.classList.remove('active'));

    // Show next question
    const nextQ = document.getElementById(`question-${step}`);
    if (nextQ) {
        nextQ.classList.add('active');
        updateProgress(step);
    }
}

function updateProgress(step) {
    const fill = document.getElementById('progress-fill');
    // 3 steps total
    const percent = (step / 3) * 100;
    fill.style.width = `${percent}%`;
}

function finishQuiz(isQualified) {
    const quizContainer = document.getElementById('quiz-container');
    const disqualifyScreen = document.getElementById('disqualify-screen');
    const successScreen = document.getElementById('success-screen');

    // Hide quiz
    quizContainer.classList.remove('active');
    quizContainer.classList.add('hidden');

    if (isQualified) {
        // Show Success
        successScreen.classList.remove('hidden');
        successScreen.classList.add('active');
    } else {
        // Show Disqualify
        disqualifyScreen.classList.remove('hidden');
        disqualifyScreen.classList.add('active');
    }
}

function restartQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const disqualifyScreen = document.getElementById('disqualify-screen');

    // Hide disqualify
    disqualifyScreen.classList.remove('active');
    disqualifyScreen.classList.add('hidden');

    // Show quiz and reset to q1
    quizContainer.classList.remove('hidden');
    quizContainer.classList.add('active');

    // Reset questions
    document.querySelectorAll('.question-step').forEach(q => q.classList.remove('active'));
    document.getElementById('question-1').classList.add('active');

    // Reset progress
    updateProgress(1);
}

// Track RD Station Form Submission
window.addEventListener('rdstation.form.success', function (event) {
    if (typeof fbq === 'function') {
        fbq('track', 'Lead');
    }
});
