async function getUser() {
    try {
        const userName = document.querySelector('.search-input').value;
        console.log(userName);
        const Url = `https://api.github.com/users/${userName}`
        // const Url = `https://api.github.com/users/shkkafeel`
        const result = await fetch(Url);
        const jsonData = await result.json();
        showData(jsonData);
    } catch (err) {
        console.error('Error:', err);
    }

}

// getUser()


function showData(data) {
    // console.log(data);
    const users = document.querySelector('.show-users');
    const profile = document.querySelector('.profile');
    const bio =document.querySelector('.bio');
    const repo_count = document.querySelector('.repo-count');
    const following = document.querySelector('.following');
    const followers = document.querySelector('.followers');
    const name = document.querySelector('.name');

    profile.src = data.avatar_url;
    profile.classList.add('block');
    profile.classList.remove('hidden');
    bio.innerHTML = data.bio;
    repo_count.innerHTML = `No of public repository <strong>${data.public_repos}</strong>`;
    following.innerHTML = `Following <strong>${data.following}</strong>`;
    followers.innerHTML = `Followers <strong>${data.followers}</strong>`;
    name.innerHTML = `<strong>${data.name}</strong>`;
    

    

}

