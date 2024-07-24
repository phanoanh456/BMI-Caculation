document.getElementById('calculate').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Vui lòng nhập chiều cao và cân nặng hợp lệ (số dương).");
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    let status = '';
    if (bmi < 18.5) {
        status = 'Thiếu cân';
    } else if (bmi < 24.9) {
        status = 'Bình thường';
    } else if (bmi < 29.9) {
        status = 'Thừa cân';
    } else {
        status = 'Béo phì';
    }

    document.getElementById('result').innerText = `BMI của bạn là ${bmi} và bạn ${status}`;

    document.getElementById('getAdvice').style.display = 'block';

    document.getElementById('getAdvice').dataset.status = status;
    document.getElementById('getAdvice').dataset.bmi = bmi;
});

document.getElementById('getAdvice').addEventListener('click', function() {
    const status = this.dataset.status;
    const bmi = this.dataset.bmi;
    fetchAdvice(status, bmi);
});

function fetchAdvice(status, bmi) {
    const adviceData = {
        "Thiếu cân": "BMI của bạn cho thấy bạn thiếu cân. Hãy tham khảo ý kiến chuyên gia y tế để có lời khuyên phù hợp về chế độ ăn uống và sức khỏe.",
        "Bình thường": "BMI của bạn ở mức bình thường. Hãy duy trì chế độ ăn uống cân bằng và tập thể dục đều đặn.",
        "Thừa cân": "BMI của bạn cho thấy bạn thừa cân. Hãy cân nhắc chế độ ăn uống cân bằng và tập thể dục đều đặn. Tham khảo ý kiến chuyên gia y tế để có lời khuyên cá nhân hóa.",
        "Béo phì": "BMI của bạn cho thấy bạn béo phì. Quan trọng là tham khảo ý kiến chuyên gia y tế để có kế hoạch chăm sóc sức khỏe toàn diện."
    };

    const advice = adviceData[status];
    document.getElementById('advice').innerText = `Dựa trên BMI của bạn là ${bmi} và bạn ${status}. Lời khuyên: ${advice}`;
}
