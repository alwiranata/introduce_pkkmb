const nextButton = document.getElementById('nextButton');
const displaySection = document.getElementById('displaySection');
const displayName = document.getElementById('displayName');
const displaySchool = document.getElementById('displaySchool');
const displayHobby = document.getElementById('displayHobby');
const displayReasonUni = document.getElementById('displayReasonUni');
const displayMajor = document.getElementById('displayMajor');
const displayReason = document.getElementById('displayReason');
const displayPhoto = document.getElementById('displayPhoto');
const formContainer = document.getElementById('formContainer');

let currentStep = 0;

const steps = [
  { inputId: 'nameInput', fieldId: 'name' },
  { inputId: 'schoolInput', fieldId: 'school' },
  { inputId: 'majorInput', fieldId: 'major' },
  { inputId: 'hobbyInput', fieldId: 'hobby' },
  { inputId: 'reasonInput', fieldId: 'reason' },
  { inputId: 'reasonUniInput', fieldId: 'reasonUni' },
  { inputId: 'photoInput', fieldId: 'photo' },
];

nextButton.addEventListener('click', function() {
  if (currentStep < steps.length) {
    const currentInput = steps[currentStep];
    
    const value = document.getElementById(currentInput.fieldId).value;
    
    if (currentStep === steps.length - 1) {
      if (value) {
        const file = document.getElementById(currentInput.fieldId).files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            displayPhoto.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      }
    } else {
      if (!value) {
        alert("Silakan masukkan nilai.");
        return;
      }
    }

    if (currentStep === 0) {
      displayName.textContent = document.getElementById(currentInput.fieldId).value;
    } else if (currentStep === 1) {
      displaySchool.textContent = document.getElementById(currentInput.fieldId).value;
    } else if (currentStep === 2) {
      displayMajor.textContent = document.getElementById(currentInput.fieldId).value;
    } else if (currentStep === 3) {
      displayHobby.textContent = document.getElementById(currentInput.fieldId).value;
    } else if (currentStep === 4) {
      displayReason.textContent = document.getElementById(currentInput.fieldId).value;
    } else if (currentStep === 5) {
      displayReasonUni.textContent = document.getElementById(currentInput.fieldId).value;
    }

    document.getElementById(currentInput.inputId).classList.add("hidden");
    currentStep++;

    if (currentStep < steps.length) {
      const nextInput = steps[currentStep];
      document.getElementById(nextInput.inputId).classList.remove("hidden");
    } else {
      formContainer.classList.add("hidden");
      displaySection.classList.remove("hidden");
    }
  }
});

function restartForm() {
  displaySection.classList.add("hidden");
  formContainer.classList.remove("hidden");
  currentStep = 0;

  steps.forEach(step => {
    document.getElementById(step.inputId).classList.add("hidden");
  });
  document.getElementById(steps[0].inputId).classList.remove("hidden");

  // Reset display fields
  displayName.textContent = '';
  displaySchool.textContent = '';
  displayMajor.textContent = '';
  displayHobby.textContent = '';
  displayReason.textContent = '';
  displayReasonUni.textContent = '';
  displayPhoto.src = '';
}