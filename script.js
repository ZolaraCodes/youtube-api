console.log("Whats Crackin")
fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCPk29gUc_ltOGQ6f3Lh5kCg&maxResults=25&key=AIzaSyDpq3m-JzBC_2IYVmjYR8lKlc2zptYvyyM")
.then((result)=>{
    return result.json()
}).then((data)=>{
console.log(data)
let videos = data.items
let videoContainer = document.querySelector(".youtube_container")
for(video of videos){
videoContainer.innerHTML += `

<img src="${video.snippet.thumbnails.high.url}">
`
}

})