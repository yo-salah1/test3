window.addEventListener("load", () => {
  const personalization = document.getElementById("switch");
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  personalization.innerHTML = `Hi, Happy ${day} 😀`;

  const form = document.querySelector("#taskForm");
  const input = document.querySelector("#inTask");
  const submit = document.querySelector("#submitTask");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = capitalize(input.value);
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    const tContent = document.createElement("div");
    tContent.classList.add("content");
    newTask.appendChild(tContent);

    const tInput = document.createElement("input");
    tInput.classList.add("text");
    tInput.type = "text";
    tInput.value = task;
    tInput.setAttribute("readonly", "readonly");
    tContent.appendChild(tInput);

    // counter
    const counter = document.createElement("div");
    counter.classList.add("counter");
    newTask.appendChild(counter);

    const time = document.createElement("div");
    time.classList.add("time");
    time.innerText = "00:00:00";
    counter.appendChild(time);

    const controller = document.createElement("div");
    controller.classList.add("controls");
    counter.appendChild(controller);

    const start = document.createElement("button");
    start.classList.add("start");
    start.innerText = "Start";

    const stop = document.createElement("button");
    stop.classList.add("stop");
    stop.innerText = "Stop/Pause";

    const reset = document.createElement("button");
    reset.classList.add("reset");
    reset.innerText = "Reset";

    controller.appendChild(start);
    controller.appendChild(stop);
    controller.appendChild(reset);

    const action = document.createElement("div");
    action.classList.add("action");
    newTask.appendChild(action);

    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerText = "Edit Task";

    const deleteT = document.createElement("button");
    deleteT.classList.add("deleteT");
    deleteT.innerText = "Delete Task";

    action.appendChild(edit);
    action.appendChild(deleteT);

    document.querySelector("#task").appendChild(newTask);
    input.value = "";

    let seconds = 0;
    let interval = null;

    start.addEventListener("click", startF);
    stop.addEventListener("click", stopF);
    reset.addEventListener("click", resetF);

    function capitalize(str) {
      return str[0].toUpperCase() + str.slice(1);
    }

    // counter function
    function timer() {
      seconds++;
      let hrs = Math.floor(seconds / 3600);
      let min = Math.floor((seconds % 3600) / 60);
      let secs = seconds % 60;

      if (secs < 10) secs = "0" + secs;
      if (min < 10) min = "0" + min;
      if (hrs < 10) hrs = "0" + hrs;

      time.innerText = `${hrs}:${min}:${secs}`;
    }

    function startF() {
      if (interval) return;
      interval = setInterval(timer, 1000);
    }

    function stopF() {
      clearInterval(interval);
      interval = null;
    }

    function resetF() {
      stopF();
      seconds = 0;
      time.innerText = "00:00:00";
    }

    edit.addEventListener("click", () => {
      if (edit.innerText.toLocaleLowerCase() === "edit task") {
        tInput.removeAttribute("readonly");
        tInput.focus();
        edit.innerText = "Save";
      } else {
        tInput.setAttribute("readonly", "readonly");
        edit.innerText = "Edit Task";
      }
    });

    deleteT.addEventListener("click", () => {
      newTask.remove();
    });
  });
});
