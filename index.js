function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    var overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
  }
  
  // Function to close popup
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    var overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
  }
  
  // Function to close all popups
  function closeAllPopups() {
    var popups = document.querySelectorAll('.popup');
    var overlay = document.getElementById('overlay');
    popups.forEach(function(popup) {
      popup.style.display = 'none';
    });
    overlay.style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bg-music');
    audio.volume = 0.3; // ตั้งระดับเสียงเป็นครึ่งหนึ่ง (50%)

    // เมื่อเพลงจบการเล่น ให้เริ่มเล่นใหม่
    audio.addEventListener('ended', function() {
      audio.currentTime = 0;
      audio.play();
    }, false);
  });