import "./styles.css";

const submitFeelings = document.querySelector('#submitFeelings');

// With each click event, the class of span id gets wiped of all possible classes, then the proper class according to case gets added

submitFeelings.addEventListener('click', function(event) {
  event.preventDefault();
  const feelingsInput = document.querySelector("[name=mood]:checked");
  const myFeelings = document.querySelector("#myFeelings");
  const feelingsValue = feelingsInput.value;
  myFeelings.innerHTML = feelingsInput.value;
  const classes = myFeelings.classList;
  classes.toggle('default-mood');
  switch(feelingsValue) {
    case 'Most Happy' :
      classes.remove('most-happy-mood', 'semi-happy-mood', 'less-happy-mood', 'totally-mid-mood', 'dying-mood','default-mood');
      classes.add('most-happy-mood');
      // console.log(myFeelings);
      break
    case 'Semi Happy' :
      classes.remove('most-happy-mood', 'semi-happy-mood', 'less-happy-mood', 'totally-mid-mood', 'dying-mood','default-mood');
      classes.add('semi-happy-mood');
      // console.log(myFeelings);
      break
    case 'Less Happy' :
      classes.remove('most-happy-mood', 'semi-happy-mood', 'less-happy-mood', 'totally-mid-mood', 'dying-mood','default-mood');
      classes.add('less-happy-mood');  
      // console.log(myFeelings);    
      break
    case 'Totally Mid' :
      classes.remove('most-happy-mood', 'semi-happy-mood', 'less-happy-mood', 'totally-mid-mood', 'dying-mood','default-mood');      
      console.log(myFeelings);
      classes.add('totally-mid-mood');
      // console.log(myFeelings);
      break
    case 'Bro Dying.' :
      classes.remove('most-happy-mood', 'semi-happy-mood', 'less-happy-mood', 'totally-mid-mood', 'dying-mood','default-mood');      
      console.log(myFeelings);
      classes.add('dying-mood');
      // console.log(myFeelings);
      break
    default:
      console.log("IT'S A SWITCH")
  }
})

