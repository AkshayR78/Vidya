// Sample data for courses (you can replace it with actual data fetched from a server)
const coursesData = [
    { id: 1, title: "Introduction to Programming🐍", image: "course1.jpg", description: "Learn the basics of programming."},
    { id: 2, title: "Web Development🌐", image: "course2.jpg", description: "Build websites and web applications.👩🏻‍💻"},
    { id: 3, title: "Machine Learning🤖", image: "course3.jpg", description: "Explore the world of machine learning and AI."},
    { id: 4, title: "C++ PROGRAMMING#️⃣", image: "course4.jpg", description: "Explore the world with c++.👩🏻‍💻"},
    { id: 5, title: "ENVIROMENT SCIENCE🌍", image: "course5.jpg", description: "Know more about ENVIROMENT.🏞️🏭"},
    { id: 6, title: "PHYSICS🚀", image: "course6.jpg", description: "Know the logics of physics.🧲🌌"},
    { id: 7, title: "CHEMISTRY🧪🥽", image: "course7.jpg", description: "Play with chemical reactions.🥼"},
    { id: 8, title: "MATHS𝞹📈🧠📚", image: "course8.jpg", description: "Lets play with the numbers.📐e = ∑∞ⁿ⁼⁰ ¹ₙ🤓"},
    { id: 9, title: "BIOLOGY🦠🧪🧫", image: "course9.jpg", description: "lets dig into the course👩🏻‍🔬🧬."},
    { id: 10, title: "HUMAN INTERACTION 🖥️", image: "course10.jpg", description: "Know how computer and Human interact.👨🏼‍💻"},
    // Add more courses as needed
];

// Function to generate course cards
function generateCourseCards() {
    const mainContent = document.querySelector('.main-content');

    coursesData.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        const image = document.createElement('img');
        image.src = course.image;
        image.alt = course.title;

        const title = document.createElement('h2');
        title.textContent = course.title;

        const description = document.createElement('p');
        description.textContent = course.description;

        courseCard.appendChild(image);
        courseCard.appendChild(title);
        courseCard.appendChild(description);

        mainContent.appendChild(courseCard);
    });
}

// Call the function to generate course cards when the page is loaded
window.addEventListener('load', generateCourseCards);
