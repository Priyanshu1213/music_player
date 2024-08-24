


let songs = [
    { songName: "Most Played: Hindi", category: "All", coverPath: "covers/1.jpg" },
    { songName: "Most Played: International", category: "All", coverPath: "covers/6.jpg" },
    { songName: "Most Played: Bhojpuri", category: "All", coverPath: "covers/7.jpg" },
    { songName: "Most Played: Panjabi", category: "All", coverPath: "covers/4.jpg" },
    { songName: "Most Played: India", category: "All", coverPath: "covers/5.jpg" },

    { songName: "Best of Arjit Singh", category: "Playlist", coverPath: "covers/9.jpg" },
    { songName: "Desi Vibes", category: "Playlist", coverPath: "covers/18.jpg" },
    { songName: "Workout", category: "Playlist", coverPath: "covers/19.jpg" },
    { songName: "Party", category: "Playlist", coverPath: "covers/20.jpg" },
    { songName: "Travel", category: "Playlist", coverPath: "covers/21.jpg" },

    { songName: "Arjit Singh", category: "Artists", coverPath: "covers/8.jpg" },
    { songName: "kk", category: "Artists", coverPath: "covers/10.jpg" },
    { songName: "Honey Singh", category: "Artists", coverPath: "covers/4.jpg" },
    { songName: "Shreya Ghoshal", category: "Artists", coverPath: "covers/11.jpg" },
    { songName: "Sonu Nigam", category: "Artists", coverPath: "covers/12.jpg" },

    { songName: "Aashiqui2", category: "Albums", coverPath: "covers/13.jpg" },
    { songName: "Kabir Singh", category: "Albums", coverPath: "covers/14.jpg" },
    { songName: "Ae Dil Hai Mushkil", category: "Albums", coverPath: "covers/15.jpg" },
    { songName: "Jawan", category: "Albums", coverPath: "covers/16.jpg" },
    { songName: "KGF", category: "Albums", coverPath: "covers/17.jpg" },
];



//////////////////////////////////////////////////////////////


function appendSongsToList(category, containerId) {
    const container = document.getElementById(containerId);
    
    songs.filter(song => song.category.toLowerCase() === category.toLowerCase())
        .forEach(item => {
            const div = document.createElement("div");
            div.classList.add('songtype');
            div.innerHTML = `
                <a href="index.html">
                    <img src="${item.coverPath}" alt="cover">
                    <span class="songName">${item.songName}</span>
                </a>
            `;
            container.appendChild(div);
            
        });
}

// Append songs to their respective containers
appendSongsToList("All", "trendingSongs");
appendSongsToList("Playlist", "playlists");
appendSongsToList("Artists", "artists");
appendSongsToList("Albums", "albums");


/////////////////////////////////////////////////////


let searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', function () {
    let searchText = searchBox.value.toLowerCase();
    let filteredSongs = songs.filter(song => song.songName.toLowerCase().includes(searchText));
    
    let songtypeElements = Array.from(document.getElementsByClassName('songtype'));
    songtypeElements.forEach(item => item.style.display = 'none');
    
    filteredSongs.forEach(song => {
        let index = songs.indexOf(song);
        songtypeElements[index].style.display = '';
    });
    document.getElementById("demo").innerText = filteredSongs.length === 0 ? "No Data Found!" : "";
});



//////////////////////////////////////////////////////////////

