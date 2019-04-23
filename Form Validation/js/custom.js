
$(document).ready(function() {

  var firstnameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  $("#first_name").keyup(function(){
    var test = $(this).val();
    if(!test.match(firstnameReg)){
      $(this).val('');
    }

  })

$('#submit').click(function(e) {
   e.preventDefault();

    var firstnameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    // var lastnameReg = /^[A-Za-z]+$/;
    // var phoneReg =  /^[0-9]+$/;
    // var homephoneReg =  /^[0-9]+$/;
    // var zipcodeReg =  /^[0-9]{0,6}+$/;
    // var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


  //
  $(".error").remove();

  var firstname = $('#first_name').val();
  if(firstname.length < 1){
    $("#first_name").after("<span class='error'>please enter name</span>");
    $("#first_name").keypress(function(){
      $(this).siblings(".error").hide();
    });

  }
  var lastname = $('#last_name').val();
  if(lastname.length < 1){
    $("#last_name").after("<span class='error'>please enter Last name</span>");
    $("#last_name").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var doorno = $("#door_no").val();
  if(doorno.length < 1){
    $("#door_no").after("<span class='error'>please enter Your Door No</span>");
    $("#door_no").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var city = $("#city").val();
  if(city.length < 1){
    $("#city").after("<span class='error'>please enter City</span>");
    $("#city").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var state = $("select#state").val();
  if(state == ''){
    $("select#state").after("<span class='error'>please Select a State</span>");
    $("select#state").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var zipcode = $("#zipcode").val();
  if(zipcode == ''){
    $("#zipcode").after("<span class='error'>Enter a zipcode</span>");
    $("#zipcode").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var email = $("#email").val();
  if(email == ''){
    $("#email").after("<span class='error'>Enter Valid email address</span>");
    $("#email").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var phone = $("#phone").val();
  if(phone == ''){
    $("#phone").after("<p class='error error-1'>Enter valid Phone number</p>");
    $("#phone").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var timezone = $("#timezone").val();
  if(timezone == ''){
    $("#timezone").after("<span class='error'>Select time zone</span>");
    $("#timezone").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var certification = $("#certification").val();
  if(certification == ''){
    $("#certification").after("<span class='error'>Your certification format</span>");
    $("#certification").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var memberid = $("#member_id").val();
  if(memberid == ''){
    $("#member_id").after("<span class='error'>Enter member id</span>");
    $("#member_id").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var dateofissue = $("#date_of_issue").val();
  if(dateofissue == ''){
    $("#date_of_issue").after("<span class='error'>Enter date of issue</span>");
    $("#date_of_issue").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var expirationdate = $("#expiration_date").val();
  if(expirationdate == ''){
    $("#expiration_date").after("<span class='error'>Enter expirationdate</span>");
    $("#expiration_date").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var availability = $("#availability").val();
  if(availability == ''){
    $("#availability").after("<span class='error'>Select availability</span>");
    $("#availability").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var noofhours = $("#no_of_hours").val();
  if(noofhours == ''){
    $("#no_of_hours").after("<span class='error'>Number of hours</span>");
    $("#no_of_hours").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var position = $("#position").val();
  if(position == ''){
    $("#position").after("<span class='error'>select a Position</span>");
    $("#position").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var experiencehcc = $("#experience_hcc").val();
  if(experiencehcc == ''){
    $("#experience_hcc").after("<span class='error'>select experience hcc</span>");
    $("#experience_hcc").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var experienceccc = $("#experience_ccc").val();
  if(experienceccc == ''){
    $("#experience_ccc").after("<span class='error'>select experience ccc</span>");
    $("#experience_ccc").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var experienceinaudit = $("#experience_in_audit").val();
  if(experienceinaudit == ''){
    $("#experience_in_audit").after("<span class='error'>select experience in audit</span>");
    $("#experience_in_audit").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var communicationmode = $("#communication_mode").val();
  if(communicationmode == ''){
    $("#communication_mode").after("<span class='error'>select preferred mode of commnication </span>");
    $("#communication_mode").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }

  var startdate = $("#start_date").val();
  if(startdate == ''){
    $("#start_date").after("<span class='error'>Select a start date</span>");
    $("#start_date").keypress(function(){
      $(this).siblings(".error").hide();
    });
  }
});


  $("#communication_mode").change(function(){
          var optionValue = $(this).val();
          if(optionValue == 'call'){
              $("#preferred").removeClass('d-none');
          } else{
              $("#preferred").addClass('d-none');
          }
  });

  $("#start_date").change(function(){
          var optionValue = $(this).val();
          if(optionValue == 'later'){
              $("#laters").removeClass('d-none');
          } else{
              $("#laters").addClass('d-none');
          }
  });



});
