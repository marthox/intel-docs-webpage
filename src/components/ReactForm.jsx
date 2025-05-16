import { useState } from "react";

function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
}

export default function Form({
    formTitle,
    formDescription,
    formFields,
    lang = "en",
}) {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new window.FormData(form);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        data["form-name"] = form.getAttribute("name");
        alert("Submitting data: " + JSON.stringify(data, null, 2));
        setSubmitting(true);
        try {
            await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode(data),
            });
            window.location.href = `/${lang}/thank-you`;
        } catch (error) {
            alert("Submission failed: " + error);
            setSubmitting(false);
        }
    };

    return (
        <div className="form-container" data-lang={lang}>
            <div className="rich-text-content">
                <h1>{formTitle}</h1>
                <div dangerouslySetInnerHTML={{ __html: formDescription }} />
            </div>
            <form
                className="reactiveform"
                name="contact"
                data-netlify="true"
                method="POST"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                <p className="hidden">
                    <label>
                        Don't fill this out if you're human:{" "}
                        <input name="bot-field" />
                    </label>
                </p>
                <input type="hidden" name="form-name" value="contact" />
                {formFields.map((data) => {
                    const fields = data.fields;
                    const { id, type, text, placeholder, required } = fields;
                    return (
                        <div id={id} key={id}>
                            <label htmlFor={id}>{text}</label>
                            <input
                                type={type || "text"}
                                id={id}
                                name={id}
                                placeholder={placeholder}
                                required={required}
                            />
                        </div>
                    );
                })}
                <button type="submit" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
