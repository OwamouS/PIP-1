window.onload = init;

        var $rVal = 0;

        function init(){
            var button1 = document.getElementById("r1");
            var button2 = document.getElementById("r2");
            var button3 = document.getElementById("r3");
            var button4 = document.getElementById("r4");
            var button5 = document.getElementById("r5");
            button1.onclick = handle1ButtonClick;
            button2.onclick = handle2ButtonClick;
            button3.onclick = handle3ButtonClick;
            button4.onclick = handle4ButtonClick;
            button5.onclick = handle5ButtonClick;
        }

        function handle1ButtonClick() {
            $rVal = 1;
        }
        function handle2ButtonClick() {
            $rVal = 1.5;
        }
        function handle3ButtonClick() {
            $rVal = 2;
        }
        function handle4ButtonClick() {
            $rVal = 2.5;
        }
        function handle5ButtonClick() {
            $rVal = 3;
        }
        function check(){
        document.getElementById("messagex").innerHTML = "<br>";
        document.getElementById("messagey").innerHTML = "<br>";
        document.getElementById("messager").innerHTML = "<br>";
        let choose = false;
        for(let i=1 ;i<=9; i++){
            if (document.getElementById("checkbox" + i).checked){
                choose = true;
                break;
            }
        }

        if (!choose){
            document.getElementById("messagex").innerHTML = "Выберите X"
        }
        let countY = document.forms['form'].elements['texty'].value.trim();
        if (countY === ""){
            document.getElementById("messagey").innerHTML = "Введите Y";
            choose = false;
        }else {
            if (!/^(-?\d+)([.,]\d+)?$/.test(countY)) {
                document.getElementById("messagey").innerHTML = "Некорректный ввод";
                choose = false
            } else if (countY <= -5 | countY >= 5) {
                document.getElementById("messagey").innerHTML = "Y вне диапазона";
                choose = false;
                console.log(choose);
            }
        }

        if($rVal === 0){
            document.getElementById("messager").innerHTML = "Выберите R";
            choose = false;
        }

        return choose;
    }
    $('.clear_button').on('click', function (event) {
        event.preventDefault();

        fetch('clear.php', {
            method: "POST",
        })
            .then(response => response.text())
            .then(result => {
                console.log(result);
                $("div.tbl").html(result);
            })
    });

    $('.send_button').on('click', function (event) {
    event.preventDefault();

    var checkbox;
    checkbox = document.getElementsByName("checkboxx"); // получаем массив чекбоксов
    if(check()){
    for(var j=0; j<checkbox.length; j++){// пробегаем весь массив
        if (checkbox[j].checked){
            const $xInput = checkbox[j].value;
            const $yInput = $('#texty');
            const $rInput = $rVal;

            
            const request = new FormData();
        
            request.append("Y", $yInput.val().replace(',', '.'));
            request.append("R", $rInput);
            request.append("X", $xInput);

            fetch('post1.php', {
                method: "POST",
                body: request,
            })
                .then(response => response.text())
                .then(result => {
                     console.log(result);
                    $("div.tbl").html(result);
                })
        
        }
    }
}
});