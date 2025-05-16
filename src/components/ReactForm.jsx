export default function Form({
    formId,
    formTitle,
    formDescription,
    formFields,
    lang = "en",
}) {
    return (
        <div className="form-container" data-lang={lang}>
            <div className="rich-text-content">
                <h1>{formTitle}</h1>
                <div dangerouslySetInnerHTML={{ __html: formDescription }} />
            </div>
            <form
                className="reactiveform"
                name={formId}
                method="POST"
                netlify-honeypot="bot-field"
                action={`/${lang}/thank-you`}
                netlify
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
