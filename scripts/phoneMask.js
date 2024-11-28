//  <script src="https://cdn.jsdelivr.net/npm/inputmask/dist/inputmask.min.js"></script>
document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone');
    Inputmask({
        mask: "+7 (999) 999 99-99",
        showMaskOnHover: false
    }).mask(phoneInput);

    const registerModal = document.getElementById('registerModal');
    if (registerModal != undefined) {
        registerModal.addEventListener('shown.bs.modal', function () {
            const phoneInput = document.getElementById('phone');
            Inputmask({
                mask: "+7 (999) 999 99-99",
                showMaskOnHover: false
            }).mask(phoneInput);

            const registerForm = document.getElementById('registerForm');
            registerForm.addEventListener('submit', function (event) {
                const phoneValue = phoneInput.value;

                const phonePattern = /^\+7 \(\d{3}\) \d{3} \d{2}-\d{2}$/;
                if (!phonePattern.test(phoneValue)) {
                    event.preventDefault();
                    phoneInput.classList.add('is-invalid');
                } else {
                    phoneInput.classList.remove('is-invalid');
                }
            });
        });
    }

    const userDataModal = document.getElementById('editUserModal');
    if (userDataModal != undefined) {
        userDataModal.addEventListener('shown.bs.modal', function () {
            const phoneInput = document.getElementById('phone');
            Inputmask({
                mask: "+7 (999) 999 99-99",
                showMaskOnHover: false
            }).mask(phoneInput);

            const userDataForm = document.getElementById('userDataForm');
            userDataForm.addEventListener('submit', function (event) {
                const phoneValue = phoneInput.value;

                const phonePattern = /^\+7 \(\d{3}\) \d{3} \d{2}-\d{2}$/;
                if (!phonePattern.test(phoneValue)) {
                    event.preventDefault();
                    phoneInput.classList.add('is-invalid');
                } else {
                    phoneInput.classList.remove('is-invalid');
                }

                console.log('asd');
            });
        });
    }
});

const adForm = document.getElementById('adForm');

if (adForm != undefined) {
    adForm.addEventListener('submit', function (event) {
        const phoneInput = document.getElementById('phone');
        const phoneValue = phoneInput.value;

        const phonePattern = /^\+7 \(\d{3}\) \d{3} \d{2}-\d{2}$/;
        if (!phonePattern.test(phoneValue)) {
            event.preventDefault();
            phoneInput.classList.add('is-invalid');
        } else {
            phoneInput.classList.remove('is-invalid');
        }
    });
}