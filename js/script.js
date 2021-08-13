let header = document.getElementById("header");

// select button
let allButton = document.getElementsByTagName('button');

// make red function
function beRed(){
    header.style.backgroundColor = 'red'
    for(let button of allButton){
        if(button.innerText == 'RED'){
            button.style.backgroundColor = 'red';
        }else{
            button.style.backgroundColor = '#7B00FF'
        }
    }
}

// make yellow function
let yellowBtn = document.getElementById("yellow-btn");

yellowBtn.onclick = beYellow;

function beYellow(){
    header.style.backgroundColor = '#EBCE38'
    for(let button of allButton){
        if(button.innerText == 'YELLOW'){
            button.style.backgroundColor = '#EBCE38';
        }else{
            button.style.backgroundColor = '#7B00FF'
        }
    }
}

// make green function
let greenBtn = document.getElementById("green-btn");

greenBtn.onclick = function(){
    header.style.backgroundColor = '#72BF44'
    for(let button of allButton){
        if(button.innerText == 'GREEN'){
            button.style.backgroundColor = '#72BF44';
        }else{
            button.style.backgroundColor = '#7B00FF'
        }
    }
}

// make pink function
let pinkBtn = document.getElementById("pink-btn");

pinkBtn.addEventListener('click', bePink);

function bePink(){
    header.style.backgroundColor = '#FF6FF6'
    for(let button of allButton){
        if(button.innerText == 'PINK'){
            button.style.backgroundColor = '#FF6FF6';
        }else{
            button.style.backgroundColor = '#7B00FF'
        }
    }
}

// make orenge function
let orangeBtn = document.getElementById("orange-btn");

orangeBtn.addEventListener('click', function(){
    header.style.backgroundColor = '#F96815'
    for(let button of allButton){
        if(button.innerText == 'ORANGE'){
            button.style.backgroundColor = '#F96815';
        }else{
            button.style.backgroundColor = '#7B00FF'
        }
    }
})

// make blue function
document.getElementById("blue-btn").addEventListener('click', function(){
    header.style.backgroundColor = '#008997'
    for(let button of allButton){
        if(button.innerText == 'BLUE'){
            button.style.backgroundColor = '#008997';
        }else{
            button.style.backgroundColor = '#7B00FF'
        }
    }
})

// make cream function
document.getElementById("cream-btn").addEventListener('click', function(){
    header.style.backgroundColor = '#F4C3C4'
    for(let button of allButton){
        if(button.innerText == 'CREAM'){
            button.style.backgroundColor = '#F4C3C4';
        }else{
            button.style.backgroundColor = '#7B00FF'
        }
    }
})


// comment section 

document.getElementById("submit-comment").addEventListener('click',function(){
    const commentBox = document.getElementById('comment-box');
    const userComment = commentBox.value;
    const newComment = document.createElement('p');
    newComment.innerText = userComment;
    const commentContainer = document.getElementById('All-comments');
    commentContainer.appendChild(newComment);
    commentBox.value = '';
})

// delate section

document.getElementById("delate-btn").addEventListener('click', function(){
    document.getElementById("delate-text").style.display = 'none';
})

document.getElementById("delate-conferm").addEventListener('focus', function(){
    document.getElementById("delate-conferm").style.border = '1px solid red';
    document.getElementById("delate-conferm").style.boxShadow = '0px 0px 6px 0px red';
})

document.getElementById("delate-conferm").addEventListener('blur', function(){
    document.getElementById("delate-conferm").style.border = '1px solid #999';
    document.getElementById("delate-conferm").style.boxShadow = '0px 0px 0px 0px #fff';
})

document.getElementById("delate-conferm").addEventListener('keyup', function(event){
    if(event.target.value == 'delate'){
        document.getElementById("delate-btn").removeAttribute('disabled');
        // document.getElementById("delate-btn").style.background = '#7B00FF'
        // document.getElementById("delate-btn").style.color = '#fff'
        // document.getElementById("delate-btn").style.cursor = 'pointer'
        // document.getElementById("delate-btn").style.transform = 'translateY(-5px)'
    }
    else if(event.target.value != 'delate'){
        document.getElementById("delate-btn").setAttribute('disabled');
        // document.getElementById("delate-btn").style.background = '#b3afaf26'
        // document.getElementById("delate-btn").style.color = '#bbb'
        // document.getElementById("delate-btn").style.cursor = 'none'
        // document.getElementById("delate-btn").style.transform = 'translateY(0)'
    }
})

    // bobble event section

        // click on dada
        document.getElementById('dada').addEventListener('click', function(){
            const boardBox = document.getElementById('board-dada');
            const li = document.createElement('h2');
            li.innerText = 'You Click On Dada';
            boardBox.appendChild(li);
        })

        // click on dad
        document.getElementById('dad').addEventListener('click', function(){
            const boardBox = document.getElementById('board-dad');
            const li = document.createElement('h4');
            li.innerText = 'You Click On Dad';
            boardBox.appendChild(li);
        })

        // click on nati
        document.getElementById('Click-nati').addEventListener('click', function(){
            const boardBox = document.getElementById('board-ul');
            const li = document.createElement('li');
            li.innerText = 'You Click On Nati';
            boardBox.appendChild(li);
        })

        // clear the white board
        document.getElementById('clr').addEventListener('click',function(){
            let boardDada = document.getElementById('board-dada');
            boardDada.innerHTML= '';
            let boardDad = document.getElementById('board-dad');
            boardDad.innerHTML= '';
            let boardUl = document.getElementById('board-ul');
            boardUl.innerHTML= '';
        })

        // stop the propagation
        document.getElementById('bobble-stop').addEventListener('click',function(event){
            const boardBox = document.getElementById('board-ul');
            const li = document.createElement('li');
            li.innerText = 'You Stop The Propagation';
            boardBox.appendChild(li);
            event.stopPropagation();
        })



const blogItems = document.getElementsByClassName('blog-item');

// for(let item of blogItems){
//     item.addEventListener('click', function(){
//         item.innerText = '';
//         item.style.border = 'none';
//     })
// }

document.getElementById('add-item').addEventListener('click', function(){
    const newItem = document.createElement('p');
    newItem.innerText = 'New Item Added';
    newItem.classList.add('blog-item');
    const parentItem = document.getElementById('blog-item-section');
    parentItem.appendChild(newItem);
})

document.getElementById('blog-item-section').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})