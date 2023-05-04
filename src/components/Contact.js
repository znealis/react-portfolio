import React from "react";


const Contact = () => {
    return(
        <section className="bg-secondery px-5 py-32" id="contact">
            <div className="text-center md:w-[60%] mx-auto text-white">
                <h2 className="text-4x1 font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
                    Contact Me
                </h2>
                <p>
                    I am currently open for a fulltime Frontend Developer role. 
                    As well as open for Entry level Cyber Security positions.
                    Reach out if you would like to dicuss potentional opportunity.
                </p>

                <p className="py-2">
                    <span className="font-bold">Email:</span> z.nealis@gmail.com
                </p>
                <p className="py-2">
                    <span className="font-bold">Phone:</span> 856-308-2521
                </p>
            </div>
        </section>
    );
};

export default Contact;