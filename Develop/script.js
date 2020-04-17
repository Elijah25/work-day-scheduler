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


// render function to load all tasks 
// function taskBuilder () {
//     var taskRow = document.createElement("div")
//     $(taskRow).attr("class", "row time-block")

//     $(".container").append(taskRow)

//     var taskColumn1 = document.createElement("div")
//     $(taskColumn1).attr("class", "col-sm-2 hour")
//     $(taskColumn1).html("1")

//     $(".row").append(taskColumn1)

//     var taskColumn2 = document.createElement("textarea")
//     $(taskColumn2).attr("class", "col-md-8 description")
//     $(taskColumn2).val("description")


//     $(".row").append(taskColumn2)

//     var taskColumn3 = document.createElement("button")
//     $(taskColumn3).attr("class", "btn saveBtn col-sm-2")

//     $(".row").append(taskColumn3)

//     var buttonContent = document.createElement("i")
//     $(buttonContent).html("save")

//     $(".button").append(buttonContent)

//     console.log("hello")
    


// }

    function renderTasks () {
        $('.description').each(()=>{
            if (time < blocktime) {
                button.click(()=>{
                    localStorage.setItem()
                })
            }
        })
        for (let i = 0; i < taskList.length; i+=1) {
            // first is row, second is child element or tag

            taskList[i]= $(`#desc-${0}`).val()
            
            $
        }
    }

// audit timeblocks and change css

// click event listener on textarea to begin edit

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
// renderTasks();

