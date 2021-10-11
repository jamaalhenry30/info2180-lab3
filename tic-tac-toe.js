  
window.onload=function(){
    let box = document.getElementById('board');
    let squares = box.getElementsByTagName('div');

    for (var i = 0; i < squares.length; i++) {
        squares[i].className = "square";
        squares[i].addEventListener("mouseover",addhover);
        squares[i].addEventListener("mouseout",removehover);
        squares[i].id= ""+i;
        squares[i].addEventListener("click", main ,{ once: true});

    }


    function addhover(a){
        a.target.classList.add("hover");
    }

    function removehover(a){
        a.target.classList.remove("hover");
    }
    let winningsSets = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6'] ];
    
    let myturn = 'X';
    let plays = [];
    let Xplay = [];
    let Oplay = [];

    function iswinner(a){
        for(i=0;i<winningsSets.length;i++){
            var k = 0;
            for(z = 0; z<winningsSets[i].length;z++){
                if(a.includes(winningsSets[i][z])){
                    k+=1;
                    if(k==3){
                        return true;
                    }
                }
            }
        }
    }

    let statusdiv = document.getElementById('status');

    function main(a){
        if(myturn=='X'){
            a.target.textContent = 'X';
            a.target.classList.add('X');
            myturn = 'O';
            Xplay.push(a.target.id);
            if(iswinner(Xplay)){
                statusdiv.textContent = 'Congratulations!  X  is  the  Winner!';
                statusdiv.className='you-won';
                for(i=0; i<squares.length; i++){
                    squares[i].removeEventListener('click', main, { once: true});
                }
            }

        }else{
            a.target.textContent = 'O';
            a.target.classList.add('O');
            myturn = 'X';
            Oplay.push(a.target.id);
            if(iswinner(Oplay)){
                statusdiv.textContent = 'Congratulations!  O  is  the  Winner!';
                statusdiv.className='you-won';
                for(i=0; i<squares.length; i++){
                    squares[i].removeEventListener('click', main, { once: true});
                }
            }
        }

    }
    

}