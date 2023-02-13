document.getElementById("demo").style.color = "red";

        function helloWorld(){
            alert('Hello World!');
            document.getElementById('helloWorldButton').style.backgroundColor = 'black';
            document.getElementById('helloWorldButton').style.color = 'white';
            document.getElementById('helloWorldButton').style.fontSize = '200%';
        }

        function changeParagraph() {
            document.getElementById("demo").innerHTML = 'New <strong>paragraph</strong> text'
        }
