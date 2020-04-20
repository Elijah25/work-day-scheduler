
// display current date in the header
var displayDate = function () {
    var date = moment().format("dddd, MMMM Do YYYY")
    $("#currentDay").text(date)
    console.log(
        "test"
    )
}

var taskList = localStorage.getItem("taskList")
if (taskList === null) {
    taskList = ["", "", "", "", "", "", "", "", ""]
}
else{
    var taskListArray = taskList.split(",")
    taskList = taskListArray
}



function renderTasks () {
    // $('.description').each(()=>{
    //     if (time < blocktime) {
    //         button.click(()=>{
    //             localStorage.setItem()
    //         })
    //     }
    // })
    for (let i = 0; i < taskList.length; i+=1) {
        // load task list array into text areas
        $(`#desc-${i}`).val(taskList[i])
    }
    auditTasks()
}

// audit timeblocks and change css
var auditTasks = function() {
    for (let i = 0; i < taskList.length; i+=1) {
        var taskTime = $(`#timeId-${i}`).text()
        var momentTaskTime = moment(taskTime, 'HHA')
        momentTaskTime.toDate()
        momentTaskTime.format('hh')
        if (moment().isBefore(momentTaskTime)) {
            $(`#desc-${i}`).addClass("future");
        }
        else if (moment().isAfter(momentTaskTime)) {
            $(`#desc-${i}`).addClass("past");
        }
        else {
            $(`#desc-${i}`).addClass("present");
        }
    }
}

// click event listener on save button
var saveButtonClick = function(event) {
    var btnEl = $(this)
    console.log(btnEl)
    var btnId = btnEl.attr("data-btn-id")
    console.log(btnId);

    var textEditEl = document.querySelector("#desc-" + btnId)
    var newText = textEditEl.value
    taskList[btnId] = newText
    console.log(taskList)

    localStorage.setItem("taskList", taskList)
}

$(".saveBtn").on("click", saveButtonClick)

displayDate();
renderTasks();

