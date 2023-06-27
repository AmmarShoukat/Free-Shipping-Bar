/ Function to find percentage
  function percentage(a, b) {
    return a / b * 100 > 100 ? 100 : a / b * 100;
  }

//On Window Load
window.onload = function() {
   setInterval(function () {
var cn = $(".totals__subtotal-value").attr('data-value');
  //User Object
  var User = {
    freeShippingCollect: cn,
    freeShippingGoal: 35
  };

  // IDs
  var freeShippingProgress = document.getElementById("free-shipping--progress"),
    freeShippingNumber = document.getElementById("free-shipping--number"),
    freeShippingGoal = document.getElementById("free-shipping--goal"),
    freeShippingStatus = document.getElementById("free-shipping--status"),
    freeShippingAmount = document.getElementById("free-shipping--amount"),
    freeShipping = document.getElementById("free-shipping");

  // How much percent to reach Goal
  
   var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  var percent = percentage(User.freeShippingCollect, User.freeShippingGoal);
  // What we have so far to reach Goal
  freeShippingProgress.setAttribute("aria-valuenow", User.donationCollect);
  // Goal
  freeShippingProgress.setAttribute("aria-valuemax", User.donationGoal);

  // Default Data
  if(percent < 100){
    freeShippingProgress.setAttribute("style", "width:" + percent + "%");
    freeShippingNumber.setAttribute("style", "left:" + percent + "%");
    freeShippingNumber.innerHTML = formatter.format(User.freeShippingCollect);
    //freeShippingGoal.innerHTML = "$" + User.freeShippingGoal;
    freeShippingGoal.innerHTML = formatter.format(User.freeShippingGoal);
    freeShippingStatus.innerHTML = "<span class='green'>$" + (User.freeShippingGoal - User.freeShippingCollect) + "</span> away from Free Delivery";
  }else{
    freeShippingStatus.innerHTML = "<span>Free Shipping Unlocked</span>";
  }
 }, 800); 
};
