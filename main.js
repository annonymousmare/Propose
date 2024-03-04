function function1(){
  document.getElementById('quotes').innerHTML="“I found I could say things with color and shapes that I couldn’t say any other way – things I had no words for.” ";
  document.getElementById('head').innerHTML="“Someone Special” ";
  document.getElementById('main').style.backgroundImage="url('image2.jpeg')";
  document.getElementById('1').style.display="none";
}

function function2(){
  document.getElementById('quotes').innerHTML="“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.” ";
  document.getElementById('head').innerHTML=" “Whom I know” ";
  document.getElementById('main').style.backgroundImage="url('image3.jpeg')";
  document.getElementById('2').style.display="none";
}

function function3(){
  document.getElementById('quotes').innerHTML="“I am who I am because of you. You are every reason, every hope, and every dream I’ve ever had.” ";
  document.getElementById('head').innerHTML=" “That's You” ";
  document.getElementById('main').style.backgroundImage="url('image4.jpeg')";
  document.getElementById('3').style.display="none";
}

function function4(){
  document.getElementById('quotes').innerHTML="“Take my hand, take my whole life too. For I can’t help falling in love with you.” ";
  document.getElementById('head').innerHTML=" “Name..” ";
  document.getElementById('main').style.backgroundImage="url('image5.jpeg')";
  document.getElementById('1').style.display="flex";
  document.getElementById('2').style.display="flex";
  document.getElementById('3').style.display="flex";
}
    window.onload = function() {
        var container = document.getElementById("myContainer");
        container.style.display = "block";
      } 
      
     //Copied Content goes here
      // Create a new button element
      const closeButton = document.createElement("button");
      closeButton.innerHTML = "Close";
      closeButton.style.position = "absolute";
      closeButton.style.top = "0";
      closeButton.style.right = "0";
      closeButton.style.padding = "5px";
      
      // Add a click event listener to the button
      closeButton.addEventListener("click", () => {
        // Close the container when the button is clicked
        myContainer.style.display = "none";
      });
      
      // Get a reference to the container
      const myContainer = document.getElementById("myContainer");
      
      // Append the button to the container
      myContainer.appendChild(closeButton);
      
  