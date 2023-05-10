function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value) / 100;
    var weight = parseFloat(document.getElementById("weight").value);
  
    if (isNaN(height) || isNaN(weight)) {
      document.getElementById("result").innerHTML = "올바른 키, 몸무게 숫자를 입력하세요.";
    } else {
      var bmi = weight / (height * height);
      var category;
  
      if (bmi < 18.5) {
        var normalWeight = 18.5 * height * height;
        category = "저체중입니다. 정상 체중은 " + normalWeight.toFixed(2) + " kg 이상입니다." ;
      } else if (bmi < 23) {
        category = "정상 체중 입니다.";
      } else if (bmi < 25) {
        var normalWeight = 22.9 * height * height;
        category = "과체중(비만 전 단계)입니다. 정상체중은 " + normalWeight.toFixed(2) + " kg 이하 입니다.";
      } else if (bmi < 30) {
        var normalWeight = 22.9 * height * height;
        category = "1단계 비만 입니다. 정상체중은 " + normalWeight.toFixed(2) + " kg 이하 입니다.";
      } else if (bmi < 35) {
        var normalWeight = 22.9 * height * height;
        category = "2단계 비만 입니다. 정상체중은 " + normalWeight.toFixed(2) + " kg 이하 입니다.";
      } else {
        var normalWeight = 22.9 * height * height;
        category = "3단계 비만(고도비만) 입니다. 정상 체중은 " + normalWeight.toFixed(2) + " kg 이하 입니다.";
      }
  
      document.getElementById("result").innerHTML = "당신의 BMI는 " + bmi.toFixed(2) + " 입니다. " + category;
    }
  }
  