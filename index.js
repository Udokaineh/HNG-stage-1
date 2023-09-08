document.addEventListener('DOMContentLoaded', function () {

    const currentDate = new Date()
    const currentDay = currentDate.toLocaleDateString("en-NG", { weekday: 'long' });
    const currentUTCTime = currentDate.toLocaleTimeString()

    // Update the elements with dynamic data
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime
})

