# social-network-API
Social Network API is a Web Application  for a social network  where users can share their thoughts, react to friends’ thoughts, and create a friend list using Express.js for routing, a MongoDB database, and the Mongoose ODM.

#

## Video URL
https://drive.google.com/file/d/1GXbbjvbQJVs22-xbr73j8ApM5oh01cgZ/view


#
## Usability

* This application gives the user the ability to create new user
![screenshots](./screenShots/Screenshot%202023-03-26%20151550.png)

#
* Get all users
![screenshots](./screenShots/Screenshot%202023-03-26%20152021.png)

#
* Get User By ID
![screenshots](./screenShots/Screenshot%202023-03-26%20152300.png)

#
* Update User by ID sent as request parameter in the URL
![screenshots](./screenShots/Screenshot%202023-03-26%20152458.png)
#
* Delete User by ID and then delete the thoughts of the user if exists (Bonus)

    * First we will get all user to be able to get the user ID 
    ![screenshots](./screenShots/Screenshot%202023-03-26%20155354.png)

    * Then , we will send the user ID as a parameter in the URL
     ![screenshots](./screenShots/Screenshot%202023-03-26%20155522.png)
#

* Create New Thought associated with a certain user (User ID)

![screenshots](./screenShots/Screenshot%202023-03-26%20154312.png)

#
#

* Get All Thoughts
![screenshots](./screenShots/Screenshot%202023-03-26%20165008.png)

#
* Get Thought By ID
![screenshots](./screenShots/Screenshot%202023-03-26%20165124.png)

#
* Update Thought By ID
![screenshots](./screenShots/Screenshot%202023-03-26%20165821.png)

#
* Delete Thought by sending the thought ID as a parameter in the URL and delete the same thought from the associated user as well (Bonus)

    * First we get the user ID that has thoughts
    ![screenshots](./screenShots/Screenshot%202023-03-26%20165949.png)

    * Second, we delete the thought by ID
    ![screenshots](./screenShots/Screenshot%202023-03-26%20170207.png)

    * Finally, we make sure that that thought has been deleted from the associated user
        ![screenshots](./screenShots/Screenshot%202023-03-26%20170541.png)

#
Update Thought by thought ID
![screenshots](./screenShots/Screenshot%202023-03-26%20171330.png)

#
#
Add Reaction  to a certain thought
![screenshots](./screenShots/Screenshot%202023-03-26%20171631.png)

#
Delete Reaction
![screenshots](./screenShots/Screenshot%202023-03-26%20171956.png)

#
#

## Installation

* Get a copy from my repository
Git Clone https://github.com/shaimaaGhamry/social-network-API.git

* open the VS Code and open the folder in which the application is cloned
and then open the integrated terminal:

       *  npm install
        to install express and mongoose libraries

* Then run the server
 nodemon index.js
