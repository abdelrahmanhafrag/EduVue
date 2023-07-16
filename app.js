particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#222869"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.6
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#77777A",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
});


document.getElementById("submit-btn").addEventListener("click", function(event){
  event.preventDefault()

  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let institution = document.getElementById("institution").value

  if(name === "" || email === "" || institution === ""){
      alert("All fields must be filled out")
  } else {
      submitForm(name, email, institution)  

      document.getElementById("email-display").textContent = email;
      document.getElementById("success-message").classList.remove("hidden");
  }
});



