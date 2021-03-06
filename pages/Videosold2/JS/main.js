var arrayValue;

function user() {
    fetch('https://randomuser.me/api/?results=5').then(response => {
        return response.json();
    }).then(data => {
        arrayValue = data.results;
        content();
    }).catch(err => {});
}

function create(s, n) {
    console.log(arrayValue[n].name.first);
    let e1 = document.createElement('div');
    e1.id = "e1";
    e1.classList.add('col-sm-12');
    e1.classList.add('col-md-6');
    e1.classList.add('col-lg-4');
    e1.style.padding = "10px";
    let e2 = document.createElement('div');
    e2.classList.add('container');
    let e3 = document.createElement('div');
    e3.classList.add('post');
    e3.classList.add('pv');
    let e4 = document.createElement('div');
    e4.classList.add('post-owner');
    e4.classList.add('row');
    let e5 = document.createElement('div');
    e5.classList.add('reactions');
    e5.classList.add('row');


    let e41 = document.createElement('div');
    e41.style.backgroundImage = ('url(' + arrayValue[n].picture.thumbnail + ')');
    e41.classList.add('post-owner-img');
    e41.classList.add('col-2');



    let e42 = document.createElement('div');
    e42.classList.add('post-owner-info');
    e42.classList.add('col-9');
    e42.classList.add('col-md-10');

    let h4 = document.createElement('h4');
    h4.innerHTML = (arrayValue[n].name.first + ' ' + arrayValue[n].name.last);
    let p = document.createElement('p');
    p.innerHTML = "24/12/2019 11:47 PM";

    e42.appendChild(h4);
    e42.appendChild(p);
    let h5 = document.createElement('h5');
    h5.innerHTML = "Barcelona VS Real Madrid";

    let e43 = document.createElement('div');
    e43.classList.add('wrapper');
    e43.classList.add('row');

    e43.innerHTML += s;

    e4.appendChild(e41);
    e4.appendChild(e42);
    e4.appendChild(h5);
    e4.appendChild(e43);

    let hr = document.createElement('hr');

    let r = document.createElement('div');
    r.classList.add('reactions');
    r.classList.add('row');

    let r1 = document.createElement('div');
    r1.classList.add('like-button');
    r1.classList.add('col');
    r1.id = "post1";
    r1.onclick = "like(/'post1/')";
    let i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-thumbs-up');
    let sp = document.createElement('span');
    sp.innerHTML = "Like";
    r1.appendChild(i);
    r1.appendChild(sp);

    let r2 = document.createElement('div');
    r2.classList.add('comment-button');
    r2.classList.add('col');
    r1.id = "post1";
    r1.onclick = "comment(/'post1/')";
    i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-comment-alt');
    sp = document.createElement('span');
    sp.innerHTML = "comment";
    r2.appendChild(i);
    r2.appendChild(sp);

    let r3 = document.createElement('div');
    r3.classList.add('share-button');
    r3.classList.add('col');
    r1.id = "post1";
    r1.onclick = "share(/'post1/')";
    i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-share');
    sp = document.createElement('span');
    sp.innerHTML = "share";
    r3.appendChild(i);
    r3.appendChild(sp);

    r.appendChild(r1);
    r.appendChild(r2);
    r.appendChild(r3);

    e3.appendChild(e4);
    e3.appendChild(document.createElement('hr'));
    e3.appendChild(r);
    e2.appendChild(e3);
    e1.appendChild(e2);
    document.getElementById("cont").appendChild(e1);
}

function onSuccess(response) {
    response.text().then(printText);
    // response.json().then(printText);
}

function onFail(error) {
    console.log('Error: ' + error);
}

function printText(text) {
    let linksArray = text.split('\n');
    for (i = 0; i < linksArray.length; i++) {
        create(linksArray[i], i)
    }
}

function content() {

    fetch('http://127.0.0.1:5500/pages/Videos/JS/links.txt')
        .then(onSuccess)
        .catch(onFail);

}

/*
function search()
{
    let team1 = document.getElementById("team1").value;
    let team2 = document.getElementById("team2").value;
    if(team1.length>0 && team2.length>0)
        {
            document.getElementById('cont').removeChild(e1);
            for(i=0;i<linksArray.length;i++)
            {
                create(linksArray[i])
            }
        }
        
}

*/