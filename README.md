In this project, let's build a Admin UI by using the React js concepts.


(https://user-images.githubusercontent.com/89067902/155120034-edf14407-a59c-464a-a5fb-e923662f937e.png)

Set Up Instructions
Download dependencies by running npm install
Start up the app using npm start
Use third-party-packages are npm install styled-components --save, npm install react-loader-spinner --save used in out projects .
Admin Component

In this UI , we can select user by searching with name, email, role.
And Also User able to Edit the data.
User can select users, can also able to select multiple users
User can also delete by selecting multiple users
User can view 10 users at atime
User can easily navigate to next pages by using Pagination
Individual Users also we can delete from the list of users.
User Component

In this Component We can implement with class Component
User can click on checkbox, means we are selecting user.
This contains name, email, role, and also checkbox and delete icon along with edit icon.
If we click on click edit button we cam able to edit user Details
Pagination Component

Pagination Component contains currentPagesCount, currentPage, nextPagesCount, previousPageCount
By using this we are navigate to forward, backward, previous, starting pages easily
This can be achieved by using third-party package Pagination , provided by React
A User can see multiple pages based on PageNumbers available in the bottom of a Admin Component.
AdminApiUrl

API: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
Description:
Returns a response based on the credentials provided

Sample Success Response
[ { "id": "1", "name": "Aaron Miles", "email": "aaron@mailinator.com", "role": "member" }, { "id": "2", "name": "Aishwarya Naik", "email": "aishwarya@mailinator.com", "role": "member" }, { "id": "3", "name": "Arvind Kumar", "email": "arvind@mailinator.com", "role": "admin" } ]

Important Instructions:

Wrap the Loader component with an HTML container element and add the testid attribute value as loader to it
<div className="loader-container" testid="loader">
  <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
</div>
