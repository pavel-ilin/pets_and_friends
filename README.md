# Pets and Friends

This application was made in parthership with [Ethan Fournier](https://github.com/EthanJF). It was designed for people who like tamagotchi game. Main purpose of the game is to show empathy and take care of the pets user adop.

## Demo
Check out [Pets and Friends](https://naughty-einstein-119d55.netlify.com) app


## Key Features
- Ability to adpopt pets and take care of them
- Using DialogFlow chat-bot demo for  social interaction with pet
- Login/Signup secured with bcrypt & JWT Auth
- Easy to access API functionality using  API for derivated work
- Conditional rendering and keyframe animations
- Fun for the whole family

# Installation
  ### Prerequisites
  Smart App is built using React, Ruby, Ruby on Rails & PostgresQL. Make sure you have the latest versions of all four components installed before cloning this repo. You can find their official installation guides below:
  - [React](https://reactjs.org/docs/getting-started.html)
  - [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
  - [Ruby On Rails](https://guides.rubyonrails.org/v5.0/getting_started.html)
  - [PostgresQL](https://www.postgresqltutorial.com/)
  
&nbsp;

  ### Frontend
  - Clone the most recent branch in this repository
  - Run `npm install` in your bash-enabled terminal to make sure all dependancies are installed
  
  You can run `npm start` but you will not be able to login and use the application correctly. 
    
&nbsp;  

  ### Backend
  
  #### Windows Installation
  - Add the line `gem 'wdm', '>= 0.1.0'` to Gemfile before running `bundle install`
  
  #### MacOS Installation
  - Remove the line `gem 'wdm', '>= 0.1.0'` from Gemfile before running `bundle install`
 
  #### Universal Installation
  - Clone the most recent branch from The Backend Repository
  - Run `rvm use Ruby-2.6.1` to make sure you are using the correct version of Ruby 
  - Run `bundle install` to install all gems/dependancies required for SmartApp 
  - Run `rails db:create` to create a local PostgresQL database
  - Run `rails db:migrate` to create the tables/columns required for proper SmartApp functionality
  - Run `rails db:seed` to populate the columns with rows of "real" data
  - Create a file called `.env` in the backend directory (/root/backend/) and add `HMAC_SECRET = "<insert secret string here>"` to the file

&nbsp;
  ### First Start
   If you have not received any errors/resolve any errors you have encountered during Frontend/Backend Installation, you are ready to start SmartApp for the first time.
    
  First:
  - Run `rails s -p 3001` to start the backend server on port 3001. 
  
  The server must run on 3001 as all the fetch requests on the frontend point to port 3001. If you can not or do not want to run the backend server on port 3001, you will need to update all frontend fetch requests accordingly. 
  
  Second:
  - Run `npm start` **in a separate bash terminal window** to start the frontend server on port 3000
  
  Third:
  - You can now access Frontend portion of the app by visiting: `http://localhost:3000` 
  - You can now access Backend portion of the app by visiting: `http://localhost:3001` 
  
  Thats it! Have fun breaking/fixing/doing whatever you want with SmartApp. The world is your oyster!

&nbsp;

   **If you have recieved any errors during this process, feel free to [contact me](https://www.linkedin.com/in/pavel-ilin) so I can help you and update this readme accordingly**
 
&nbsp;

2019 (c) Ethan Fournier, Pavel Ilin
