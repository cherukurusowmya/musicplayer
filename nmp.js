let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next") 
console.log(song_play)
let songs_list = [
    {
        name : 'Shape of You',
        Image : 'souimage.jpg',
        Song : 'song.mp3',
        Singer : 'Ed Sheeran'
    },
    {
        name : 'Butta Bomma',
        Image : 'bbimage.jpg',
        Song : 'bbsong.mp3',
        Singer : 'Armaan Malik'
    },
    {
        name : 'Saranga Dariya',
        Image : 'sdimage.webp',
        Song : 'sdsong.mp3',
        Singer : 'Mangli'
    },
    {
        name : 'Naatu Naatu',
        Image : 'rrrimage.webp',
        Song : 'rrrsong.mp3',
        Singer : 'Rahul Sipligunj'
    }
]
let i=0;
let flag=false;
var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer
song_play.addEventListener("click", function(){ 
    if(flag ==false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    else{
        audio.pause()
        flag=false;
        console.log(flag)
    }
})
song_next.addEventListener("click", function(){  
    audio.pause()
    flag = false;
    i = i+1;
    if(i>=songs_list.length){
       
        i=0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ==false){
        audio.play()
        flag=true;
        console.log(flag)
    } 
})
song_prev.addEventListener("click", function(){
   
    audio.pause()
    flag = false;
    i = i-1;
    if(i<=0){
        i=songs_list.length-1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ==false){
        audio.play()
        flag=true;
        console.log(flag)
    }  
})