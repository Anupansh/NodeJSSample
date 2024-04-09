console.log('Before')
getUser(1, (user) => {
    getRepo(user.githubUsername, (repos) => {
        console.log(`Repos found are ${repos}`)
    })
})
console.log('After')

function getUser(id, callback) {
    setTimeout( () => {
        console.log('Retreive user from database.')
        callback({ id : id, githubUsername : "ABC User"})
    }, 1000)
}

function getRepo(username, callback) {
    setTimeout( () => {
        callback(['repo1','repo2','repo3'])
    }, 1000)
}