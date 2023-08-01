        const cookieBox = document.getElementById('cookie-box');
        const acceptBtn = document.getElementById('accept-btn');
        const declineBtn = document.getElementById('decline-btn');

        const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
        const hasDeclinedCookies = localStorage.getItem('cookiesDeclined');

        if (!hasAcceptedCookies && !hasDeclinedCookies) {
            cookieBox.style.display = 'block';
        }

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
                
            cookieBox.style.display = 'none';
        });

        declineBtn.addEventListener('click', () => {

            localStorage.setItem('cookiesDeclined', 'true');

            cookieBox.style.display = 'none';
        });
