import React from "react";
const InnerNavbar = ({ data }) => {
    const {
        fields: { title, innerNavbarCategory },
    } = data;

    return (
        <section>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                {innerNavbarCategory.map((category) => {
                    const {
                        fields: { title, url },
                    } = category;
                    return (
                        <button key={category.sys.id}>
                            <a href={url} className="cta">
                                {title}
                            </a>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default InnerNavbar;
<style jsx>{`
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background-color: #f0f0f0;
        width: 80%;
    }
    button {
        margin: 1rem;
        padding: 1rem;
        background-color: #f0f0f0;
        border: 1px solid black;
        border-radius: 5px;
    }
    .cta {
        text-decoration: none;
    }
`}</style>;
