import "@styles/ReactiveForm.css";

const ContactForm = ({ data }) => {
    const formFields = data?.fields?.formFields || [];

    return (
        <form className="reactiveform" data-netlify="true">
            {formFields.map(({ fields }) => {
                const { id, type, text, placeholder } = fields;
                return (
                    <div key={id}>
                        <label htmlFor={id}>{text}</label>
                        <input
                            type={type}
                            id={id}
                            name={id}
                            placeholder={placeholder}
                        />
                    </div>
                );
            })}

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
