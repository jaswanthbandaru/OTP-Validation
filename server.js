document.addEventListener('DOMContentLoaded', function () {
    const generateOtpButton = document.querySelector('.btn');

    if (generateOtpButton) {
        generateOtpButton.addEventListener('click', function (event) {
            event.preventDefault();
            const generatedOtp = generateOTP();
            alert('Generated OTP: ' + generatedOtp);
            localStorage.setItem('generatedOtp', generatedOtp);
            window.location.href = 'verify.html';
        });
    }

    const verifyOtpButton = document.querySelector('.btn_verify');

    if (verifyOtpButton) {
        verifyOtpButton.addEventListener('click', function (event) {
            event.preventDefault();
            const enteredOtp = document.querySelector('.box_verify').value;
            const storedOtp = localStorage.getItem('generatedOtp');
            const verificationResult = document.getElementById('verificationResult');

            if (enteredOtp === storedOtp) {
                verificationResult.innerHTML = '<p style="color: green;">OTP Verified!</p>';
            } else {
                verificationResult.innerHTML = '<p style="color: red;">Invalid OTP. Please try again.</p>';
            }
        });
    }

    function generateOTP() {
        return Math.floor(100000 + Math.random() * 900000);
    }
});
