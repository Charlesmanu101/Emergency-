// Google Maps: Show User Location
function initMap() {
  const defaultLocation = { lat: 9.9312, lng: 76.2673 }; // Kochi as default
  const map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 14,
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        new google.maps.Marker({ position: userLocation, map: map });
        map.setCenter(userLocation);
      },
      () => {
        alert("Geolocation failed. Showing default location.");
      }
    );
  }
}

// Emergency Button
document.getElementById("emergencyBtn").addEventListener("click", () => {
  // Get selected emergency type from dropdown
  const type = document.getElementById("emergencyType").value;

  // Check if user uploaded a file
  const fileInput = document.getElementById("mediaUpload");
  const file = fileInput.files[0];

  // Set the emergency message based on selected type
  let message = "";

  switch (type) {
    case "medical":
      message = " Medical emergency reported!";
      break;
    case "fire":
      message = " Fire emergency reported!";
      break;
    case "crime":
      message = " Crime reported!";
      break;
    case "disaster":
      message = " Natural disaster reported!";
      break;
    default:
      message = " Emergency reported!";
  }

  // If a file is uploaded, show its name
  if (file) {
    message += \nMedia uploaded: ${file.name};
  }

  // Display the message in the status section
  document.getElementById("status").innerText = message;

  // Also show an alert popup
  alert(message);
});
11:08 pm

  
});

// Chatbot
function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value;
  const chatbox = document.getElementById("chatbox");

  chatbox.innerHTML += <p><strong>You:</strong> ${msg}</p>;

  let response = "Please stay calm. Help is coming.";
  if (msg.toLowerCase().includes("bleeding")) {
    response = "Apply pressure to the wound and keep the person still.";
  } else if (msg.toLowerCase().includes("unconscious")) {
    response = "Check breathing and call for medical help immediately.";
  }

  setTimeout(() => {
    chatbox.innerHTML += <p><strong>Bot:</strong> ${response}</p>;
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 1000);

  input.value = "";
}
