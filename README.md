# 👁‍🗨 PROJECT BERGSTER 👁‍🗨

## Inspiration

Yair's teacher once told a story how his nephew had a hard time recognizing emotions and social queues when growing up, resulting in having to consult multiple medical professional throughout the majority of their youth, which ended up being very costly.  This helped inspire us to come up with a cost effective, but also self sustainable and effective solution to solve the problem for people who have a difficult time understanding and recognizing their emotions. 

## What it does

Project Bergster uses your webcam to detect your face and emotions in real-time. It does not rely on an internet connection for processing, and is self generating meaning it learns more about you the more you use it. The app can record your expressions 
and output your raw data visually or graphically, as well as analyze your expressions in real time through your webcam. The main feature of Bergster is it's user testing feature where it will make you display a list of randomly chosen emotions, and then give you the raw data as well as a calculated score to how accurate your performance is based off of the pre-trained model that it was created with. This is project is ultimately designed as a supplementary for a function which allows users with social disabilities practice perceiving/displaying emotion, which can lead to improvement of their quality of life

## How we built it


React: For the web app's structure and functionality.
ContextAPI: for managing the application's state.
TailwindCSS: for quick and easy styling with utility classes.
FramerMotion: for creating smooth animations.
face-api.js: to handle face and emotion detection directly in the browser.
react-router-dom: to enable lazy loading of components for improved performance.
react-webcam: for integrating the webcam functionality.
html2canvas & jspdf: to allow exporting the emotion analysis chart as a PDF.
NodeJS: Package manager& localhosting.

## Challenges we ran into
Mobile Performance: While the app works well on desktops, user interactions and animations can lag on mobile devices due to the processing demands of facial recognition in the frontend.
Development Trade-offs: Choosing face detection in the frontend for offline functionality resulted in some user experience performance drawbacks on mobile or weaker processor's devices.
Code Management: As the project grew, writing effective as well as well formatted code was crucial for our teams collaboration as well as maintaining the code's quality.
Lack of Sleep: Self explanatory

## Accomplishments that we're proud of

- Researched backed. According to ["Effectiveness of Emotion Recognition Training for Young Children with Developmental Delays" by Andrew Downs and Paul Strand](https://files.eric.ed.gov/fulltext/EJ805611.pdf) , children suffering from social impairments can exercise/train their abilities to perceive/display emotion which leads to better quality of life and more desirable social interactions.
 - Offline Functionality: Project Bergster can function entirely offline after the initial model download, making it usable even with limited or no internet access.
Seamless User Experience: We worked hard to make a very clean UI which is user friendly and very easy to use/interpret
- Data Privacy: By processing facial recognition in the front end, Project Bergster avoids sending user data to a server, enhancing user privacy.
- It Works! The project is live and was planned, designed and executed as intended which is definitely unconventional for a 3 day hackathon.

## What we learned

The importance of clean code for improved code maintainability and developer experience in larger projects.

You do not need to use a major LLM or generative AI platform to create self learning web apps.

Balancing functionality with user experience, especially when considering mobile device limitations.

## What's next for Project Bergster
Our scalability is endless, but some of our main points include:
- Optimizing performance for mobile devices to ensure a smoother user experience.
- Exploring alternative approaches for facial recognition that balance functionality and user experience across different platforms.
- Implementing potential backend functionalities if needed for future features.
- Expanding this to be used in medical offices or to be prescribed as a medical tool to aid in recovery/mental training
- Utilizing the tool/recognition capabilities in classrooms or zoom calls for companies to recognize an audiences emotions towards a subject(s)

# Thank you for your time!
