
  let currentStep = 1;
  const totalSteps = 3;

  function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((s, i) => {
      s.classList.toggle('active', i + 1 === step);
    });

    document.getElementById('prevBtn').disabled = step === 1;
    const nextBtn = document.getElementById('nextBtn');
    if (step === totalSteps) {
      nextBtn.textContent = 'Enviar';
      nextBtn.onclick = submitForm;
      showConfirmation();
    } else {
      nextBtn.textContent = 'Próximo';
      nextBtn.onclick = () => changeStep(1);
    }
  }

  function changeStep(direction) {
    const form = document.getElementById('inscricaoForm');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    currentStep += direction;
    if (currentStep > totalSteps) currentStep = totalSteps;
    if (currentStep < 1) currentStep = 1;
    showStep(currentStep);
  }

  function showConfirmation() {
    const formData = new FormData(document.getElementById('inscricaoForm'));
    const confirmDiv = document.getElementById('confirmData');
    confirmDiv.innerHTML = '';

    for (let [key, value] of formData.entries()) {
      confirmDiv.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    }
  }

  function submitForm() {
    alert('Inscrição enviada com sucesso!');
    // Aqui você pode enviar os dados com fetch/ajax
  }

  showStep(currentStep);
