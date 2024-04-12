const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('mouseover', () => {
    enlargePanel(panel);
  });
  
  panel.addEventListener('mouseout', () => {
    shrinkPanel(panel);
  });
});

function enlargePanel(panel) {
  removeActiveClasses();
  panel.classList.add('active');
}

function shrinkPanel(panel) {
  panel.classList.remove('active');
}

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
