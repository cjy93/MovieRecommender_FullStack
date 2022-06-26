# MovieRecommender_FullStack
## Author: Chan Jia Yi
## Date: 26 Jun 2022

# Scrapping Data
1) Python Codes located in '2022_ScrapeMovies.ipynb'
2) Python requirements set up in 'requirements.txt'
3) Data located in  '/data'
4) Other images located in '/images'

# Agenda
- Setting Up
- Index.html
- aboutUs.html + cathaypromotion.html + goldenVpromotion.html + shawpromotion.html
- Listing.html
- movieDetail.html
- movieDetail_review.html + 0.html + …. + 42.html
- Contact.html
- Chatbot.html

# Tech Stack Used
- Python BeautifulSoup - webscrapping
- Native Javascript - interactivity
- D3.js – read and use csv data
- API to link html forms to Google Spreadsheet
- Rasa and Rasa Webchat – for Recobotmmender system chatbot
- HTML - layout
- CSS - styling

# Setting up
`conda create --name chatbot3 python==3.8`  
`conda activate chatbot3`  
`pip install rasa --use-deprecated=legacy-resolver`  
`pip install sanic==21.9.3`  
`rasa --version`  

# How to Operate Rasa chat  
How to operate my chatbot?  
First, access the folder of your command prompt to where this file resides.  
1) `conda activate chatbot3` where "chatbot3" is my conda environment with Rasa and NPM installed
2) Go to the folder where your Rasabot resides
3) Run custom actions on first terminal `python -m rasa run actions` by https://learning.rasa.com/archive/rasa-forms-2/custom-actions/
3) Serve on server on second terminal `rasa run -m models --enable-api --cors "*"`
4) Open chatbot.html file on Chrome (can also access via index.html to link here)

# Start of the html explanation
## index.html
### Main Landing Page/ Home Page
![image](https://user-images.githubusercontent.com/40426221/175814359-98a6db0e-4ed3-418f-9e3e-1c6ae0effc1a.png)
1) Blue button will lead to `aboutUs.html`  
2) Movie listings and details card will lead to `listing.html`  
3) Contact us card will lead to `contact.html`
4) Live chat card will lead to `chatbot.html` under the folder “chatbot”. This is powered by Rasabot.
![image](https://user-images.githubusercontent.com/40426221/175814364-4bafa619-5eb4-4099-aab2-dc428606da4f.png)

## aboutUs.html
### About Us and Promotions
![image](https://user-images.githubusercontent.com/40426221/175814390-90f68e2b-8511-4e36-9015-b72df595fda5.png)
1) Click on LaBamBa logo for shortcut back to home page
2) Latest promotions cards will lead to `cathaypromotions.html`, `goldenVpromotions.html` and `shawpromotions.html` respectively.
3) Navigation cards under `Explore more here` will lead back to homepage too.
4) The carousel on top is fully written in native Javascript, and is interactive.

![image](https://user-images.githubusercontent.com/40426221/175814410-f876e835-fb50-466d-a23c-2185d9be4ada.png)
1) LaBamBa logo will lead us back to home page when clicked
2) Button “Click here to go to Cathay” leads us to Cathay official website
3) Promotional pictures are toggleable by clicking on “1” “2” or “3”
4) Carousell are toggleable by clicking on the circles below the image or arrows
5) Navigation tab under “Explore more here”.

![image](https://user-images.githubusercontent.com/40426221/175814430-bf7a0959-0e73-416a-94bf-493f84b5fc04.png)
1) LaBamBa logo will lead us back to home page when clicked
2) Button “Click here to go to GV” leads us to Golden Village official website
3) Promotional pictures are toggleable by clicking on “1” “2” or “3”
4) Carousell are toggleable by clicking on the circles below the image or arrows
5) Navigation tab under “Explore more here”.

![image](https://user-images.githubusercontent.com/40426221/175814449-ac7f4296-83b0-45e0-add9-174768b224e1.png)
1) LaBamBa logo will lead us back to home page when clicked
2) Button “Click here to go to Shaw” leads us to Shaw Theatre’s official website
3) Promotional pictures are toggleable by clicking on “1” “2” or “3”
4) Carousell are toggleable by clicking on the circles below the image or arrows
5) Navigation tab under “Explore more here”.

