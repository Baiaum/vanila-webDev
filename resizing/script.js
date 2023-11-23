let oldX = 0;
let oldY = 0;



window.addEventListener('load', () => {
    let el = document.getElementById("rz");
    el.style.width = "200px";
    el.style.height = "200px";
    el.style.top = "0px";
    el.style.left = "0px";

        el.addEventListener('mousedown', () => {
        console.log("MOUSE DOWN");
        el.setAttribute('clicked', 'true');
        })

        el.addEventListener('mouseup', () => {
            console.log("MOUSE UP");
            el.setAttribute('clicked', 'false');

            el.removeEventListener('mousedown', () => {})
            el.removeEventListener('mouseup', () => {})
        })







        window.addEventListener('mousemove', (e) => {
            getMouseDirection(e);
            getHoveringSide('rz', e);

            if(el && el.getAttribute('clicked') == 'true'){          
                el.style.left = (e.clientX - el.clientWidth*0.5).toString()+'px';
                el.style.top  = (e.clientY - el.clientHeight*0.5).toString()+'px';
            }
        })

})






function getMouseDirection(e){
    if(e.clientX > oldX){
        //console.log('MOVING RIGHT');
        oldX = e.clientX;
        oldY = e.clientY;
        return 'RIGHT';
    }
    if(e.clientX < oldX){
        //console.log('MOVING LEFT');
        oldX = e.clientX;
        oldY = e.clientY;
        return 'LEFT';
    }
    if(e.clientY > oldY){
        //console.log('MOVING DOWN');
        oldX = e.clientX;
        oldY = e.clientY;
        return 'DOWN';
    }
    if(e.clientY < oldY){
        //console.log('MOVING UP');
        oldX = e.clientX;
        oldY = e.clientY;
        return 'UP';
    }
}

function handleClick(id){

}

function rzRight(id, e){
    let el = document.getElementById(id);

}


function getHoveringSide(id, e){
    let el = document.getElementById(id)
    let pxOffSet = 10;
    let elWidth = parseFloat(el.style.width);
    let elLeft = parseFloat(el.style.left);
    let elTop = parseFloat(el.style.top);
    let elHeight = parseFloat(el.style.height);

    if(e.clientX > (elLeft + elWidth) - pxOffSet){
        console.log("Hovering on RIGHT");
        return 'RIGHT';
    }
    if(e.clientX < elLeft + pxOffSet){
        console.log("Hovering on LEFT");
        return 'LEFT';
    }
    if(e.clientY > (elTop + elHeight) - pxOffSet){
        console.log("Hovering on DOWN");
        return 'DOWN';
    }
    if(e.clientY < elTop + pxOffSet){
        console.log("Hovering on UP");
        return 'UP';
    }
}