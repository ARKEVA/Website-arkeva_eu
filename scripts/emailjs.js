emailjs.init({
    publicKey: 'pNsF8-AvX49bK-8Nk',
});

window.onload = function () {
    // CONTACT FORM
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_o00scaq', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
                DisplayOverlaySuccess('contact')
            }, (error) => {
                console.log('FAILED...', error);
            });
    });

    // MEETING FORM
    document.getElementById('meeting-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_o00scaq', 'meeting_form', this)
            .then(() => {
                console.log('SUCCESS!');
                DisplayOverlaySuccess('meeting')
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}



function DisplayOverlaySuccess() {
    var contact_meeting_overlay = `
    <!-- Overlay container -->
    <div id="overlay" class="overlay">
        <div class="overlay-content">
            <h2 id="overlay-message">Message Sent Successfully!</h2>
            <div class="overlay-buttons">
                <a href="./" class="btn">Go to Home</a>
                <a href="./contact" class="btn">Send Another Message</a>
            </div>
            <button id="close-overlay" class="close-btn" onclick="$(this).closest('#overlay').remove()">X</button>
            <div class="social_medias">
                <p>Follow us</p>
                <a href="https://www.linkedin.com/company/ark%C3%A9va" target="_blank"><img class="social_icon" src="./media/icon/linkedin.png" alt="Linkedin"></a>
            </div>
        </div>
    </div>
    `
    return $('body').prepend(contact_meeting_overlay)

}