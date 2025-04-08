function checkAnswers() {
    // Correct answers
    const correctAnswers = {
        q1: "C", // The dog chased the ball.
    };

    // Get the user's answers
    const form = document.getElementById('quizForm');
    const userAnswers = {
        q1: form.q1.value,
    };

    let score = 0;

    // Check each answer
    for (let question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You scored ${score} out of 1`;
}
