function submitForm(name, email, institution) {
  
    fetch('https://script.google.com/macros/s/AKfycbxvMCbg4yWa_GjEubAJ5rDFE-eKpfonOtrL32-1wjIup4OvniGoYXHK40GC0z5lxbk2/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([name, email, institution])
    });
  }