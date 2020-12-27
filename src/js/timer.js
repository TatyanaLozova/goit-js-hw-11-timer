class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;

    const daysRef = document.querySelector(`span[data-value='days']`);
    const hoursRef = document.querySelector(`span[data-value='hours']`);
    const minsRef = document.querySelector(`span[data-value='mins']`);
    const secsRef = document.querySelector(`span[data-value='secs']`);

    setInterval(() => {
      let currentDate = Date.now();
      let time = this.targetDate - currentDate;

      let days = Math.floor(time / (1000 * 60 * 60 * 24));
      let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((time % (1000 * 60)) / 1000);

      daysRef.textContent = days;
      hoursRef.textContent = hours;
      minsRef.textContent = mins;
      secsRef.textContent = secs;
    }, 1000);
  }
}
const timerNewYear = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2021"),
});

timerNewYear.start();