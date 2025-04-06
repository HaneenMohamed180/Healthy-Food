const resultEl = document.getElementById('result');
    const foodPreview = document.getElementById('food-preview');
    const imageUpload = document.getElementById('imageUpload');

    // Preview image when uploaded
    imageUpload.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                foodPreview.src = e.target.result;
                foodPreview.style.display = 'block';
            };
        reader.readAsDataURL(file);
        }
    });

    // Simulated AI scan
    function analyzeFood() {
        const responses = [
            { status: '✅ This food looks healthy!', color: 'green' },
            { status: '⚠️ This food might not be healthy.', color: 'orange' },
            { status: '❌ This food is unhealthy.', color: 'red' }
        ];

      // Randomly select a response (simulate AI decision)
        const result = responses[Math.floor(Math.random() * responses.length)];

            resultEl.innerText = result.status;
            resultEl.style.color = result.color;
    }