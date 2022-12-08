$(function () {
  var currentHour = dayjs().hour();
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))
  //console.log(currentHour);
  $('.time-block').on('click', '.saveButton', function () {
    var input = $(this).prev().val();
    var id = $(this).parent().attr('id');
    localStorage.setItem(id, input);
  });


  $('.time-block').each(function () {
    var hour = $(this).attr('id');
    console.log(hour);
    console.log(currentHour);
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present')
    } else if(hour > currentHour) {
      $(this).addClass('future');
    }

    var text = localStorage.getItem($(this).attr('id'));

    $(this).find('.description').val(text);
  });

  
});
