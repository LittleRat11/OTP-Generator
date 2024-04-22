let generateOTP = () => {
    // *the length of the OTP
    const otpLength = 6;
    // *generate a random numeric OTP with 6 digits
    const otp = Math.floor(100000 + Math.random() * 900000);
    // *display otp code
    document.querySelector("#otpDisplay").innerText = `${otp}`;
}

document.querySelector("#generateBtn").addEventListener("click", generateOTP);
document.body.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generateOTP();
    }
})