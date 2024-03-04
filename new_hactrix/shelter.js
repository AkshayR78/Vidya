document.addEventListener("DOMContentLoaded", function() {
    const subjects = ["Math", "History", "Science", "English", "Art", "Geography"]; // Sample list of subjects
    
    // Display subjects
    const subjectList = document.getElementById("subject-list");
    subjects.forEach(subject => {
      const li = document.createElement("li");
      li.textContent = subject;
      subjectList.appendChild(li);
    });
    
    // Define the daily routine for each day of the week
    const dailyRoutine = {
      "Monday": [
        { time: "09:00 AM", activity: "Math", faculty: "John Doe" },
        { time: "11:00 AM", activity: "History", faculty: "Jane Smith" },
        // Add more activities for Monday as needed
      ],
      "Tuesday": [
        { time: "09:30 AM", activity: "Science", faculty: "David Brown" },
        { time: "10:30 AM", activity: "English", faculty: "Emily Johnson" },
        // Add more activities for Tuesday as needed
      ],
      "Wednesday": [
        { time: "10:00 AM", activity: "Art", faculty: "Michael Lee" },
        { time: "11:00 AM", activity: "Geography", faculty: "Sophia Garcia" },
        // Add more activities for Wednesday as needed
      ],
      // Add routines for other days of the week
    };
  
    const scheduleContainer = document.getElementById("schedule");
    const totalActivitiesElem = document.getElementById("total-activities");
    const completedActivitiesElem = document.getElementById("completed-activities");
    const missedActivitiesElem = document.getElementById("missed-activities");
  
    // Function to get the current day of the week
    function getDayOfWeek() {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const today = new Date().getDay();
      return daysOfWeek[today];
    }
  
    // Function to render the daily routine
    function renderDailyRoutine() {
      const dayOfWeek = getDayOfWeek();
      const routine = dailyRoutine[dayOfWeek];
      let totalActivities = 0;
      let completedActivities = 0;
      
      if (routine) {
        scheduleContainer.innerHTML = `<h2>${dayOfWeek}'s Routine</h2>`;
        routine.forEach(item => {
          totalActivities++;
          const scheduleItem = document.createElement("div");
          scheduleItem.classList.add("schedule-item");
          scheduleItem.innerHTML = `
            <span>${item.time}</span> - ${item.activity} with ${item.faculty}
          `;
          scheduleContainer.appendChild(scheduleItem);
        });
      } else {
        scheduleContainer.innerHTML = "<p>No routine available for today.</p>";
      }
  
      // Update progress
      totalActivitiesElem.textContent = totalActivities;
      completedActivitiesElem.textContent = completedActivities;
      missedActivitiesElem.textContent = totalActivities - completedActivities;
    }
  
    // Call the function to render the daily routine
    renderDailyRoutine();
  });
  