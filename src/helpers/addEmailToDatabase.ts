// Import necessary functions from Firebase Firestore
import { addDoc, collection, query, getDocs, where } from "firebase/firestore";
// Import the Firestore instance
import { db } from "../config/firebaseConfig";
import {Toast} from "./toast";

// Define an asynchronous function to add an email to the database
async function addEmailToDatabase(email: string, role: string) {
    // Get a reference to the "stakeholders" collection
    const users = collection(db, "stakeholders");
    // Define a query to find documents where the "email" field is equal to the provided email
    const search = query(users, where("email", "==", email));
    // Execute the query and get the results
    const data = await getDocs(search);
    // Map the results to an array of objects, each containing the document data and id
    const filteredData = data.docs.map((i) => ({ ...i.data(), id: i.id }));
    // If no documents were found that match the query
    if (filteredData.length === 0) {
        // Add a new document to the "stakeholders" collection with the provided email and role, and the current date
        await addDoc(users, {
            email: email,
            role: role,
            date: new Date(),
        });
        // Use the Toast instance
        Toast.fire({
            icon: "success",
            title: "Success",
            text: "Email added to our wait list!",
        });
    } else {
        // Use the Toast instance
        Toast.fire({
            icon: "error",
            title: "Oops...",
            text: "User already exists!",
        });
    }
}

// Export the function
export { addEmailToDatabase };
