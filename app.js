let list = document.querySelectorAll('.list');
let item__box = document.querySelectorAll('.item__box');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<item__box.length; k++){
            item__box[k].classList.remove('active');
            item__box[k].classList.add('hide');

            if(item__box[k].getAttribute('data-item') == dataFilter || 
            dataFilter == "all"){
                item__box[k].classList.remove('hide');
                item__box[k].classList.add('active');
            }
        }
    })
}


if(window.innerHeight > window.innerWidth){     
    document.getElementsByTagName("body")[0].style.transform = "rotate(90deg)"; 
}


