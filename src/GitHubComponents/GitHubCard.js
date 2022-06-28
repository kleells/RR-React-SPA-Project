import React, { useEffect, useState } from 'react'
import '../App.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function GitHubCard() {
  const [gitHubName, setGitHubName] = useState('')     
  const [gitHubURL, setGitHubURL] = useState('') 
  const [gitHubImageURL, setGitHubImageURL] = useState('')
  const [gitHubBio, setGitHubBio] = useState('');
                      


useEffect(() => {
    fetch('https://api.github.com/users/kleells')
    .then(res => res.json())
    .then(data => {
        setGitHubName(data.name)
        setGitHubURL(data.html_url)
        setGitHubImageURL(data.avatar_url)
        setGitHubBio(data.bio)
    })
}, [])

return (
    <div className='card' style={{border: 'none'}}>
        <Card style={{width: "auto", margin: 'auto'}}>
            <Card.Img variant="top" src={gitHubImageURL} alt='Github profile image' width='200px' height='200px'></Card.Img>
            <Card.Body>
                <Card.Title>{gitHubName}</Card.Title>
                <Card.Text>{gitHubBio}</Card.Text>
                <Card.Text><a href={gitHubURL}><Button>Link to GitHub</Button></a></Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
}

export default GitHubCard