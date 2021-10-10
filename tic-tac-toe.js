window.onload=function(){
        let box = document.getElementById('board');
        let squares = box.getElementsByTagName('div');
        let boardplay = [];

        for (var i = 0; i < squares.length; i++) {
            squares[i].className = "square";
            squares[i].id=""+i;
        }
        var k = 0;
        for(const box of squares){
            box.addEventListener("click",function(){
                console.log("square clicked");
                if (k%2==0){
                    box.innerHTML = "X";
                    box.classList.add("X");
                    boardplay.push(box.id);
                    console.log(boardplay)
                }
                else{
                    box.innerHTML = "O";
                    box.classList.add("O");
                    boardplay.push(box.id);
                    console.log(boardplay)

                }k++;

            },{once: true});
           
            }
}