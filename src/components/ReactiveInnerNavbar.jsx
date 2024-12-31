import "@styles/reactiveInnerNavbar.css";

import { useState } from "react";

const InnerNavbar = ({ data }) => {
    const [innerNavbarCategoryContent, setInnerNavbarCategoryContent] =
        useState(0);

    return (
        <>
            <nav className="reactive-inner-navbar">
                {data.map((category, index) => {
                    const {
                        fields: { title, url },
                    } = category;
                    return (
                        <button
                            key={`${category.sys.id}${index}`}
                            onClick={() => setInnerNavbarCategoryContent(index)}
                            className={
                                innerNavbarCategoryContent === index
                                    ? "active"
                                    : ""
                            }
                        >
                            <a href={url} className="cta">
                                {title}
                            </a>
                        </button>
                    );
                })}
            </nav>
            <div className="reactive-inner-navbar-container">
                {data[innerNavbarCategoryContent].fields.cardCta.map((cta) => {
                    return (
                        <div className="cta-card" key={cta.id}>
                            <img
                                src={cta?.fields?.cardImage?.fields?.file?.url}
                            />
                            <a href={cta.fields.url} className="cta">
                                <span className="cta">{cta.fields.text}</span>
                            </a>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default InnerNavbar;
