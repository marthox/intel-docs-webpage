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
                    const cardImage = cta.fields.cardImage.fields.file.url;
                    const cardText = cta.fields.text;

                    const ctaUrl = cta.fields.url;

                    const ctaPage = cta.fields.ctaPage;
                    const ctaPageSlug = ctaPage?.fields.slug;
                    const ctaPageLang = ctaPage?.sys.locale;
                    const ctaPageUrl = `/${ctaPageLang}/${ctaPageSlug}`;

                    return (
                        <div className="cta-card" key={cta.id}>
                            <img src={cardImage} />
                            <a href={ctaUrl || ctaPageUrl} className="cta">
                                <span className="cta">{cardText}</span>
                            </a>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default InnerNavbar;
