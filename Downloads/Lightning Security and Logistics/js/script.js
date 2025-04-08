// script.js
    const services = {
        vault: {
            title: "Vault Service",
            description: "Our vault logistics services are tailored to ensure the secure storage and transportation of high-value assets with utmost confidentiality.",
            image: "assets/img/vault2.png"
        },
        logistics: {
            title: "Logistics",
            description: "We offer global logistics solutions ensuring timely, secure, and efficient delivery of your valuable assets through our extensive freight network.",
            image: "assets/img/logics.png"
        },
        banking: {
            title: "Banking",
            description: "Our banking security solutions include secure cash-in-transit services, ATM replenishment, and vault custody with professional care.",
            image: "assets/img/banking.png"
        }
    };

    document.querySelectorAll('.service-btn').forEach(button => {
        button.addEventListener('click', () => {
            const key = button.getAttribute('data-service');
            const detail = services[key];

            document.getElementById('service-details').innerHTML = `
                <div class="animate__animated animate__fadeIn text-start">
                    <h3 class="fw-bold text-warning">${detail.title}</h3>
                    <p class="mt-3 lead text-start">${detail.description}</p>
                    <img src="${detail.image}" alt="${detail.title}" class="img-fluid mt-3" style="max-height: 200px;">
                </div>
            `;
        });
    });
