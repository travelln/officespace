
![Logo](https://github.com/travelln/officespace/blob/master/public/images/cover-02.jpg)


Link to website deployed on Microsoft Azure:
[OfficeSpace on Azure](http://officespace-team.azurewebsites.net)


Link to YouTube video of our live presentation:
[OfficeSpace LiveStream](https://youtu.be/gguhPnN588c?t=2h12m47s)

Technologies used:
* MEAN Stack
* Mongodb is used to hold user registration data deployed on a Azure Cosmos DB instance
* bcrypt for password hashing and salting
* Weather Underground API to get the current weather data
* Google Calendar API for scheduling data
* Embedded twitter API -  we included the @Mobify feed as an example and because they were very kind to host us for the hackathon event at their downtown Vancouver office

Some of the interfaces shown on the website are still images and placeholders so that we could get the design of our deployed application on to Azure during the AI Hackathon challenge and match our prototype shown in the above image. If a user registers and logs in they can add chat messages that will show up on the right-hand side of the screen. Our intentions for the chat would be to integrate Microsoft's Teams chat-based workspace, so that it enhances our design idea for a fully functioning work place hub. 

Microsoft Graph API would be used to access all the files a user has on their Microsoft One Drive accounts such as Word, Excel and PowerPoint files so that our AI/Machine Learning algorithms can calculate a "Check My Work" score which is a metric that will draw on a users file as a dataset. This score will help the user to check if their work is up to a quality level that is in line with past submissions at a given office. Different results that we could see the algorithm being trained for using machine learning include if a code submission adheres to style standards and best practices of a company or if a certain Microsoft office file (i.e. word document) achieves a threshold of quality.
 
We would like to thank Microsoft for providing us with Azure credits for the challenge that allowed us to access all the technologies used to deploy our app quickly and easily on their cloud hosting servers.


Thank you for visiting our page!

* Annick Lung
* Sunny Singh
