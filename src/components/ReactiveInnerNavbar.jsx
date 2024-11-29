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
                            onClick={(prev) =>
                                setInnerNavbarCategoryContent(index)
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
                {data[innerNavbarCategoryContent].fields.cardCta?.map((cta) => {
                    console.log(cta);
                    return (
                        <div className="cta-card">
                            <img src={cta.fields.cardImage.fields.file.url} />
                            <button
                                key={cta.id}
                                onClick={() =>
                                    (window.location.href = cta.fields.url)
                                }
                            >
                                <span className="cta">{cta.fields.text}</span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default InnerNavbar;
