var holder = [];

var counter = 0;

// Back-end
function toDo(name) {
  this.name = name;
  this.done = "";
}

toDo.prototype.setDone = function(done) {
  this.done = done;
}


toDo.prototype.getName = function() {
  return this.name;
}

toDo.prototype.getDone = function() {
  return this.done;
}

//Front-end
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#task").val();
    var newTask = new toDo(inputtedTask);
    holder.push(newTask);
    $("ul#list").append("<li class='remove'><a id='" + counter + "'>" + newTask.getName() + "</a>");
    linkSetup();
    counter++;
  });

  $("#box").click(function() {
    var at = $("#box").attr('name');

    holder[at].setDone($("#box").val());

    delete holder[at];

    $(".output").hide();

    $(".remove").remove();

    for (var i = 0; i < holder.length; i++) {
      if (holder[i]) {
        $("ul#list").append("<li class='remove'><a id='" + i + "'>" + holder[i].getName() + "</a>");
      }


      linkSetup();


    }
  });
});

function linkSetup() {
  $("a").click(function() {
    var at = $(this).attr('id');
    $(".output").show();
    $("#nameHeader").text(holder[at].getName());
    $("#box").attr('name', at);
    $("#box").prop('checked', false);
    if (holder[at].getDone() !== "")
      $("#box").prop('checked', true);
  });
}
