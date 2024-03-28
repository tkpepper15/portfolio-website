document.getElementById('condition-dropdown').addEventListener('change', function() {
    const selectedCondition = this.value;
    const conditionInfo = document.getElementById('condition-info');
  
    // Clear previous content
    conditionInfo.innerHTML = '';
  
    // Add new content based on the selected condition
    switch(selectedCondition) {
      case 'cranial-nerve-abnormalities':
        conditionInfo.innerHTML = `
          <h2>Cranial Nerve Abnormalities</h2>
          <p>Cranial nerve abnormalities affecting the eye muscles can result in strabismus, ptosis (drooping eyelid), or abnormal pupil responses, depending on the specific nerve affected. These abnormalities may also lead to difficulties in controlling eye movements and coordinating binocular vision.</p>
          <p>Most commonly, the abducens nerve, also referred to as cranial nerve six (CN VI) is impinged. It plays a role in controlling the eye's extraocular motor functions, alongside the oculomotor nerve (CN III) and the trochlear nerve (CN IV). Thus, its malfunction can result in hindered eye movement.</p>
          <img src="assets/6th-nerve-palsy.jpg" alt="6th-nerve-palsy">
        `;
        break;
  
      case 'double-vision':
        conditionInfo.innerHTML = `
          <h2>Double Vision</h2>
          <p>Double vision, also known as diplopia, can be caused by various factors such as muscle weakness, nerve damage, or eye misalignment. Treatment often involves addressing the underlying cause which could include diabetes, Graves' disease, etc.</p>
          <p>It can significantly impact daily activities such as reading, driving, or watching television. Also, binocular double vision affects both eyes whereas monocular double vision impacts both.</p>
          <img src="assets/double-vision.jpeg" alt="double-vision">
        `;
        break;
  
      // Add cases for other conditions here
  
      default:
        conditionInfo.innerHTML = '<p>Please select a condition.</p>';
    }
  });
  