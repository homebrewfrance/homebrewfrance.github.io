        const cookieBox = document.getElementById('cookie-box');
        const acceptBtn = document.getElementById('accept-btn');

        const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

        if (!hasAcceptedCookies) {
            cookieBox.style.display = 'block';
        }

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');

            cookieBox.style.display = 'none';
        })
