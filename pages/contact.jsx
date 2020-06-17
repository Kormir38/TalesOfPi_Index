import React from "react";

export default function Contact() {
    return(
        <main className="container is-fluid">
            <div className="hero v-centered">
                <div className="hero-body has-text-centered">
                    <h1 className="title">
                        Contact
                    </h1>
                    <h2 className="subtitle">
                        Feeling chatty?
                    </h2>
                </div>
            </div>
            <section className="section container v-centered">
                <div className="hero v-centered">
                    <div className="hero-body has-text-centered">
                        <h1 className="title">
                            By mail
                        </h1>
                        <h2 className="subtitle">
                            <a href="mailto:clement.alexandre@protonmail.com">clement.alexandre@protonmail.com</a>
                        </h2>
                    </div>
                </div>
                <div className="hero">
                    <div className="hero-body has-text-centered">
                        <h1 className="title">
                            Through LinkedIn
                        </h1>
                        <h2 className="subtitle">
                            <a href="https://www.linkedin.com/in/clement-alexandre" target="_blank">@clement-alexandre</a>
                        </h2>
                    </div>
                </div>
            </section>
        </main>
    );
}