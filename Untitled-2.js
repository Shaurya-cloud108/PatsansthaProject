app.post('/login', (req, res) => {
    // Perform login validation (e.g., check credentials)
    if (validCredentials) {
        res.redirect('/landing-page'); // Redirect after successful login
    } else {
        res.redirect('/login'); // Or show an error if credentials are invalid
    }
});
