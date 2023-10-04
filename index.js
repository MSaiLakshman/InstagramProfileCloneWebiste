var random=Math.floor(Math.random() * 12 + 1)

document.querySelector('.NoOfPosts').innerHTML=random

document.querySelector('.NoOfFollowers').innerHTML = Math.floor(Math.random() * 10000);

document.querySelector('.NoOfFollowing').innerHTML = Math.floor(Math.random() * 100);

fetch('https://randomuser.me/api/').then(response=>{
    response.json().then(data=>{
        let user = data.results[0];
        document.querySelector('.profileName').innerHTML= user.name.first;
        document.querySelector('.bioName').innerHTML = user.name.first + ' ' + user.name.last ;
        document.querySelector('.profilepic').src = user.picture.medium;

        for(let i=0;i<random;i++) {
            let img=document.createElement('img');
            img.src='https://picsum.photos/100' + i;

            document.querySelector('.posts').append(img);
        }
    })
})