## Listing.html
### List of movies
![image](https://user-images.githubusercontent.com/40426221/175814483-2b2192b5-830d-4aca-9908-0ac010c15c6a.png)
Click on “Movie Listings and details!” card
![image](https://user-images.githubusercontent.com/40426221/175814503-332b2815-01e0-4d2a-977b-bf3045942b94.png)
1) LaBamBa logo will lead us back to home page when clicked
2) Search bar is interactive, when you type part of the movie name, it will start filtering by matched characters
3) Click on Poster or Movie titles to access the `movieDetails_review.html` page.
4) Navigation tab under “Explore more here”.
5) All the movie listings are unique and lead to real movie data correspondingly. Data scrapped with codes from IMDB and Google Images. (Youtube is manually collected)  

## movieDetail.html
### Movie Details of selected movie
![image](https://user-images.githubusercontent.com/40426221/175814540-e86e2541-b959-4379-b077-607c753c204c.png)
Eg: Top Gun  
This is first half of page  
1) Youtube video is embedded. 
2) Recommendations posters or movie names, once clicked will lead to its movie trailer Youtube video
3) “Click here for Full Review” will lead to its review page under `0.html` since Top Gun is under index 0 of my csv file.
4) Click on actor poster to lead to IMDB actor’s profile page
5) LaBamBa logo will lead back to Home Page  

![image](https://user-images.githubusercontent.com/40426221/175814573-f3cd8ed2-293b-4b54-b289-1bcf4af90ea9.png)  
Cont’d  
6) Navigation cards under `Explore more here` will lead back to other pages
7) If you open the file `movieReview.html` directly, you will not see the website. You have to select a movie from Listings page at `listings.html` then the relevant data will populate here. It is populated by d3.js and calling the selected id from `localStorage[‘id’]`
![image](https://user-images.githubusercontent.com/40426221/175814574-434b18aa-96db-4a5d-8c8c-114091cce857.png)

## movieDetail_Review.html
### Movie Review of the selected movie
From `0.html` to `42.html` under folder `reviews_per_movie`  
![image](https://user-images.githubusercontent.com/40426221/175814606-8372b1c8-fc70-4ccb-a9ad-6626d6533434.png)  
Click on “Click Here for Full Review” to reach the reviews page!  

![image](https://user-images.githubusercontent.com/40426221/175814626-5025738c-e644-43f0-a80f-2dd04f78aeee.png)
1) LaBamBa logo will lead back to Home Page
2) This page content is manually collected from review sites. Since there are `0.html` to `42.html`, I collected from 43 websites.  Top Gun review belongs to `0.html`.  

![image](https://user-images.githubusercontent.com/40426221/175814644-4f41f569-65f5-483a-ac15-d0db80e58935.png)  
Cont’d   
3) Navigation cards under `Explore more here`  

## Contact.html
### Form Submission
![image](https://user-images.githubusercontent.com/40426221/175814675-aeedc94f-c732-4093-b97d-7cfcbfa19d1c.png)  
Click on “Contact Us” card from Home Page  

![image](https://user-images.githubusercontent.com/40426221/175814694-7fe3bfe7-3749-4d46-9fb7-fecba4f1d8d1.png)
1) Added form validation feature to all the fields  
2) Submit form button to submit to Google spreadsheet linked to this form.   
3) Reset form to clear all the field boxes  

![image](https://user-images.githubusercontent.com/40426221/175814709-8f5d835a-2cc7-414c-9eda-c2274f1d849f.png)
1) Successful submission will lead to a green success message  
2) User can click on “Reset” to clear page before next submission  

![image](https://user-images.githubusercontent.com/40426221/175814724-2c889beb-9657-4d39-8b16-e4c5c6b75769.png)  
Data is saved directly to my Google sheets, based on address at scriptURL const  
And other set up steps from: https://www.youtube.com/watch?v=s9XZui6zRPw  

## Chatbot.html
### Rasa Chatbot
![image](https://user-images.githubusercontent.com/40426221/175814752-2f1c3411-81cd-411b-9620-b5347d303ced.png)  
1) Click on LiveChat!
2) Bring you to Rasa webchat widget on new windows tab
3) Connect to Rasa server to local webpage via webhook socket io

![image](https://user-images.githubusercontent.com/40426221/175814767-cd3f275d-98eb-45a5-a589-e4a4f27751f3.png)
Rasa chatbot served on Rasa Webchat widget. Rasa linked to server via localhost deployment

# Further work
1) Deploy webapp and Rasa server on Cloud providers
2) Use Hive and cloud databases to schedule the scrapping data process to database.





















