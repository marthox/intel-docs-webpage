import "@styles/ReactiveForm.css";

import { useState } from "react";
import {
    collection,
    addDoc,
    serverTimestamp,
    getFirebaseDb,
} from "@utils/firebase_utils";

const ContactForm = ({ data, firebaseConfig }) => {
    const [formData, setFormData] = useState({});
    const db = getFirebaseDb(firebaseConfig);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(db, data.fields.id), {
                ...formData,
                timestamp: serverTimestamp(),
            });

            alert("Your message has been submitted!");
            setFormData({});
        } catch (error) {
            alert("There was an error. Please try again.");
        }
    };

    const formFields = data?.fields?.formFields || [];

    return (
        <form className="reactiveform" onSubmit={handleSubmit}>
            {formFields.map(({ fields }) => {
                const { id, type, text, placeholder } = fields;
                return (
                    <div key={id}>
                        <label htmlFor={id}>{text}</label>
                        <input
                            type={type}
                            id={id}
                            name={id} // Changed from text to id
                            placeholder={placeholder}
                            value={formData[id] || ""} // Changed from text to id
                            onChange={handleInputChange}
                        />
                    </div>
                );
            })}

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
