function nameHome () {
    let nama = prompt("siapa nama kamu ?", "");
    document.getElementById("nameHome") .innerHTML = nama 
}
nameHome(); 

// jujur kak di bagian validasi ini aku ga ngrti jadi aku ngikutin yang ada di internet
function validateForm() {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const nameError = document.getElementById('nameError');
    const genderError = document.getElementById('genderError');
    const dobError = document.getElementById('dobError');
    let valid = true;

    nameError.textContent = '';
    genderError.textContent = '';
    dobError.textContent = '';

    if (name.trim() === '') {
        nameError.textContent = 'Nama harus diisi';
        valid = false;
    }

    if (gender === '') {
        genderError.textContent = 'Jenis kelamin harus dipilih';
        valid = false;
    }

    if (dob === '') {
        dobError.textContent = 'Tanggal lahir harus diisi';
        valid = false;
    }

    if (valid) {
        const result = `Nama: ${name}\nJenis Kelamin: ${gender === 'male' ? 'Laki-laki' : 'Perempuan'}\nTanggal Lahir: ${dob}`;
        document.getElementById('result').value = result;
    }
}