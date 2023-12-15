// JavaScript para controlar la apertura y cierre de los popups
document.getElementById('openAboutMe').addEventListener('click', function() {
    document.getElementById('aboutMePopup').classList.remove('hidden');
  });
  document.getElementById('closeAboutMe').addEventListener('click', function() {
    document.getElementById('aboutMePopup').classList.add('hidden');
  });

  document.getElementById('openClasesParticulares').addEventListener('click', function() {
    document.getElementById('clasesParticularesPopup').classList.remove('hidden');
  });
  document.getElementById('closeClasesParticulares').addEventListener('click', function() {
    document.getElementById('clasesParticularesPopup').classList.add('hidden');
  });

  document.getElementById('openContacto').addEventListener('click', function() {
    document.getElementById('contactoPopup').classList.remove('hidden');
  });
  document.getElementById('closeContacto').addEventListener('click', function() {
    document.getElementById('contactoPopup').classList.add('hidden');
  });