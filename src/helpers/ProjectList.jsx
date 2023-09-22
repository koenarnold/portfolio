import FEC from '/images/FEC.png'
import FECGif from '/images/FECGif.gif'
import MVP from '/images/MVP.png'
import MVPGif from '/images/MVPgif.gif'
import BlueOcean from '/images/BlueOcean.png'
import BlueOceanGif from '/images/BlueOceangif.gif'

export const ProjectList = [
    {
        key: 1,
        name: 'Spy Another Day',
        image: BlueOcean,
        gif: BlueOceanGif,
        gitLink: 'https://github.com/Spy-Another-Day/Elder-Wand',
        skills: 'React, DaisyUI, Socket.io, Tailwind, MongoDB, Redis',
        notes: {
            objective:'A browser game based on the card game Codenames, in which players can log into an account, play together, & chat.',
            challenges:'Creating the chat component was a fun challenge, I had to figure out a way for all the users to be able to view each others messages, which I was able to do through the use of Socket.io.',
            learned:'Learned a lot about web sockets and got some experience with Socket.io. I was also able to add temporary storage of the chat logs using Redis.'
        }
    },
    {
        key: 2,
        name: 'Atelier Ecommerce Shop',
        image: FEC,
        gif: FECGif,
        gitLink: 'https://github.com/FEC-Wall-E/Atelier-Products-Webfront',
        skills: 'React, CSS, Axios, Mocha, Chai',
        notes: {
            objective:'An online clothing store using sample data.',
            challenges:'The main challenge I encountered during this project was creating the gallery, managing the main selected image and the carousels proved to be more difficult than I imagined. I eventually found success in using state to mark the selected image, and buttons would increment/decrement that state.',
            learned:'I learned a lot about CSS in this project since I was limited to just base CSS, it made me adapt and find creative solutions. This was also my first project using React, so I learned a wealth about state and the structure of React webpage.'
        }
    },
    {
        key: 3,
        name: 'AI Quiz Game',
        image: MVP,
        gif: MVPGif,
        skills: 'React, MongoDB, MaterialUI, OpenAI API',
        gitLink: 'https://github.com/koenarnold/MVP',
        notes: {
            objective:'An online quiz game where the user enters a topic and a quiz is generated for them based on their topic.',
            challenges:'The main challenege in this project was getting the response from the OpenAI API to be in the correct format, it took a lot of trial and error to get a specific enough prompt. Another challenge I had was figuring out how I would save quizzes, which ended up being pretty simple as I would just immediately save the questions and answers to an object.',
            learned:'I got a lot of experience with React through this project, this was also my first time using Material UI, which I enjoyed learning to use.'
        }
    },
]