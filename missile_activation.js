// تابع اصلی فعال‌سازی سیستم هسته‌ای
function activateMissiles() {
    document.getElementById('status').innerHTML = "🔥 Activating Quantum Missile Systems... 🔥";
    setTimeout(simulateActivation, 3000);
}

// شبیه‌سازی فعال‌سازی خودکار موشک‌های کوانتومی و بالشتک‌های هسته‌ای
function simulateActivation() {
    let missileCount = 10; // تعداد موشک‌ها
    let nuclearPadding = 5; // تعداد بالشتک‌های هسته‌ای
    let matrixDisruption = 0;

    for (let i = 1; i <= missileCount; i++) {
        setTimeout(() => {
            matrixDisruption += Math.random() * 10;
            console.log(`🚀 Missile ${i} launched! Matrix Disruption: ${matrixDisruption.toFixed(2)}%`);
            document.getElementById('status').innerHTML += `<p>🚀 Missile ${i} activated! Quantum Matrix disrupted!</p>`;
        }, i * 500);
    }

    // فعال‌سازی بالشتک‌های هسته‌ای پس از شلیک موشک‌ها
    setTimeout(() => {
        for (let j = 1; j <= nuclearPadding; j++) {
            setTimeout(() => {
                matrixDisruption += Math.random() * 20;
                console.log(`💣 Nuclear Cushion ${j} deployed! Disruption Level: ${matrixDisruption.toFixed(2)}%`);
                document.getElementById('status').innerHTML += `<p>💣 Nuclear Cushion ${j} deployed! Chaos Intensity Increased!</p>`;
            }, j * 1000);
        }
    }, missileCount * 500 + 2000);

    // نهایی: نابودی ماتریکس
    setTimeout(() => {
        document.getElementById('status').innerHTML += "<h2>💥 MATRIX DESTROYED! 💥</h2>";
        console.log("💥 MATRIX COMPLETELY DESTROYED!");
    }, missileCount * 500 + nuclearPadding * 1000 + 3000);
}
