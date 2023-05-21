
const Blog = () => {
    return (
        <div className='w-full md:w-5/6 mx-auto px-3 mt-12 mb-12'>
            <h1 className="text-3xl text-center font-semibold mb-7">Question & Ans:</h1>

            <div className='mb-3'>
                <div >
                <h1 className='text-xl'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p>Ans: <small>An access token is a credential used to authenticate and authorize access to an API. It is typically short-lived and grants temporary access. A refresh token is a long-lived credential used to obtain new access tokens when they expire. Access and refresh tokens should be securely stored on the client-side, preferably in a secure storage mechanism such as a secure cookie or the .</small></p>
                </div>

                <div>
                    <h1 className='text-xl'>2. Compare SQL and NoSQL databases?</h1>
                    <p>Ans: <small>SQL databases are structured, relational databases that use structured query language (SQL) for defining and manipulating the data. NoSQL databases are non-relational databases that provide flexible data models and are designed to handle large amounts of unstructured or semi-structured data. SQL databases offer strong consistency and ACID transactions, while NoSQL databases prioritize scalability, flexibility, and eventual consistency.</small></p>
                </div>


                <div className='mt-3 mb-3'>
                    <h1 className='text-xl'>3. What is express js? What is Nest JS?</h1>
                    <p>Ans: <small>Express.js is a popular web application framework for Node.js that simplifies the development of web applications and APIs. It provides a robust set of features and middleware to handle routing, request handling, and response generation.
Nest.js is a progressive Node.js framework built on top of Express.js, leveraging TypeScript and object-oriented programming principles. It provides a scalable and modular architecture, dependency injection, and out-of-the-box support for features like routing, validation, and authentication, making it suitable for building complex and scalable applications.</small></p>
                </div>



                <div>
                    <h1 className='text-xl'>4. What is MongoDB aggregate and how does it work?</h1>
                    <p>Ans: <small> Mongodb aggregate is a powerful operation that allows for advanced data processing and analysis in a MongoDB database. It performs complex operations like filtering, grouping, sorting, and transforming data using a pipeline of stages. Each stage applies a specific operation to the input documents, passing the results to the next stage, ultimately producing the desired output.</small></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;