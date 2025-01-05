import "@styles/ReactiveForm.css";

import { useState } from "react";
import { db, collection, addDoc, serverTimestamp } from "@utils/firebase_utils";

const ContactForm = ({ data }) => {
    const [formData, setFormData] = useState({});

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
            await addDoc(collection(db, "contacts"), {
                ...formData,
                timestamp: serverTimestamp(),
            });

            alert("Your message has been submitted!");
            setFormData({}); // Clear form after submission
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
