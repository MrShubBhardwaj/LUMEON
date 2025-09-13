# LUMEON

---

### **Team Information**

**Team Name:** CTRL+C

**Members:**
* Shubham Bhardwaj
* Anshul Sharma
* Aarav Chib
* Hardik Bindal
* Rishita Roy

---

### **Key Features**

* **Projects Hub:** Post and browse tech projects that need collaborators.
* **Skill Swap:** Share your expertise and connect with others who need your skills.
* **Real-time Community Chat:** Engage in live conversations with other members in topic-specific channels.
* **User Authentication:** Securely log in to access platform features.
* **User Profiles:** View a basic profile for each user, tied to their posts and chat messages.

---

### **Tech Stack**

* **HTML:** Provides the core **structure** for every page.
* **CSS (Tailwind CSS):** Handles all **styling and responsive design**. We use Tailwind's utility classes directly in the HTML for a modern, mobile-first look.
* **JavaScript:** The application's **logic**. It handles all dynamic behavior, user authentication, and data manipulation.
* **Firebase/Firestore:** Our **backend service**. We use Firestore as a real-time, NoSQL database to store and retrieve all project, skill, and chat data. The `onSnapshot` listener ensures that the UI updates instantly when data changes.

---

### **How to Run the Application**

LUMEON is a set of single-file HTML applications. To run the project locally, you only need to serve the files using a simple web server.

1.  Save all the provided `.html` files in the same folder.
2.  Open the folder in VS Code and use the **Live Server** extension.
3.  Right-click on `index.html` and select **"Open with Live Server"**.

The application will launch in your default browser. Since the project uses Firestore, you will not need to set up your own database—the files will connect to a pre-configured, secure instance.

---

### **Important Notes & Troubleshooting**

* **Authentication:** The app uses Firebase Authentication. To test the features, you must first navigate to the `auth.html` page to register or log in.
* **User Display Name:** The app correctly fetches the logged-in user's name from their profile stored in the database. The "Post" and "Send" buttons are disabled until the user's name is successfully loaded to prevent errors like the one we recently fixed.
* **File Structure:** All HTML, CSS, and JavaScript for each page are contained within a **single file** for simplicity and ease of use in a platform environment. For example, all the code for the projects page is in `projects.html`.
* **Known Issues:** The most recent fix addressed an issue where an `undefined` value was being sent to the database. This has been resolved by only sending the required user `uid` and `name` information.

---

### **Future Enhancements**

* **Direct Messaging:** Add a private chat feature for users to connect one-on-one.
* **Personal Portfolios:** Create a dedicated section on user profiles to showcase projects and accomplishments.
* **Advanced Search:** Implement robust search and filtering options for the Projects and Skill Swap pages to make discovery easier.

```eof
